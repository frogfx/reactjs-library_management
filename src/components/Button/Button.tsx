import React, { ReactChild, ReactChildren, MouseEventHandler } from "react";
import * as s from "./StyleButton";

// enum ButtonTypes {
//    "button",
//    "submit",
//    "reset",
//    undefined,
// }

interface PropsButton {
   children?:
      | string
      | ReactChild
      | ReactChild[]
      | ReactChildren
      | ReactChildren[];
   onClick?: MouseEventHandler<HTMLButtonElement>;
   typeColor?: string;
   type?: "submit" | "reset" | "button";
}

const Button: React.FC<PropsButton> = ({
   children,
   typeColor,
   type,
   onClick,
}) => {
   return (
      <s.Button typeColor={typeColor} type={type} onClick={onClick}>
         {children}
      </s.Button>
   );
};

export default Button;
