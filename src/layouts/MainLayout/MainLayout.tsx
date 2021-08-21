import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import * as s from "./StyleMainLayout";

const MainLayout: React.FC = () => {
   const [isToggle, setIsToggle] = useState<boolean>(false);
   const handleToggleClick = () => {
      setIsToggle(!isToggle);
   };
   return (
      <s.MainLayout>
         <Header toggleClick={handleToggleClick} isToggle={isToggle} />
         <SideBar isToggle={isToggle} />
         <Page isToggle={isToggle}>
            <Outlet />
         </Page>
         <s.Background isShow={isToggle} onClick={() => setIsToggle(false)} />
      </s.MainLayout>
   );
};

export default MainLayout;
