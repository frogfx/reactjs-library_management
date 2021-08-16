import React, { ReactChild, ReactChildren } from "react";
import InputGroup from "../../InputGroup/InputGroup";
import SelectGroup from "../../SelectGroup/SelectGroup";
import FormTitle from "../FormTitle/FormTitle";
import * as s from "../StyleForm";

interface PropsReadersForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const ReadersForm: React.FC<PropsReadersForm> = ({ title, children }) => {
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
                        { key: "1", value: "A" },
                        { key: "2", value: "B" },
                     ]}
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup label="Date of brith" isNull type="date" />
               </s.FormItem>
               <s.FormItem>
                  <InputGroup label="Address" placeholder="Address" isNull />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup label="Email" placeholder="Email" isNull />
               </s.FormItem>
            </s.FormRow>
            {children}
         </s.FormContent>
      </s.Form>
   );
};

export default ReadersForm;
