import React from "react";
import * as s from "./StyleBorrowNew";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import BorrowForm from "../../../components/Form/BorrowForm/BorrowForm";
import FormActionNew from "../../../components/Form/FormActions/FormActionNew/FormActionNew";

const BorrowNew: React.FC = () => {
   return (
      <s.BorrowNew>
         <PageTitle title="Borrow Manage" />
         <BorrowForm title="Borrow New">
            <FormActionNew />
         </BorrowForm>
      </s.BorrowNew>
   );
};

export default BorrowNew;
