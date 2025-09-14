import { type Dispatch, type SetStateAction } from "react";

export interface BlogContextType {
  message: string | undefined;
  setMessage: Dispatch<SetStateAction<string | undefined>>;
}
