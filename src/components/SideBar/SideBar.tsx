import React from "react";
import NavBar from "../NavBar/NavBar";
import * as s from "./StyleSideBar";

interface PropsSideBar {
   isToggle?: boolean;
}

const SideBar: React.FC<PropsSideBar> = ({ isToggle }) => {
   return (
      <s.SideBar isToggle={isToggle}>
         <NavBar />
      </s.SideBar>
   );
};

export default SideBar;
