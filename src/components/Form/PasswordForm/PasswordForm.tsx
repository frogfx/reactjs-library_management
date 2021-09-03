import React, { ReactChild, ReactChildren, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputGroup from "../../InputGroup/InputGroup";
import FormTitle from "../FormTitle/FormTitle";
import * as s from "../StyleForm";
import authApi from "../../../api/authApi";

interface PropsPasswordForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

type FormValues = {
   currentPassword: string;
   newPassword: string;
   verifyPassword: string;
};

const PasswordForm: React.FC<PropsPasswordForm> = ({ title, children }) => {
   const navigate = useNavigate();
   const [isError, setIsError] = useState<boolean>(false);
   const {
      getValues,
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormValues>({
      reValidateMode: "onSubmit",
   });

   const onSubmit = (data: FormValues) => {
      authApi
         .changePassword({
            currentPassword: data.currentPassword,
            newPassword: data.newPassword,
         })
         .then((res) => {
            if (res.data.updated === false) {
               setIsError(true);
            } else {
               navigate("/profile");
            }
         });
   };
   return (
      <div>
         {isError && <s.Error>Current password is not correct!</s.Error>}
         <s.Form>
            <FormTitle title={title} />
            <s.FormContent onSubmit={handleSubmit(onSubmit)}>
               <s.FormRow>
                  <s.FormItem isFull>
                     <InputGroup
                        label="Current password"
                        placeholder="Current password"
                        isNull
                        innerRef={register("currentPassword", {
                           required: "Current Password is required.",
                           minLength: {
                              value: 6,
                              message: "Password must be at least 6 characters",
                           },
                        })}
                        error={
                           errors.currentPassword
                              ? errors.currentPassword.message
                              : ""
                        }
                        type="password"
                     />
                  </s.FormItem>
               </s.FormRow>
               <s.FormRow>
                  <s.FormItem isFull>
                     <InputGroup
                        label="New password"
                        placeholder="New password"
                        isNull
                        innerRef={register("newPassword", {
                           required: "New Password is required.",
                           minLength: {
                              value: 6,
                              message: "Password must be at least 6 characters",
                           },
                        })}
                        error={
                           errors.newPassword ? errors.newPassword.message : ""
                        }
                        type="password"
                     />
                  </s.FormItem>
               </s.FormRow>
               <s.FormRow>
                  <s.FormItem isFull>
                     <InputGroup
                        label="Verify password"
                        placeholder="Verify password"
                        isNull
                        innerRef={register("verifyPassword", {
                           required: "Verify Password is required.",
                           minLength: {
                              value: 6,
                              message: "Password must be at least 6 characters",
                           },
                           validate: (value) =>
                              value === getValues("newPassword") ||
                              "The verify password do not match password",
                        })}
                        error={
                           errors.verifyPassword
                              ? errors.verifyPassword.message
                              : ""
                        }
                        type="password"
                     />
                  </s.FormItem>
               </s.FormRow>
               {children}
            </s.FormContent>
         </s.Form>
      </div>
   );
};

export default PasswordForm;
