import React from "react";
import * as s from "./StyleBorrowDetail";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import BorrowInfo from "../../../components/Info/BorrowInfo/BorrowInfo";

const BorrowDetail: React.FC = () => {
   return (
      <s.BorrowDetail>
         <PageTitle title="Borrow Receipt Manage" />
         <BorrowInfo />
      </s.BorrowDetail>
   );
};

export default BorrowDetail;
