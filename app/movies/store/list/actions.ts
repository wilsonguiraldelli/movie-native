import { createAction, createAsyncAction } from 'typesafe-actions';

import queryString from 'query-string';

import { RequestPayload } from 'common/types';
import { AxiosResponse, AxiosError } from 'axios';

// @ts-ignore
import { API_KEY } from '@env';

export const setCurrentPage = createAction('MOVIES/LIST/SET_CURRENT_PAGE')<Number>()

const upcomingQueryString = (page: Number) => `?${queryString.stringify({
  api_key: API_KEY,
  language: 'en-US',
  page,
})}`

export const upcoming = createAsyncAction(
  ['MOVIES/LIST/GET_UPCOMING', (page: Number): RequestPayload => ({
    request: {
      method: 'GET',
      url: `/upcoming${upcomingQueryString(page)}`,
    },
  })],
  ['MOVIES/LIST/GET_UPCOMING_SUCCESS', (response: AxiosResponse<{}>): AxiosResponse<{}> => response],
  ['MOVIES/LIST/GET_UPCOMING_FAILURE', (error: AxiosError): AxiosError => error],
)();