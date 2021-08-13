import React from "react";
import UserAccount from "../UserAccount/UserAccount";
import * as s from "./StyleHeader";

const Header: React.FC = () => {
   return (
      <s.Header>
         <s.Toggle>
            <s.BarsIcon />
         </s.Toggle>
         <UserAccount />
      </s.Header>
   );
};

export default Header;
