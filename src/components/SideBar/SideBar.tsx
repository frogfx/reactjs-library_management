import React from "react";
import NavBar from "../NavBar/NavBar";
import * as s from "./StyleSideBar";

interface PropsSideBar {
   isToggle?: boolean;
}

const SideBar: React.FC<PropsSideBar> = ({ isToggle }) => {
   return (
      <s.SideBar isToggle={isToggle}>
         <s.Logo>
            <s.BookIcon />
            <span>AppLibrary</span>
         </s.Logo>
         <NavBar />
      </s.SideBar>
   );
};

export default SideBar;
