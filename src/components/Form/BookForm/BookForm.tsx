import React, { ReactChild, ReactChildren } from "react";
import InputGroup from "../../InputGroup/InputGroup";
import SelectGroup from "../../SelectGroup/SelectGroup";
import FormTitle from "../FormTitle/FormTitle";
import * as s from "../StyleForm";

interface PropsBookForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const BookForm: React.FC<PropsBookForm> = ({ title, children }) => {
   return (
      <s.Form>
         <FormTitle title={title} />
         <s.FormContent>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup label="Name" placeholder="Name" isNull />
               </s.FormItem>
               <s.FormItem>
                  <SelectGroup
                     label="Category"
                     isNull
                     options={[
                        { key: "1", value: "Công nghệ phần mềm" },
                        { key: "2", value: "Khoa học máy tính" },
                     ]}
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup label="Author" placeholder="Author" isNull />
               </s.FormItem>
               <s.FormItem>
                  <SelectGroup
                     label="Publis Year"
                     isNull
                     options={[
                        { key: "2020", value: "2020" },
                        { key: "2021", value: "2021" },
                     ]}
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup
                     label="Publisher"
                     placeholder="Publisher"
                     isNull
                  />
               </s.FormItem>
               <s.FormItem>
                  <InputGroup
                     label="Add Date"
                     placeholder="Add Date"
                     isNull
                     type="date"
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup
                     label="Price"
                     placeholder="Price"
                     isNull
                     type="number"
                  />
               </s.FormItem>
               <s.FormItem>
                  <SelectGroup
                     label="Reciever"
                     isNull
                     options={[
                        { key: "1", value: "Nguyễn Văn A" },
                        { key: "2", value: "Nguyễn Văn B" },
                     ]}
                  />
               </s.FormItem>
            </s.FormRow>
            {children}
         </s.FormContent>
      </s.Form>
   );
};

export default BookForm;
