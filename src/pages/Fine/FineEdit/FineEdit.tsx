import React from "react";
import * as s from "./StyleFineEdit";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import FineForm from "../../../components/Form/FineForm/FineForm";
import FormActionNew from "../../../components/Form/FormActions/FormActionNew/FormActionNew";

const FineEdit: React.FC = () => {
   return (
      <s.FineEdit>
         <PageTitle title="Fine Receipt Manage" />
         <FineForm title="Fine Edit" action="edit">
            <FormActionNew />
         </FineForm>
      </s.FineEdit>
   );
};

export default FineEdit;
