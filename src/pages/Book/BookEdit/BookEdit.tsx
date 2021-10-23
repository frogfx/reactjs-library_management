import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Book } from "../../../interface/index";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import BookForm from "../../../components/Form/BookForm/BookForm";
import FormActionEdit from "../../../components/Form/FormActions/FormActionEdit/FormActionEidt";
import useFetch from "../../../hooks/useFetch";
import bookApi from "../../../api/bookApi";
import Loading from "../../../components/Loading/Loading";
import Notification from "../../../assets/Notification";
import NotificationContent from "../../../components/Notification/NotificationContent";
import * as s from "./StyleBookEdit";

const BookEdit: React.FC = () => {
   const navigate = useNavigate();
   const { id } = useParams();
   const [data, isLoading, error] = useFetch<Book>(() => bookApi.get(id));

   const handleDelete = () => {
      bookApi.delete(id).then((res) => {
         if (res.data.delete === true) {
            navigate("/book-manage/book");
            Notification(
               "success",
               <NotificationContent
                  type="success"
                  message="Delete Book success—check it out!"
               />
            );
         } else {
            Notification(
               "danger",
               <NotificationContent
                  type="danger"
                  message="Delete Book failed—check it out!"
               />
            );
         }
      });
   };

   return (
      <s.BookEdit>
         <PageTitle title="Book Manage" />
         {isLoading ? (
            <Loading />
         ) : (
            <BookForm title="Book Edit" action="edit" initValue={data}>
               <FormActionEdit callbackDelete={() => handleDelete()} />
            </BookForm>
         )}
      </s.BookEdit>
   );
};

export default BookEdit;
