import React, { ReactChild, ReactChildren, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Option, Category, Book, BookModel } from "../../../interface/index";
import { State } from "../../../state/reducers";
import { useSelector } from "react-redux";
import InputGroup from "../../InputGroup/InputGroup";
import SelectGroup from "../../SelectGroup/SelectGroup";
import FormTitle from "../FormTitle/FormTitle";
import Notification from "../../../assets/Notification";
import NotificationContent from "../../Notification/NotificationContent";
import categoryApi from "../../../api/categoryApi";
import bookApi from "../../../api/bookApi";
import * as s from "../StyleForm";

interface PropsBookForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
   initValue?: Book;
   action: "add" | "edit";
}

type FormValues = {
   name?: string;
   author?: string;
   publisher?: string;
   price?: number;
   publisYear?: string;
   category?: string;
};

const BookForm: React.FC<PropsBookForm> = ({
   title,
   children,
   initValue,
   action,
}) => {
   const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
   } = useForm<FormValues>({
      reValidateMode: "onSubmit",
   });
   const navigate = useNavigate();
   const [categories, setCategories] = useState<Option[]>([] as Option[]);
   const [years, setYears] = useState<Option[]>([] as Option[]);
   const user = useSelector((state: State) => state.auth.user);

   useEffect(() => {
      setValue("name", initValue?.name);
      setValue("author", initValue?.author);
      setValue("publisher", initValue?.publisher);
      setValue("price", initValue?.price);
      const loadYears = () => {
         const currentYear = new Date().getFullYear();
         const yearsOption = [] as Option[];
         var startYear = currentYear - 10;
         while (startYear <= currentYear) {
            yearsOption.push({
               key: startYear.toString(),
               value: startYear.toString(),
            });
            startYear++;
         }
         if (action === "add") setValue("publisYear", yearsOption[0].key);
         else {
            const index = yearsOption.findIndex(
               (year) => year.key === initValue?.publisYear.key
            );
            if (index >= 0) {
               setValue("publisYear", initValue?.publisYear.key);
               console.log(initValue?.publisYear.key);
            } else {
               if (initValue?.publisYear)
                  yearsOption.unshift(initValue?.publisYear);
               setValue("publisYear", initValue?.publisYear.key);
            }
         }
         setYears(yearsOption);
      };
      const fetchData = async () => {
         const res = await categoryApi.getAll();
         const categoriesOption: Option[] = res.data.data.map(
            (category: Category) => {
               return {
                  key: category.id,
                  value: category.name,
               } as Option;
            }
         );
         if (action === "add") setValue("category", categoriesOption[0].key);
         else {
            const index = categoriesOption.findIndex(
               (category) => category.key === initValue?.category.key
            );
            if (index >= 0) setValue("category", initValue?.category.key);
            else {
               if (initValue?.category)
                  categoriesOption.unshift(initValue?.category);
               setValue("category", initValue?.category.key);
            }
         }
         setCategories(categoriesOption);
      };
      fetchData();
      loadYears();
   }, [initValue, action, setValue]);

   const onSubmit = (data: FormValues) => {
      console.log(data);
      const book = {
         id: initValue?.id,
         name: data.name,
         category: data.category,
         author: data.author,
         publisYear: data.publisYear,
         publisher: data.publisher,
         price: data.price,
         reciever: `${user?.id} - ${user?.name}`,
      } as BookModel;
      if (action === "add") {
         bookApi.add(book).then((res) => {
            if (res.data.add === true) {
               navigate(`/book-manage/book`);
               Notification(
                  "success",
                  <NotificationContent
                     type="success"
                     message="Add Book success—check it out!"
                  />
               );
            } else {
               Notification(
                  "danger",
                  <NotificationContent
                     type="danger"
                     message="Add Book failed—check it out!"
                  />
               );
            }
         });
      } else if (action === "edit") {
         bookApi.update(book).then((res) => {
            if (res.data.update === true) {
               navigate(`/book-manage/book/${initValue?.id}`);
               Notification(
                  "success",
                  <NotificationContent
                     type="success"
                     message="Update Book success—check it out!"
                  />
               );
            } else {
               Notification(
                  "danger",
                  <NotificationContent
                     type="danger"
                     message="Update Book failed—check it out!"
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
                     label="Author"
                     placeholder="Author"
                     isNull
                     innerRef={register("author", {
                        required: "Author is required.",
                     })}
                     error={errors.author ? errors.author.message : ""}
                  />
               </s.FormItem>
               <s.FormItem>
                  <SelectGroup
                     label="Publis Year"
                     isNull
                     options={years}
                     innerRef={register("publisYear")}
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem>
                  <InputGroup
                     label="Publisher"
                     placeholder="Publisher"
                     isNull
                     innerRef={register("publisher", {
                        required: "Publisher is required.",
                     })}
                     error={errors.publisher ? errors.publisher.message : ""}
                  />
               </s.FormItem>
               <s.FormItem>
                  <InputGroup
                     label="Price"
                     placeholder="Price"
                     isNull
                     innerRef={register("price", {
                        required: "Price is required.",
                        pattern: {
                           value: /^[1-9][0-9]*/,
                           message: "Invalid price",
                        },
                     })}
                     error={errors.price ? errors.price.message : ""}
                     type="number"
                  />
               </s.FormItem>
            </s.FormRow>
            {children}
         </s.FormContent>
      </s.Form>
   );
};

export default BookForm;
