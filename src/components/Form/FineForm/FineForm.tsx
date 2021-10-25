import React, { ReactChild, ReactChildren, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FineReceiptModel, Option, Readers } from "../../../interface/index";
import { State } from "../../../state/reducers";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InfoGroup from "../../InfoGroup/InfoGroup";
import InputGroup from "../../InputGroup/InputGroup";
import SelectGroup from "../../SelectGroup/SelectGroup";
import FormTitle from "../FormTitle/FormTitle";
import fineApi from "../../../api/fineApi";
import readerApi from "../../../api/readersApi";
import NotificationContent from "../../Notification/NotificationContent";
import Notification from "../../../assets/Notification";
import fineReceiptApi from "../../../api/fineReceiptApi";
import * as s from "../StyleForm";

interface PropsFineForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
   initValue?: Readers;
   action: "add" | "edit";
}

type FormValues = {
   reader?: string;
   payment?: string;
};

const FineForm: React.FC<PropsFineForm> = ({
   title,
   children,
   action,
   initValue,
}) => {
   const navigate = useNavigate();
   const [debt, setDebt] = useState<Number>(0);
   const [readerOptions, setReaderOptions] = useState<Option[]>([] as Option[]);
   const user = useSelector((state: State) => state.auth.user);

   const {
      register,
      handleSubmit,
      setValue,
      setError,
      formState: { errors },
   } = useForm<FormValues>({
      reValidateMode: "onSubmit",
   });

   useEffect(() => {
      const fetchData = async () => {
         const res = await readerApi.getAll();
         const readers: Option[] = res.data.data.map((reader: Readers) => {
            return {
               key: reader.id,
               value: `${reader.id} - ${reader.name}`,
            } as Option;
         });
         readers.unshift({ key: "0", value: "Select reader" });
         setValue("reader", "0");
         setReaderOptions(readers);
      };
      fetchData();
   }, []);

   const handleReaderChange = (e: React.FormEvent<HTMLSelectElement>) => {
      const readerId = e.currentTarget.value;
      const loadDebt = async () => {
         const fine = await fineApi.getByReader(readerId);
         setDebt(fine.data.data.debt);
      };
      loadDebt();
   };

   const onSubmit = (data: FormValues) => {
      if (data.reader === "0") {
         return setError("reader", {
            message: "Reader is required!",
         });
      }
      if (data.payment && parseInt(data.payment) >= debt) {
         return setError("payment", {
            message: "Payment invalid!",
         });
      }
      const fineReceipt = {
         debt: debt,
         reader: data.reader,
         payment: parseInt(data.payment || "0"),
      } as FineReceiptModel;
      if (action === "add") {
         fineReceipt.createBy = `${user?.id} - ${user?.name}`;
         fineReceiptApi.add(fineReceipt).then((res) => {
            if (res.data.add === true) {
               navigate("/receipt-manage/fine/");
               Notification(
                  "success",
                  <NotificationContent
                     type="success"
                     message="Add Fine Receipt success—check it out!"
                  />
               );
            } else {
               Notification(
                  "danger",
                  <NotificationContent
                     type="danger"
                     message="Add Fine Receipt failed—check it out!"
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
            <s.FormRowInfo>
               <s.FormItem>
                  <InfoGroup name="Debt" value={debt.toString()} />
               </s.FormItem>
            </s.FormRowInfo>
            <s.FormRow>
               <s.FormItem>
                  <SelectGroup
                     label="Reader"
                     isNull
                     options={readerOptions}
                     callBackChange={handleReaderChange}
                     innerRef={register("reader")}
                     error={errors.reader ? errors.reader.message : ""}
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
                           message: "Payment invalid",
                        },
                     })}
                     error={errors.payment ? errors.payment.message : ""}
                     type="number"
                  />
               </s.FormItem>
            </s.FormRow>
            {children}
         </s.FormContent>
      </s.Form>
   );
};

export default FineForm;
