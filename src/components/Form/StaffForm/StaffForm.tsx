import React, { ReactChild, ReactChildren } from "react";
import InputGroup from "../../InputGroup/InputGroup";
import SelectGroup from "../../SelectGroup/SelectGroup";
import FormTitle from "../FormTitle/FormTitle";
import * as s from "../StyleForm";

interface PropsStaffForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const StaffForm: React.FC<PropsStaffForm> = ({ title, children }) => {
   return (
      <s.Form>
         <FormTitle title={title} />
         <s.FormContent>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup label="Name" placeholder="Name" isNull />
               </s.FormItem>
               <s.FormItem>
                  <InputGroup label="Address" placeholder="Address" isNull />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup
                     label="Date of bỉrth"
                     placeholder="Add Date"
                     isNull
                     type="date"
                  />
               </s.FormItem>
               <s.FormItem>
                  <InputGroup
                     label="Phone"
                     placeholder="Phone"
                     isNull
                     type="number"
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <SelectGroup
                     label="Degree"
                     isNull
                     options={[
                        { key: "1", value: "College" },
                        { key: "2", value: "Degree Of Associate" },
                     ]}
                  />
               </s.FormItem>
               <s.FormItem>
                  <SelectGroup
                     label="Part"
                     isNull
                     options={[
                        { key: "1", value: "Librarian" },
                        { key: "2", value: "Storekeepers" },
                     ]}
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <SelectGroup
                     label="Position"
                     isNull
                     options={[
                        { key: "1", value: "Employee" },
                        { key: "2", value: "Manage" },
                     ]}
                  />
               </s.FormItem>
            </s.FormRow>
            {children}
         </s.FormContent>
      </s.Form>
   );
};

export default StaffForm;
