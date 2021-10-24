import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Staff } from "../../../interface/index";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import StaffForm from "../../../components/Form/StaffForm/StaffForm";
import Loading from "../../../components/Loading/Loading";
import useFetch from "../../../hooks/useFetch";
import FormActionEdit from "../../../components/Form/FormActions/FormActionEdit/FormActionEidt";
import staffApi from "../../../api/staffApi";
import Notification from "../../../assets/Notification";
import NotificationContent from "../../../components/Notification/NotificationContent";
import * as s from "./StyleStaffEdit";

const StaffEdit: React.FC = () => {
   const navigate = useNavigate();
   const { id } = useParams();
   const [data, isLoading, error] = useFetch<Staff>(() => staffApi.get(id));

   const handleDelete = () => {
      staffApi.delete(id).then((res) => {
         if (res.data.delete === true) {
            navigate("/staff");
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
      <s.StaffEdit>
         <PageTitle title="Staff Manage" />
         {isLoading ? (
            <Loading />
         ) : (
            <StaffForm title="Staff Edit" action="edit" initValue={data}>
               <FormActionEdit callbackDelete={() => handleDelete()} />
            </StaffForm>
         )}
      </s.StaffEdit>
   );
};

export default StaffEdit;
