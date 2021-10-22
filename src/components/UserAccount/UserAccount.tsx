import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { State } from "../../state/reducers";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import OutsideClickHandler from "react-outside-click-handler";
import * as s from "./StyleUserAccount";
import { Link } from "react-router-dom";

const UserAccount: React.FC = () => {
   const navigate = useNavigate();
   const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
   const dispatch = useDispatch();
   const { logOut } = bindActionCreators(actionCreators, dispatch);
   const toggle = () => setIsOpenDropdown(!isOpenDropdown);
   const user = useSelector((state: State) => state.auth.user);
   const socket = useSelector((state: State) => state.socket.socket);

   const handleLogout = () => {
      logOut(socket);
      navigate("/login");
   };
   return (
      <OutsideClickHandler onOutsideClick={() => setIsOpenDropdown(false)}>
         <s.UserAccount>
            <s.Label onClick={toggle}>
               <s.Image src={`${process.env.REACT_APP_BE}${user?.image}`} />
               <s.Name>{user?.name}</s.Name>
               <s.AngleDownIcon />
            </s.Label>
            <s.Dropdown isOpen={isOpenDropdown}>
               <Link to="/profile">
                  <s.DropdownItem onClick={() => setIsOpenDropdown(false)}>
                     <s.UserIcon />
                     <p>Profile</p>
                  </s.DropdownItem>
               </Link>
               <s.DropdownItem onClick={() => handleLogout()}>
                  <s.SignOutIcon />
                  <p>Logout</p>
               </s.DropdownItem>
            </s.Dropdown>
         </s.UserAccount>
      </OutsideClickHandler>
   );
};

export default UserAccount;
