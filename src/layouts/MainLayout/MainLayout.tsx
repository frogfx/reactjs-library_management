import React, { useState } from "react";
import { Outlet } from "react-router-dom";
//import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import * as s from "./StyleMainLayout";

const MainLayout: React.FC = () => {
   const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);
   const handleToggleClick = () => {
      setIsOpenSideBar(!isOpenSideBar);
   };
   return (
      <s.MainLayout>
         <Header toggleClick={handleToggleClick} />
         <SideBar isOpen={isOpenSideBar} />
         {/* <Content isFull={!isOpenSideBar}>
            <Outlet />
         </Content> */}
      </s.MainLayout>
   );
};

export default MainLayout;
