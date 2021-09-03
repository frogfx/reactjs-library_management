import React from "react";
import { useParams } from "react-router";
import { Fine } from "../../../interface/index";
import * as s from "./StyleFineDetail";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import FineInfo from "../../../components/Info/FineInfo/FineInfo";
import useFetch from "../../../hooks/useFetch";
import fineApi from "../../../api/fineApi";
import Loading from "../../../components/Loading/Loading";
import PageContent from "../../../components/Page/PageContent/PageConent";

const FineDetail: React.FC = () => {
   const { id } = useParams();
   const [data, isLoading, error] = useFetch<Fine>(() => fineApi.get(id));
   return (
      <s.FineDetail>
         {isLoading ? (
            <Loading />
         ) : (
            <PageContent>
               <PageTitle title="Fine Receipt Manage" />
               <FineInfo fine={data} />
            </PageContent>
         )}
      </s.FineDetail>
   );
};

export default FineDetail;
