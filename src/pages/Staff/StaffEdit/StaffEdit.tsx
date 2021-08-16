import React from "react";
import * as s from "./StyleStaffEdit";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import StaffForm from "../../../components/Form/StaffForm/StaffForm";
import FormActionEdit from "../../../components/Form/FormActions/FormActionEdit/FormActionEidt";

const StaffEdit: React.FC = () => {
   return (
      <s.StaffEdit>
         <PageTitle title="Staff Manage" />
         <StaffForm title="Staff Edit">
            <FormActionEdit />
         </StaffForm>
      </s.StaffEdit>
   );
};

export default StaffEdit;
