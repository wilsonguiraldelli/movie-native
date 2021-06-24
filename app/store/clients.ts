/* eslint-disable no-console */
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import { Store } from 'redux';

// @ts-ignore
import { BASE_URL } from '@env';

export interface ClientsList {
  [name: string]: { client: AxiosInstance; options: object };
  default: { client: AxiosInstance; options: object };
}

const clients: ClientsList = {
  default: {
    client: axios.create({
      baseURL: BASE_URL,
      responseType: 'json',
      timeout: 10000,
    }),
    options: {
      returnRejectedPromiseOnError: true,
      interceptors: {
        request: [
          (config: AxiosRequestConfig) => ({
            ...config,
            headers: {
              ...(config.headers || {}),
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }),
        ],
        response: [
          {
            success: (_store: Store, response: AxiosResponse) => response,
            error: (_store: Store, error: AxiosError) => {
              console.error(error);
              console.dir(error);
              return Promise.reject(error);
            },
          },
        ],
      },
    },
  },
};

export { clients };
