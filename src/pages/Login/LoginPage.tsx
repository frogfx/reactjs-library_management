import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Auth, User } from "../../interface/index";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import Button from "../../components/Button/Button";
import InputGroup from "../../components/InputGroup/InputGroup";
import * as s from "./StyleLoginPage";
import authApi from "../../api/authApi";

type FormValues = {
   id?: string;
   password?: string;
};

const LoginPage: React.FC = () => {
   const navigate = useNavigate();
   const [isLoginFail, setIsLoginFail] = useState<boolean>(false);
   const dispatch = useDispatch();
   const { logIn } = bindActionCreators(actionCreators, dispatch);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormValues>({
      reValidateMode: "onSubmit",
   });

   const onSubmit = (data: FormValues) => {
      const params = {
         id: data.id,
         password: data.password,
      } as Auth;
      authApi
         .logIn(params)
         .then((data) => {
            if (data.data.authenticated) {
               localStorage.setItem("accessToken", data.data.accessToken);
               localStorage.setItem("refreshToken", data.data.refreshToken);
               navigate("/");
            } else {
               setIsLoginFail(true);
            }
         })
         .catch(() => setIsLoginFail(true));
   };
   return (
      <s.LoginPage>
         <s.Title>Welcome</s.Title>
         <s.Des>Sign in to your account to continue</s.Des>
         {isLoginFail && (
            <s.Error>You have entered an invalid username or password</s.Error>
         )}
         <s.Form onSubmit={handleSubmit(onSubmit)}>
            <s.FormRow>
               <InputGroup
                  label="ID"
                  placeholder="Enter your ID"
                  innerRef={register("id", {
                     required: "ID is required.",
                  })}
                  error={errors.id ? errors.id.message : ""}
               />
            </s.FormRow>
            <s.FormRow>
               <InputGroup
                  label="Password"
                  placeholder="Enter your password"
                  innerRef={register("password", {
                     required: "Password is required.",
                     minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                     },
                  })}
                  error={errors.password ? errors.password.message : ""}
                  type="password"
               />
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
