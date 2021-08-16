import React from "react";
import * as s from "./StyleStaffNew";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import FormActionNew from "../../../components/Form/FormActions/FormActionNew/FormActionNew";
import StaffForm from "../../../components/Form/StaffForm/StaffForm";

const StaffNew: React.FC = () => {
   return (
      <s.StaffNew>
         <PageTitle title="Staff Manage" />
         <StaffForm title="Staff New">
            <FormActionNew />
         </StaffForm>
      </s.StaffNew>
   );
};

export default StaffNew;
