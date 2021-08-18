import React from "react";
import * as s from "./StyleBorrowDetail";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import CategoryInfo from "../../../components/Info/CategoryInfo/CategoryInfo";

const BorrowDetail: React.FC = () => {
   return (
      <s.BorrowDetail>
         <PageTitle title="Borrow Manage" />
         <CategoryInfo />
      </s.BorrowDetail>
   );
};

export default BorrowDetail;
