import React from "react";
import * as s from "./StyleStaffDetail";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import StaffInfo from "../../../components/Info/StaffInfo/StaffInfo";

const StaffDetail: React.FC = () => {
   return (
      <s.StaffDetail>
         <PageTitle title="Staff Manage" />
         <StaffInfo />
      </s.StaffDetail>
   );
};

export default StaffDetail;
