import React from "react";
import { useParams } from "react-router";
import { Borrow } from "../../../interface/index";
import * as s from "./StyleBorrowDetail";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import BorrowInfo from "../../../components/Info/BorrowInfo/BorrowInfo";
import useFetch from "../../../hooks/useFetch";
import borrowApi from "../../../api/borrowApi";
import Loading from "../../../components/Loading/Loading";
import PageContent from "../../../components/Page/PageContent/PageConent";

const BorrowDetail: React.FC = () => {
   const { id } = useParams();
   const [data, isLoading, error] = useFetch<Borrow>(() => borrowApi.get(id));
   return (
      <s.BorrowDetail>
         {isLoading ? (
            <Loading />
         ) : (
            <PageContent>
               <PageTitle title="Borrow Receipt Manage" />
               <BorrowInfo borrow={data} />
            </PageContent>
         )}
      </s.BorrowDetail>
   );
};

export default BorrowDetail;
