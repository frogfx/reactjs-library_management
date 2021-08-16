import React from "react";
import * as s from "./StyleStaffEdit";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import FormActionNew from "../../../components/Form/FormActions/FormActionNew/FormActionNew";
import StaffForm from "../../../components/Form/StaffForm/StaffForm";

const StaffEdit: React.FC = () => {
   return (
      <s.StaffEdit>
         <PageTitle title="Staff Manage" />
         <StaffForm title="Staff Edit">
            <FormActionNew />
         </StaffForm>
      </s.StaffEdit>
   );
};

export default StaffEdit;
