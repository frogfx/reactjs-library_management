import React from "react";
import { Outlet } from "react-router-dom";
import * as s from "./StyleEmtpylayout";

const EmtpyLayout: React.FC = () => {
   return (
      <s.EmtpyLayout>
         <Outlet />
      </s.EmtpyLayout>
   );
};

export default EmtpyLayout;
