import React, { ReactChild, ReactChildren } from "react";
import InputGroup from "../../InputGroup/InputGroup";
import FormTitle from "../FormTitle/FormTitle";
import * as s from "../StyleForm";

interface PropsCategoryForm {
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const CategoryForm: React.FC<PropsCategoryForm> = ({ children }) => {
   return (
      <s.Form>
         <FormTitle title="Category New" />
         <s.FormContent>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup label="Name" placeholder="Category name" isNull />
               </s.FormItem>
            </s.FormRow>
            {children}
         </s.FormContent>
      </s.Form>
   );
};

export default CategoryForm;
