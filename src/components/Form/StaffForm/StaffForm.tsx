import React, { ReactChild, ReactChildren } from "react";
import { useForm } from "react-hook-form";
import InputGroup from "../../InputGroup/InputGroup";
import SelectGroup from "../../SelectGroup/SelectGroup";
import FormTitle from "../FormTitle/FormTitle";
import * as s from "../StyleForm";

interface PropsStaffForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

type FormValues = {
   name?: string;
   email?: string;
   address?: string;
   phone?: number;
   birthDay?: string;
   degree?: string;
   part?: string;
   position?: string;
};

const StaffForm: React.FC<PropsStaffForm> = ({ title, children }) => {
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
            <s.FormRow>
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
               <s.FormItem>
                  <InputGroup
                     label="Date of bỉrth"
                     placeholder="Add Date"
                     isNull
                     innerRef={register("birthDay", {
                        required: "Birth Day is required.",
                     })}
                     error={errors.birthDay ? errors.birthDay.message : ""}
                     type="date"
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup
                     label="Phone"
                     placeholder="Phone"
                     isNull
                     innerRef={register("phone", {
                        required: "Phone is required.",
                        pattern: {
                           value: /^[0][0-9]{9}$/,
                           message: "Invalid phone",
                        },
                     })}
                     error={errors.phone ? errors.phone.message : ""}
                     type="number"
                  />
               </s.FormItem>
               <s.FormItem>
                  <SelectGroup
                     label="Degree"
                     isNull
                     options={[
                        { key: "1", value: "College" },
                        { key: "2", value: "Degree Of Associate" },
                     ]}
                     innerRef={register("degree")}
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <SelectGroup
                     label="Part"
                     isNull
                     options={[
                        { key: "1", value: "Librarian" },
                        { key: "2", value: "Storekeepers" },
                     ]}
                     innerRef={register("part")}
                  />
               </s.FormItem>
               <s.FormItem>
                  <SelectGroup
                     label="Position"
                     isNull
                     options={[
                        { key: "1", value: "Employee" },
                        { key: "2", value: "Manage" },
                     ]}
                     innerRef={register("position")}
                  />
               </s.FormItem>
            </s.FormRow>
            {children}
         </s.FormContent>
      </s.Form>
   );
};

export default StaffForm;
