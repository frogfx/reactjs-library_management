import React from "react";
import { Readers } from "../../../interface/index";
import { useParams } from "react-router";
import * as s from "./StyleReadersDetail";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import ReadersInfo from "../../../components/Info/ReadersInfo/ReadersInfo";
import useFetch from "../../../hooks/useFetch";
import readersApi from "../../../api/readersApi";
import Loading from "../../../components/Loading/Loading";
import PageContent from "../../../components/Page/PageContent/PageConent";

const ReadersDetail: React.FC = () => {
   const { id } = useParams();
   const [data, isLoading, error] = useFetch<Readers>(() => readersApi.get(id));
   return (
      <s.ReadersDetail>
         {isLoading ? (
            <Loading />
         ) : (
            <PageContent>
               <PageTitle title="Readers Manage" />
               <ReadersInfo reader={data} />
            </PageContent>
         )}
      </s.ReadersDetail>
   );
};

export default ReadersDetail;
