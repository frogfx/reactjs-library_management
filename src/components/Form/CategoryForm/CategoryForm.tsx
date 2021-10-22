import React, { ReactChild, ReactChildren, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import categoryApi from "../../../api/categoryApi";
import InputGroup from "../../InputGroup/InputGroup";
import FormTitle from "../FormTitle/FormTitle";
import * as s from "../StyleForm";
import { Category } from "../../../interface/index";
import Notification from "../../../assets/Notification";
import NotificationContent from "../../Notification/NotificationContent";

interface PropsCategoryForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
   initValue?: Category;
   action: "add" | "edit";
}

type FormValues = {
   name?: string;
};

const CategoryForm: React.FC<PropsCategoryForm> = ({
   title,
   children,
   initValue,
   action,
}) => {
   const navigate = useNavigate();
   const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
   } = useForm<FormValues>({
      reValidateMode: "onSubmit",
   });

   useEffect(() => {
      setValue("name", initValue?.name);
   }, []);

   const onSubmit = (data: FormValues) => {
      const category = { id: initValue?.id, name: data.name } as Category;
      if (action === "add") {
         categoryApi.add(category).then((res) => {
            if (res.data.add === true) {
               navigate("/book-manage/category");
               Notification(
                  "success",
                  <NotificationContent
                     type="success"
                     message="Add Category success—check it out!"
                  />
               );
            } else {
               Notification(
                  "danger",
                  <NotificationContent
                     type="danger"
                     message="Add Category failed—check it out!"
                  />
               );
            }
         });
      } else if (action === "edit") {
         categoryApi.update(category).then((res) => {
            if (res.data.update === true) {
               navigate("/book-manage/category");
               navigate("/book-manage/category");
               Notification(
                  "success",
                  <NotificationContent
                     type="success"
                     message="Update Category success—check it out!"
                  />
               );
            } else {
               Notification(
                  "danger",
                  <NotificationContent
                     type="danger"
                     message="Update Category failed—check it out!"
                  />
               );
            }
         });
      }
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
