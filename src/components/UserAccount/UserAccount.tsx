import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
import * as s from "./StyleUserAccount";

const UserAccount: React.FC = () => {
   const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
   const toggle = () => setIsOpenDropdown(!isOpenDropdown);
   return (
      <OutsideClickHandler onOutsideClick={() => setIsOpenDropdown(false)}>
         <s.UserAccount>
            <s.Label onClick={toggle}>
               <s.Image src="https://appstack.bootlab.io/img/avatars/avatar.jpg" />
               <s.Name>Chris Wood</s.Name>
               <s.AngleDownIcon />
            </s.Label>
            <s.Dropdown isOpen={isOpenDropdown}>
               <s.DropdownItem>
                  <s.UserIcon />
                  <p>Profile</p>
               </s.DropdownItem>
               <s.DropdownItem>
                  <s.SignOutIcon />
                  <p>Logout</p>
               </s.DropdownItem>
            </s.Dropdown>
         </s.UserAccount>
      </OutsideClickHandler>
   );
};

export default UserAccount;
