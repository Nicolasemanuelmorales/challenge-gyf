import Comment from "../../models/Comment";
import { COMMENT, IAction } from "./types";

const commentAction = (value: Comment[]): IAction => ({
  type: COMMENT,
  payload: value,
});

export default commentAction;
