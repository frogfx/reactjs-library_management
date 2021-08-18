import React, { ReactChild, ReactChildren } from "react";
import InfoGroup from "../../InfoGroup/InfoGroup";
import InputGroup from "../../InputGroup/InputGroup";
import SelectGroup from "../../SelectGroup/SelectGroup";
import FormTitle from "../FormTitle/FormTitle";
import * as s from "../StyleForm";

interface PropsFineForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const FineForm: React.FC<PropsFineForm> = ({ title, children }) => {
   return (
      <s.Form>
         <FormTitle title={title} />
         <s.FormContent>
            <s.FormRow>
               <s.FormItem>
                  <SelectGroup
                     label="Reader"
                     isNull
                     options={[
                        { key: "1", value: "RD000001 - Nguyễn Văn A" },
                        { key: "2", value: "RD000002 - Nguyễn Văn B" },
                     ]}
                  />
               </s.FormItem>
               <s.FormItem>
                  <InputGroup label="Payment" placeholder="Money" isNull />
               </s.FormItem>
            </s.FormRow>
            <s.FormRowInfo>
               <s.FormItem>
                  <InfoGroup name="Debt" value="50.000 VND" />
               </s.FormItem>
               <s.FormItem>
                  <InfoGroup name="Remaining" value="30.000 VND" />
               </s.FormItem>
               <s.FormItem>
                  <InfoGroup name="Create Staff" value="Nguyễn Văn A" />
               </s.FormItem>
            </s.FormRowInfo>
            {children}
         </s.FormContent>
      </s.Form>
   );
};

export default FineForm;
