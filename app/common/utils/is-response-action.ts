import { AnyAction } from 'redux';

function isResponseAction<T extends AnyAction>(action: AnyAction): action is T {
  const { payload } = action;
  const isResponse = payload.data && payload.config && payload.request;
  if (!isResponse) {
    throw new Error('Dispatch return value was not a valid response action');
  }

  return true;
}

export { isResponseAction };
