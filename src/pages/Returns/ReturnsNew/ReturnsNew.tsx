import React from "react";
import * as s from "./StyleReturnsNew";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import ReturnsForm from "../../../components/Form/ReturnsForm/ReturnsForm";
import FormActionNew from "../../../components/Form/FormActions/FormActionNew/FormActionNew";

const ReturnsNew: React.FC = () => {
   return (
      <s.ReturnsNew>
         <PageTitle title="Returns Receipt Manage" />
         <ReturnsForm title="Returns Receipt New">
            <FormActionNew />
         </ReturnsForm>
      </s.ReturnsNew>
   );
};

export default ReturnsNew;
