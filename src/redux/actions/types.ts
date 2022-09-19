export interface IAction {
  type: string;
  [key: string]: any;
}

export const LOADER = "LOADER";
export const COMMENT = "COMMENT";
export const ALERT = "ALERT";
