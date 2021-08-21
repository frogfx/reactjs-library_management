import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import UserAccount from "../UserAccount/UserAccount";
import * as s from "./StyleHeader";

interface PropsHeader {
   toggleClick: Function;
   isToggle?: boolean;
}

const Header: React.FC<PropsHeader> = ({ toggleClick, isToggle }) => {
   return (
      <s.Header isToggle={isToggle}>
         <s.HeaderLeft>
            <s.Toggle onClick={() => toggleClick()}>
               <s.BarsIcon />
            </s.Toggle>
            <Link to="/">
               <Logo />
            </Link>
         </s.HeaderLeft>
         <UserAccount />
      </s.Header>
   );
};

export default Header;
