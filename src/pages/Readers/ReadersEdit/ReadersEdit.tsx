import React from "react";
import { useNavigate, useParams } from "react-router";
import { Readers } from "../../../interface/index";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import ReadersForm from "../../../components/Form/ReadersForm/ReadersForm";
import FormActionEdit from "../../../components/Form/FormActions/FormActionEdit/FormActionEidt";
import Loading from "../../../components/Loading/Loading";
import useFetch from "../../../hooks/useFetch";
import readersApi from "../../../api/readersApi";
import Notification from "../../../assets/Notification";
import NotificationContent from "../../../components/Notification/NotificationContent";
import * as s from "./StyleReadersEdit";

const ReadersEdit: React.FC = () => {
   const navigate = useNavigate();
   const { id } = useParams();
   const [data, isLoading, error] = useFetch<Readers>(() => readersApi.get(id));

   const handleDelete = () => {
      readersApi.delete(id).then((res) => {
         if (res.data.delete === true) {
            navigate("/readers");
            Notification(
               "success",
               <NotificationContent
                  type="success"
                  message="Delete Reader success—check it out!"
               />
            );
         } else {
            Notification(
               "danger",
               <NotificationContent
                  type="danger"
                  message="Delete Reader failed—check it out!"
               />
            );
         }
      });
   };
   return (
      <s.ReadersEdit>
         <PageTitle title="Readers Manage" />
         {isLoading ? (
            <Loading />
         ) : (
            <ReadersForm title="Readers Edit" action="edit" initValue={data}>
               <FormActionEdit callbackDelete={() => handleDelete()} />
            </ReadersForm>
         )}
      </s.ReadersEdit>
   );
};

export default ReadersEdit;
