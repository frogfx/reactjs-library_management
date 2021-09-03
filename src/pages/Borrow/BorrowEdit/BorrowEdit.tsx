import React from "react";
import * as s from "./StyleBorrowEdit";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import BorrowForm from "../../../components/Form/BorrowForm/BorrowForm";
import FormActionNew from "../../../components/Form/FormActions/FormActionNew/FormActionNew";

const BorrowEdit: React.FC = () => {
   return (
      <s.BorrowEdit>
         <PageTitle title="Borrow Receipt Manage" />
         <BorrowForm title="Borrow Receipt Edit">
            <FormActionNew />
         </BorrowForm>
      </s.BorrowEdit>
   );
};

export default BorrowEdit;
