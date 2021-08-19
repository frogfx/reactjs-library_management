import React from "react";
import * as s from "./StyleReturnsDetail";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import ReturnsInfo from "../../../components/Info/ReturnsInfo/ReturnsInfo";

const ReturnsDetail: React.FC = () => {
   return (
      <s.ReturnsDetail>
         <PageTitle title="Returns Receipt Manage" />
         <ReturnsInfo />
      </s.ReturnsDetail>
   );
};

export default ReturnsDetail;
