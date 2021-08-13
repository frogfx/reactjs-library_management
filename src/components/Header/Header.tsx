import React from "react";
import Logo from "../Logo/Logo";
import UserAccount from "../UserAccount/UserAccount";
import * as s from "./StyleHeader";

const Header: React.FC = () => {
   return (
      <s.Header>
         <s.HeaderLeft>
            <s.Toggle>
               <s.BarsIcon />
            </s.Toggle>
            <Logo />
         </s.HeaderLeft>
         <UserAccount />
      </s.Header>
   );
};

export default Header;
