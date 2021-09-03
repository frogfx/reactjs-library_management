import React, { ReactChild, ReactChildren } from "react";
import { useForm } from "react-hook-form";
import InputGroup from "../../InputGroup/InputGroup";
import SelectGroup from "../../SelectGroup/SelectGroup";
import FormTitle from "../FormTitle/FormTitle";
import * as s from "../StyleForm";

interface PropsReadersForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

type FormValues = {
   name?: string;
   address?: string;
   email?: string;
   birthDay?: string;
   category?: string;
};

const ReadersForm: React.FC<PropsReadersForm> = ({ title, children }) => {
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
      <s.Form>
         <FormTitle title={title} />
         <s.FormContent onSubmit={handleSubmit(onSubmit)}>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup
                     label="Name"
                     placeholder="Name"
                     isNull
                     innerRef={register("name", {
                        required: "Name is required.",
                     })}
                     error={errors.name ? errors.name.message : ""}
                  />
               </s.FormItem>
               <s.FormItem>
                  <SelectGroup
                     label="Category"
                     isNull
                     options={[
                        { key: "1", value: "A" },
                        { key: "2", value: "B" },
                     ]}
                     innerRef={register("category")}
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup
                     label="Date of brith"
                     isNull
                     innerRef={register("birthDay", {
                        required: "Birth Day is required.",
                     })}
                     error={errors.birthDay ? errors.birthDay.message : ""}
                     type="date"
                  />
               </s.FormItem>
               <s.FormItem>
                  <InputGroup
                     label="Address"
                     placeholder="Address"
                     isNull
                     innerRef={register("address", {
                        required: "Address is required.",
                     })}
                     error={errors.address ? errors.address.message : ""}
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup
                     label="Email"
                     placeholder="Email"
                     isNull
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
               </s.FormItem>
            </s.FormRow>
            {children}
         </s.FormContent>
      </s.Form>
   );
};

export default ReadersForm;
