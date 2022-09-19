import Comment from "../../models/Comment";
import { COMMENT, IAction } from "../actions/types";

export interface ICommentReducer {
  value: Comment[];
}

const initialState = {
  value: [],
};

export function commentReducer(
  state = initialState,
  action: IAction
): ICommentReducer {
  switch (action.type) {
    case COMMENT:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
}
