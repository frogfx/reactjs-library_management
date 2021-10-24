import React, { ReactChild, ReactChildren, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {
   Readers,
   ReadersModel,
   Option,
   Category,
} from "../../../interface/index";
import { State } from "../../../state/reducers";
import { useSelector } from "react-redux";
import InputGroup from "../../InputGroup/InputGroup";
import SelectGroup from "../../SelectGroup/SelectGroup";
import FormTitle from "../FormTitle/FormTitle";
import readersApi from "../../../api/readersApi";
import readerCategoryApi from "../../../api/readerCategoryApi";
import NotificationContent from "../../Notification/NotificationContent";
import Notification from "../../../assets/Notification";
import moment from "moment";
import * as s from "../StyleForm";

interface PropsReadersForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
   initValue?: Readers;
   action: "add" | "edit";
}

type FormValues = {
   name?: string;
   address?: string;
   email?: string;
   birthDay?: string;
   category?: string;
   phone?: string;
};

const ReadersForm: React.FC<PropsReadersForm> = ({
   title,
   children,
   action,
   initValue,
}) => {
   const navigate = useNavigate();
   const [categories, setCategories] = useState<Option[]>([] as Option[]);
   const user = useSelector((state: State) => state.auth.user);
   const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
   } = useForm<FormValues>({
      reValidateMode: "onSubmit",
   });

   useEffect(() => {
      setValue("name", initValue?.name);
      setValue("address", initValue?.address);
      setValue("email", initValue?.email);
      setValue("phone", initValue?.phone);
      setValue("birthDay", moment(initValue?.birthDay).format("YYYY-MM-DD"));
      const fetchData = async () => {
         const res = await readerCategoryApi.getAll();
         const categoriesOption: Option[] = res.data.data.map(
            (category: Category) => {
               return {
                  key: category.id,
                  value: category.name,
               } as Option;
            }
         );
         if (action === "add") setValue("category", categoriesOption[0].key);
         else setValue("category", initValue?.category.key);
         setCategories(categoriesOption);
      };
      fetchData();
   }, [action, initValue, setValue]);

   const onSubmit = (data: FormValues) => {
      const reader = {
         id: initValue?.id,
         name: data.name,
         category: data.category,
         birthDay: data.birthDay,
         address: data.address,
         email: data.email,
         phone: data.phone,
      } as ReadersModel;
      if (action === "add") {
         reader.createBy = `${user?.id} - ${user?.name}`;
         readersApi.add(reader).then((res) => {
            if (res.data.add === true) {
               navigate("/readers");
               Notification(
                  "success",
                  <NotificationContent
                     type="success"
                     message="Add Reader success—check it out!"
                  />
               );
            } else {
               Notification(
                  "danger",
                  <NotificationContent
                     type="danger"
                     message="Add Reader failed—check it out!"
                  />
               );
            }
         });
      } else if (action === "edit") {
         readersApi.update(reader).then((res) => {
            if (res.data.update === true) {
               navigate(`/readers/${initValue?.id}`);
               Notification(
                  "success",
                  <NotificationContent
                     type="success"
                     message="Update Reader success—check it out!"
                  />
               );
            } else {
               Notification(
                  "danger",
                  <NotificationContent
                     type="danger"
                     message="Update Reader failed—check it out!"
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
                     options={categories}
                     innerRef={register("category")}
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup
                     label="Date of brith"
                     isNull
                     innerRef={register("birthDay", {
                        required: "Birth Day is required.",
                     })}
                     error={errors.birthDay ? errors.birthDay.message : ""}
                     type="date"
                  />
               </s.FormItem>
               <s.FormItem>
                  <InputGroup
                     label="Address"
                     placeholder="Address"
                     isNull
                     innerRef={register("address", {
                        required: "Address is required.",
                     })}
                     error={errors.address ? errors.address.message : ""}
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup
                     label="Email"
                     placeholder="Email"
                     isNull
                     innerRef={register("email", {
                        required: "Email is required.",
                        pattern: {
                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                           message: "Invalid email address",
                        },
                     })}
                     error={errors.email ? errors.email.message : ""}
                     type="email"
                  />
               </s.FormItem>
               <s.FormItem>
                  <InputGroup
                     label="Phone"
                     placeholder="Phone number"
                     isNull
                     innerRef={register("phone", {
                        required: "Phone is required.",
                        pattern: {
                           value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                           message: "Invalid phone number",
                        },
                     })}
                     error={errors.phone ? errors.phone.message : ""}
                     type="number"
                  />
               </s.FormItem>
            </s.FormRow>
            {children}
         </s.FormContent>
      </s.Form>
   );
};

export default ReadersForm;
