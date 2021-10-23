import React from "react";
import * as s from "./StyleReturnsEdit";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import ReturnsForm from "../../../components/Form/ReturnsForm/ReturnsForm";
import FormActionEdit from "../../../components/Form/FormActions/FormActionEdit/FormActionEidt";

const ReturnsEdit: React.FC = () => {
   return (
      <s.ReturnsEdit>
         <PageTitle title="Returns Receipt Manage" />
         <ReturnsForm title="Returns Receipt Edit">
            <FormActionEdit callbackDelete={() => {}} />
         </ReturnsForm>
      </s.ReturnsEdit>
   );
};

export default ReturnsEdit;
