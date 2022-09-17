import { LOADER, IAction } from "./types";

const loaderAction = (value: boolean): IAction => ({
  type: LOADER,
  payload: value,
});

export default loaderAction;
