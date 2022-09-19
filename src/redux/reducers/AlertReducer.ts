import { ALERT, IAction } from "../actions/types";

export interface IAlertReducer {
  value: boolean;
  message: string;
  severity?: string;
}

const initialState = {
  value: false,
  message: "",
  severity: "error",
};

export function alertReducer(
  state = initialState,
  action: IAction
): IAlertReducer {
  switch (action.type) {
    case ALERT:
      return {
        ...state,
        value: action.payload.value,
        message: action.payload.message,
        severity: action.payload.severity,
      };
    default:
      return state;
  }
}
