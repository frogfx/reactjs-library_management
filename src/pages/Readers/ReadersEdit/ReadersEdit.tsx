import React from "react";
import * as s from "./StyleReadersEdit";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import ReadersForm from "../../../components/Form/ReadersForm/ReadersForm";
import FormActionEdit from "../../../components/Form/FormActions/FormActionEdit/FormActionEidt";

const ReadersEdit: React.FC = () => {
   return (
      <s.ReadersEdit>
         <PageTitle title="Readers Manage" />
         <ReadersForm title="Readers Edit">
            <FormActionEdit callbackDelete={() => {}} />
         </ReadersForm>
      </s.ReadersEdit>
   );
};

export default ReadersEdit;
