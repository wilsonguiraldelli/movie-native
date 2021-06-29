import { createAsyncAction, createAction } from 'typesafe-actions';

import queryString from 'query-string';

import { RequestPayload } from 'common/types';
import { AxiosResponse, AxiosError } from 'axios';

// @ts-ignore
import { API_KEY } from '@env';

export const setCurrentPage = createAction('MOVIES/SEARCH/SET_CURRENT_PAGE')<Number>()
export const reset = createAction('MOVIES/SEARCH/RESET')()

const searchQueryString = (value: String, page: Number) => `?${queryString.stringify({
  api_key: API_KEY,
  language: 'en-US',
  page,
  query: value,
})}`

export const get = createAsyncAction(
  ['MOVIES/SEARCH/GET', (value: String): RequestPayload => ({
    request: {
      method: 'GET',
      url: `/search/movie${searchQueryString(value, 1)}`,
    },
  })],
  ['MOVIES/SEARCH/GET_SUCCESS', (response: AxiosResponse<{}>): AxiosResponse<{}> => response],
  ['MOVIES/SEARCH/GET_FAILURE', (error: AxiosError): AxiosError => error],
)();

export const paginate = createAsyncAction(
  ['MOVIES/SEARCH/PAGINATE', (value: String, page: Number): RequestPayload => ({
    request: {
      method: 'GET',
      url: `/search/movie${searchQueryString(value, page)}`,
    },
  })],
  ['MOVIES/SEARCH/PAGINATE_SUCCESS', (response: AxiosResponse<{}>): AxiosResponse<{}> => response],
  ['MOVIES/SEARCH/PAGINATE_FAILURE', (error: AxiosError): AxiosError => error],
)();