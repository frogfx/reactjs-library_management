import React, { ReactChild, ReactChildren } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import categoryApi from "../../../api/categoryApi";
import InputGroup from "../../InputGroup/InputGroup";
import FormTitle from "../FormTitle/FormTitle";
import * as s from "../StyleForm";
import { Category } from "../../../interface/index";

interface PropsCategoryForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

type FormValues = {
   name?: string;
};

const CategoryForm: React.FC<PropsCategoryForm> = ({ title, children }) => {
   const navigate = useNavigate();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormValues>({
      reValidateMode: "onSubmit",
   });

   const onSubmit = (data: FormValues) => {
      const category = { name: data.name } as Category;
      categoryApi.add(category).then((res) => {
         if (res.data.add === true) {
            navigate("/book-manage/category");
         }
      });
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
