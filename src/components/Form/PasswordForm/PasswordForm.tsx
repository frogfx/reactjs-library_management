import React, { ReactChild, ReactChildren } from "react";
import InputGroup from "../../InputGroup/InputGroup";
import FormTitle from "../FormTitle/FormTitle";
import * as s from "../StyleForm";

interface PropsPasswordForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const PasswordForm: React.FC<PropsPasswordForm> = ({ title, children }) => {
   return (
      <s.Form>
         <FormTitle title={title} />
         <s.FormContent>
            <s.FormRow>
               <s.FormItem isFull>
                  <InputGroup
                     label="Current password"
                     placeholder="Current password"
                     isNull
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem isFull>
                  <InputGroup
                     label="New password"
                     placeholder="New password"
                     isNull
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem isFull>
                  <InputGroup
                     label="Verify password"
                     placeholder="Verify password"
                     isNull
                  />
               </s.FormItem>
            </s.FormRow>
            {children}
         </s.FormContent>
      </s.Form>
   );
};

export default PasswordForm;
