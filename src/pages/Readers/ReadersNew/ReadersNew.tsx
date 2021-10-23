import React from "react";
import * as s from "./StyleReadersNew";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import FormActionNew from "../../../components/Form/FormActions/FormActionNew/FormActionNew";
import ReadersForm from "../../../components/Form/ReadersForm/ReadersForm";

const ReadersNew: React.FC = () => {
   return (
      <s.ReadersNew>
         <PageTitle title="Readers Manage" />
         <ReadersForm title="Readers New" action="add">
            <FormActionNew />
         </ReadersForm>
      </s.ReadersNew>
   );
};

export default ReadersNew;
