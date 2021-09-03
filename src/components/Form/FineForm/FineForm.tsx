import React, { ReactChild, ReactChildren } from "react";
import { useForm } from "react-hook-form";
import InfoGroup from "../../InfoGroup/InfoGroup";
import InputGroup from "../../InputGroup/InputGroup";
import SelectGroup from "../../SelectGroup/SelectGroup";
import FormTitle from "../FormTitle/FormTitle";
import * as s from "../StyleForm";

interface PropsFineForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

type FormValues = {
   readers?: string;
   payment?: number;
};

const FineForm: React.FC<PropsFineForm> = ({ title, children }) => {
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
                  <SelectGroup
                     label="Reader"
                     isNull
                     options={[
                        { key: "RD000001", value: "RD000001 - Nguyễn Văn A" },
                        { key: "RD000002", value: "RD000002 - Nguyễn Văn B" },
                     ]}
                     innerRef={register("readers")}
                  />
               </s.FormItem>
               <s.FormItem>
                  <InputGroup
                     label="Payment"
                     placeholder="Money"
                     isNull
                     innerRef={register("payment", {
                        required: "Payment is required.",
                        pattern: {
                           value: /^[1-9][0-9]*/,
                           message: "Invalid payment",
                        },
                     })}
                     error={errors.payment ? errors.payment.message : ""}
                     type="number"
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRowInfo>
               <s.FormItem>
                  <InfoGroup name="Debt" value="50.000 VND" />
               </s.FormItem>
               <s.FormItem>
                  <InfoGroup name="Remaining" value="30.000 VND" />
               </s.FormItem>
            </s.FormRowInfo>
            {children}
         </s.FormContent>
      </s.Form>
   );
};

export default FineForm;
