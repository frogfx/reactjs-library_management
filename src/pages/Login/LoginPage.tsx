import React from "react";
import Button from "../../components/Button/Button";
import InputGroup from "../../components/InputGroup/InputGroup";
import * as s from "./StyleLoginPage";

const LoginPage: React.FC = () => {
   return (
      <s.LoginPage>
         <s.Title>Welcome</s.Title>
         <s.Des>Sign in to your account to continue</s.Des>
         <s.Form>
            <s.FormRow>
               <InputGroup label="Email" placeholder="Enter your email" />
            </s.FormRow>
            <s.FormRow>
               <InputGroup label="Password" placeholder="Enter your password" />{" "}
               <s.Forget to="/reset-password">Forgot password?</s.Forget>
            </s.FormRow>
            <s.Remember>
               <input type="checkbox" />
               <p>Remember me next time</p>
            </s.Remember>
            <s.Action>
               <Button typeColor="primary">
                  <s.SignInIcon />
                  Sign in
               </Button>
            </s.Action>
         </s.Form>
      </s.LoginPage>
   );
};

export default LoginPage;
