import React, { ReactChild, ReactChildren, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Option, Category, StaffModel, Staff } from "../../../interface/index";
import { useNavigate } from "react-router";
import { State } from "../../../state/reducers";
import { useSelector } from "react-redux";
import InputGroup from "../../InputGroup/InputGroup";
import SelectGroup from "../../SelectGroup/SelectGroup";
import FormTitle from "../FormTitle/FormTitle";
import degreeApi from "../../../api/degree";
import positionApi from "../../../api/positionApi";
import partApi from "../../../api/part";
import staffApi from "../../../api/staffApi";
import NotificationContent from "../../Notification/NotificationContent";
import Notification from "../../../assets/Notification";
import moment from "moment";
import * as s from "../StyleForm";

interface PropsStaffForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
   initValue?: Staff;
   action: "add" | "edit";
}

type FormValues = {
   name?: string;
   email?: string;
   address?: string;
   phone?: string;
   birthDay?: string;
   degree?: string;
   part?: string;
   position?: string;
};

const StaffForm: React.FC<PropsStaffForm> = ({
   title,
   children,
   action,
   initValue,
}) => {
   const navigate = useNavigate();
   const [degreeOptions, setDegreeOption] = useState<Option[]>([]);
   const [positionOptions, setPositionOption] = useState<Option[]>([]);
   const [partOptions, setPartOption] = useState<Option[]>([]);
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
      setValue("email", initValue?.email);
      setValue("address", initValue?.address);
      setValue("phone", initValue?.phone);
      setValue("birthDay", moment(initValue?.birthDay).format("YYYY-MM-DD"));
      const fetchData = () => {
         Promise.all([
            positionApi.getAll(),
            partApi.getAll(),
            degreeApi.getAll(),
         ]).then((values) => {
            const position = values[0].data.data.map((value: Category) => {
               return { key: value.id, value: value.name } as Option;
            });
            setPositionOption(position);
            const part = values[1].data.data.map((value: Category) => {
               return { key: value.id, value: value.name } as Option;
            });
            setPartOption(part);
            const degree = values[2].data.data.map((value: Category) => {
               return { key: value.id, value: value.name } as Option;
            });
            setDegreeOption(degree);
            if (action === "add") {
               setValue("position", position[0].key);
               setValue("part", part[0].key);
               setValue("degree", degree[0].key);
            } else if (action === "edit") {
               setValue("position", initValue?.position.key);
               setValue("part", initValue?.part.key);
               setValue("degree", initValue?.degree.key);
            }
         });
      };
      fetchData();
   }, [action, setValue, initValue]);

   const onSubmit = (data: FormValues) => {
      console.log(data);
      const staff = {
         id: initValue?.id,
         name: data.name,
         email: data.email,
         image: initValue?.image,
         address: data.address,
         birthDay: data.birthDay,
         phone: data.phone,
         degree: data.degree,
         position: data.position,
         part: data.part,
      } as StaffModel;
      if (action === "add") {
         staff.createBy = `${user?.id} - ${user?.name}`;
         staffApi.add(staff).then((res) => {
            if (res.data.add === true) {
               navigate("/staff");
               Notification(
                  "success",
                  <NotificationContent
                     type="success"
                     message="Add Staff success—check it out!"
                  />
               );
            } else {
               Notification(
                  "danger",
                  <NotificationContent
                     type="danger"
                     message="Add Staff failed—check it out!"
                  />
               );
            }
         });
      } else if (action === "edit") {
         staffApi.update(staff).then((res) => {
            if (res.data.update === true) {
               navigate(`/staff/${initValue?.id}`);
               Notification(
                  "success",
                  <NotificationContent
                     type="success"
                     message="Update Staff success—check it out!"
                  />
               );
            } else {
               Notification(
                  "danger",
                  <NotificationContent
                     type="danger"
                     message="Update Staff failed—check it out!"
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
            </s.FormRow>
            <s.FormRow>
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
               <s.FormItem>
                  <InputGroup
                     label="Date of bỉrth"
                     placeholder="Add Date"
                     isNull
                     innerRef={register("birthDay", {
                        required: "Birth Day is required.",
                     })}
                     error={errors.birthDay ? errors.birthDay.message : ""}
                     type="date"
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup
                     label="Phone"
                     placeholder="Phone"
                     isNull
                     innerRef={register("phone", {
                        required: "Phone is required.",
                        pattern: {
                           value: /^[0][0-9]{9}$/,
                           message: "Invalid phone",
                        },
                     })}
                     error={errors.phone ? errors.phone.message : ""}
                     type="number"
                  />
               </s.FormItem>
               <s.FormItem>
                  <SelectGroup
                     label="Degree"
                     isNull
                     options={degreeOptions}
                     innerRef={register("degree")}
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <SelectGroup
                     label="Part"
                     isNull
                     options={partOptions}
                     innerRef={register("part")}
                  />
               </s.FormItem>
               <s.FormItem>
                  <SelectGroup
                     label="Position"
                     isNull
                     options={positionOptions}
                     innerRef={register("position")}
                  />
               </s.FormItem>
            </s.FormRow>
            {children}
         </s.FormContent>
      </s.Form>
   );
};

export default StaffForm;
