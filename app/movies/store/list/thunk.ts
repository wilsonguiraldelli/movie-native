import { ActionType } from 'typesafe-actions';
import { ThunkAction } from 'common/types';

import { upcoming } from './actions'

type HandleUpcomingRequestAction = ActionType<typeof upcoming>;
export const handleUpcoming = (): ThunkAction<HandleUpcomingRequestAction> =>
  async (dispatch, getState) => {
    const state: any = getState();
    const currentPage = state?.movies?.list?.currentPage || 1;

    await dispatch<HandleUpcomingRequestAction>(upcoming.request(currentPage));
  };