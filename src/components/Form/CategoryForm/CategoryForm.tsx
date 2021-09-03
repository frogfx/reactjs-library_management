import React, { ReactChild, ReactChildren } from "react";
import { useForm } from "react-hook-form";
import InputGroup from "../../InputGroup/InputGroup";
import FormTitle from "../FormTitle/FormTitle";
import * as s from "../StyleForm";

interface PropsCategoryForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

type FormValues = {
   name?: string;
};

const CategoryForm: React.FC<PropsCategoryForm> = ({ title, children }) => {
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
               <s.FormItem isFull>
                  <InputGroup
                     label="Name"
                     placeholder="Category name"
                     isNull
                     innerRef={register("name", {
                        required: "Name is required.",
                     })}
                     error={errors.name ? errors.name.message : ""}
                  />
               </s.FormItem>
            </s.FormRow>
            {children}
         </s.FormContent>
      </s.Form>
   );
};

export default CategoryForm;
