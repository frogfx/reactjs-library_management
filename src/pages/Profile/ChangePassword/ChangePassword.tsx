import React from "react";
import * as s from "./StyleChangePassword";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import PasswordForm from "../../../components/Form/PasswordForm/PasswordForm";
import FormActionNew from "../../../components/Form/FormActions/FormActionNew/FormActionNew";

const ChangePassword: React.FC = () => {
   return (
      <s.ChangePassword>
         <PageTitle title="Profile" />
         <PasswordForm title="Password">
            <FormActionNew />
         </PasswordForm>
      </s.ChangePassword>
   );
};

export default ChangePassword;
