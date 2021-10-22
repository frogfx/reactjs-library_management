import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { State } from "../../state/reducers";
import { actionCreators } from "../../state";
import { User } from "../../interface";
import * as s from "./StyleMainLayout";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import authApi from "../../api/authApi";
import Loading from "../../components/Loading/Loading";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

const MainLayout: React.FC = () => {
   const [isGetMe, setIsGetMe] = useState<boolean>(false);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { logIn, logOut } = bindActionCreators(actionCreators, dispatch);
   const [isToggle, setIsToggle] = useState<boolean>(false);
   const socket = useSelector((state: State) => state.socket.socket);

   const handleToggleClick = () => {
      setIsToggle(!isToggle);
   };

   useEffect(() => {
      authApi.getMe().then((res) => {
         if (res.status === 401) {
            if (res.data.authen === false) {
               logOut(socket);
               navigate("/login");
            }
         } else {
            logIn(res.data.user as User);
         }
         setIsGetMe(true);
      });
   }, []);

   return (
      <div>
         {isGetMe ? (
            <s.MainLayout>
               <ReactNotification />
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
