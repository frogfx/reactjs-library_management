import React from "react";
import NavBar from "../NavBar/NavBar";
import * as s from "./StyleSideBar";

interface PropsSideBar {
   isOpen?: boolean;
}

const SideBar: React.FC<PropsSideBar> = ({ isOpen }) => {
   return (
      <s.SideBar isOpen={isOpen}>
         <NavBar />
      </s.SideBar>
   );
};

export default SideBar;
