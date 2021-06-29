import { ActionType } from 'typesafe-actions';
import { ThunkAction } from 'common/types';

import { paginate } from './actions'

type HandlePaginateRequestAction = ActionType<typeof paginate>;
export const handlePaginate = (value: String): ThunkAction<HandlePaginateRequestAction> =>
  async (dispatch, getState) => {
    const state: any = getState();
    const currentPage = state?.movies?.search?.currentPage || 1;

    await dispatch<HandlePaginateRequestAction>(paginate.request(value, currentPage));
  };