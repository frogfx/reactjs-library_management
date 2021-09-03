import React from "react";
import { useParams } from "react-router-dom";
import { Staff } from "../../../interface/index";
import * as s from "./StyleStaffDetail";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import StaffInfo from "../../../components/Info/StaffInfo/StaffInfo";
import useFetch from "../../../hooks/useFetch";
import staffApi from "../../../api/staffApi";
import Loading from "../../../components/Loading/Loading";
import PageContent from "../../../components/Page/PageContent/PageConent";

const StaffDetail: React.FC = () => {
   const { id } = useParams();
   const [data, isLoading, error] = useFetch<Staff>(() => staffApi.get(id));
   return (
      <s.StaffDetail>
         {isLoading ? (
            <Loading />
         ) : (
            <PageContent>
               <PageTitle title="Staff Manage" />
               <StaffInfo staff={data} />
            </PageContent>
         )}
      </s.StaffDetail>
   );
};

export default StaffDetail;
