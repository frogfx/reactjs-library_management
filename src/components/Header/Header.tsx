import React from "react";
import Logo from "../Logo/Logo";
import UserAccount from "../UserAccount/UserAccount";
import * as s from "./StyleHeader";

interface PropsHeader {
   toggleClick: Function;
}

const Header: React.FC<PropsHeader> = ({ toggleClick }) => {
   return (
      <s.Header>
         <s.HeaderLeft>
            <s.Toggle onClick={() => toggleClick()}>
               <s.BarsIcon />
            </s.Toggle>
            <Logo />
         </s.HeaderLeft>
         <UserAccount />
      </s.Header>
   );
};

export default Header;
