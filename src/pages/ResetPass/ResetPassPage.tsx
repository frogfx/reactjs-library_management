import React from "react";
import Button from "../../components/Button/Button";
import InputGroup from "../../components/InputGroup/InputGroup";
import * as s from "./StyleResetPassPage";

const ResetPassPage: React.FC = () => {
   return (
      <s.ResetPassPage>
         <s.Title>Reset password</s.Title>
         <s.Des>Enter your email to reset your password.</s.Des>
         <s.Form>
            <s.FormRow>
               <InputGroup label="Email" placeholder="Enter your email" />
            </s.FormRow>
            <s.Action>
               <Button typeColor="primary">
                  <s.PlaneIcon />
                  Reset password
               </Button>
            </s.Action>
         </s.Form>
      </s.ResetPassPage>
   );
};

export default ResetPassPage;
