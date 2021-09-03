import React, { ReactChild, ReactChildren } from "react";
import { useForm } from "react-hook-form";
import InputGroup from "../../InputGroup/InputGroup";
import SelectGroup from "../../SelectGroup/SelectGroup";
import FormTitle from "../FormTitle/FormTitle";
import * as s from "../StyleForm";

interface PropsBookForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

type FormValues = {
   name?: string;
   author?: string;
   publisher?: string;
   price?: number;
   publisYear?: string;
   category?: string;
};

const BookForm: React.FC<PropsBookForm> = ({ title, children }) => {
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
                        { key: "1", value: "Công nghệ phần mềm" },
                        { key: "2", value: "Khoa học máy tính" },
                     ]}
                     innerRef={register("category")}
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup
                     label="Author"
                     placeholder="Author"
                     isNull
                     innerRef={register("author", {
                        required: "Author is required.",
                     })}
                     error={errors.author ? errors.author.message : ""}
                  />
               </s.FormItem>
               <s.FormItem>
                  <SelectGroup
                     label="Publis Year"
                     isNull
                     options={[
                        { key: "1", value: "2020" },
                        { key: "2", value: "2021" },
                     ]}
                     innerRef={register("publisYear")}
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup
                     label="Publisher"
                     placeholder="Publisher"
                     isNull
                     innerRef={register("publisher", {
                        required: "Publisher is required.",
                     })}
                     error={errors.publisher ? errors.publisher.message : ""}
                  />
               </s.FormItem>
               <s.FormItem>
                  <InputGroup
                     label="Price"
                     placeholder="Price"
                     isNull
                     innerRef={register("price", {
                        required: "Price is required.",
                        pattern: {
                           value: /^[1-9][0-9]*/,
                           message: "Invalid price",
                        },
                     })}
                     error={errors.price ? errors.price.message : ""}
                     type="number"
                  />
               </s.FormItem>
            </s.FormRow>
            {children}
         </s.FormContent>
      </s.Form>
   );
};

export default BookForm;
