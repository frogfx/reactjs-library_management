import React from "react";
import { useParams } from "react-router";
import { Returns } from "../../../interface/index";
import * as s from "./StyleReturnsDetail";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import ReturnsInfo from "../../../components/Info/ReturnsInfo/ReturnsInfo";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/Loading/Loading";
import PageContent from "../../../components/Page/PageContent/PageConent";
import returnsApi from "../../../api/returnsApi";

const ReturnsDetail: React.FC = () => {
   const { id } = useParams();
   const [data, isLoading, error] = useFetch<Returns>(() => returnsApi.get(id));
   return (
      <s.ReturnsDetail>
         {isLoading ? (
            <Loading />
         ) : (
            <PageContent>
               <PageTitle title="Returns Receipt Manage" />
               <ReturnsInfo returns={data} />
            </PageContent>
         )}
      </s.ReturnsDetail>
   );
};

export default ReturnsDetail;
