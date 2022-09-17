import { LOADER, IAction } from "../actions/types";

export interface ILoaderReducer {
  value: boolean;
}

const initialState = {
  value: false,
};

export function loaderReducer(
  state = initialState,
  action: IAction
): ILoaderReducer {
  switch (action.type) {
    case LOADER:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
}
