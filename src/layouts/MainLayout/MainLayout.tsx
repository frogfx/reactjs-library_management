import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { User } from "../../interface";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import * as s from "./StyleMainLayout";
import authApi from "../../api/authApi";
import Loading from "../../components/Loading/Loading";

const MainLayout: React.FC = () => {
   const [isGetMe, setIsGetMe] = useState<boolean>(false);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { logIn, logOut } = bindActionCreators(actionCreators, dispatch);
   authApi.getMe().then((res) => {
      if (res.status === 401) {
         logOut();
         navigate("/login");
      } else {
         logIn(res.data.user as User);
      }
      setIsGetMe(true);
   });

   const [isToggle, setIsToggle] = useState<boolean>(false);
   const handleToggleClick = () => {
      setIsToggle(!isToggle);
   };
   return (
      <div>
         {isGetMe ? (
            <s.MainLayout>
               <Header toggleClick={handleToggleClick} isToggle={isToggle} />
               <SideBar isToggle={isToggle} />
               <Page isToggle={isToggle}>
                  <Outlet />
               </Page>
               <s.Background
                  isShow={isToggle}
                  onClick={() => setIsToggle(false)}
               />
            </s.MainLayout>
         ) : (
            <Loading />
         )}
      </div>
   );
};

export default MainLayout;
