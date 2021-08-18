import React from "react";
import * as s from "./StyleFineEdit";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import FineForm from "../../../components/Form/FineForm/FineForm";
import FormActionNew from "../../../components/Form/FormActions/FormActionNew/FormActionNew";

const FineEdit: React.FC = () => {
   return (
      <s.FineEdit>
         <PageTitle title="Fine Manage" />
         <FineForm title="Fine Edit">
            <FormActionNew />
         </FineForm>
      </s.FineEdit>
   );
};

export default FineEdit;
