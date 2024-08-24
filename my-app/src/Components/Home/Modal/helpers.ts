import { ReactElement } from "react";

export interface GenericProps {
  isOpen?: boolean;
  isCloseModal?: boolean;
  children?: ReactElement | any;
}
