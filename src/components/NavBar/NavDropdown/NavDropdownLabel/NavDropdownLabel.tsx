import React, { ReactChild, ReactChildren } from "react";
import * as s from "../StyleNavDropdown";

interface PropsLable {
   children?:
      | string
      | ReactChild
      | ReactChild[]
      | ReactChildren
      | ReactChildren[];
}

const NavDropDownLable: React.FC<PropsLable> = ({ children }) => {
   return (
      <s.Label>
         <s.LabelLeft>{children}</s.LabelLeft>
         <s.LabelRight>
            <s.AngleDownIcon />
         </s.LabelRight>
      </s.Label>
   );
};

export default NavDropDownLable;
