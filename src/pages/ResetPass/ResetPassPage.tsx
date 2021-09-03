import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import InputGroup from "../../components/InputGroup/InputGroup";
import * as s from "./StyleResetPassPage";

type FormValues = {
   email?: string;
};

const ResetPassPage: React.FC = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormValues>({
      reValidateMode: "onSubmit",
   });

   const onSubmit = (data: FormValues) => {
      console.log(data);
   };
   return (
      <s.ResetPassPage>
         <s.Title>Reset password</s.Title>
         <s.Des>Enter your email to reset your password.</s.Des>
         <s.Form onSubmit={handleSubmit(onSubmit)}>
            <s.FormRow>
               <InputGroup
                  label="Email"
                  placeholder="Enter your email"
                  innerRef={register("email", {
                     required: "Email is required.",
                     pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                     },
                  })}
                  error={errors.email ? errors.email.message : ""}
                  type="email"
               />
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
