import React, { useState } from "react";
import * as s from "./StyleBorrowNew";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import BorrowForm from "../../../components/Form/BorrowForm/BorrowForm";
import FormActionNew from "../../../components/Form/FormActions/FormActionNew/FormActionNew";

const BorrowNew: React.FC = () => {
   return (
      <s.BorrowNew>
         <PageTitle title="Borrow Receipt Manage" />
         <BorrowForm title="Borrow Receipt New" action="add">
            <FormActionNew />
         </BorrowForm>
      </s.BorrowNew>
   );
};

export default BorrowNew;
