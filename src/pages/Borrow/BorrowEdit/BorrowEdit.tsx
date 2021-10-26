import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Borrow } from "../../../interface/index";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import BorrowForm from "../../../components/Form/BorrowForm/BorrowForm";
import useFetch from "../../../hooks/useFetch";
import borrowReceiptApi from "../../../api/borrowReceiptApi";
import Loading from "../../../components/Loading/Loading";
import FormActionEdit from "../../../components/Form/FormActions/FormActionEdit/FormActionEidt";
import Notification from "../../../assets/Notification";
import NotificationContent from "../../../components/Notification/NotificationContent";
import * as s from "./StyleBorrowEdit";

const BorrowEdit: React.FC = () => {
   const navigate = useNavigate();
   const { id } = useParams();
   const [data, isLoading, error] = useFetch<Borrow>(() =>
      borrowReceiptApi.get(id)
   );

   const handleDelete = () => {
      borrowReceiptApi.delete(id).then((res) => {
         if (res.data.delete === true) {
            navigate("/receipt-manage/borrow");
            Notification(
               "success",
               <NotificationContent
                  type="success"
                  message="Delete Borrow receipt success—check it out!"
               />
            );
         } else {
            Notification(
               "danger",
               <NotificationContent
                  type="danger"
                  message="Delete Borrow receipt failed—check it out!"
               />
            );
         }
      });
   };

   return (
      <s.BorrowEdit>
         <PageTitle title="Borrow Receipt Manage" />
         {isLoading ? (
            <Loading />
         ) : (
            <BorrowForm
               title="Borrow Receipt Edit"
               action="edit"
               initValue={data}
            >
               <FormActionEdit callbackDelete={() => handleDelete()} />
            </BorrowForm>
         )}
      </s.BorrowEdit>
   );
};

export default BorrowEdit;
