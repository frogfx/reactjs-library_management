import React from "react";
import { useParams } from "react-router-dom";
import { Book } from "../../../interface/index";
import * as s from "./StyleBookDetail";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import BookInfo from "../../../components/Info/BookInfo/BookInfo";
import bookApi from "../../../api/bookApi";
import useFetch from "../../../hooks/useFetch";
import PageContent from "../../../components/Page/PageContent/PageConent";
import Loading from "../../../components/Loading/Loading";

const BookDetail: React.FC = () => {
   const { id } = useParams();
   const [data, isLoading, error] = useFetch<Book>(() => bookApi.get(id));
   return (
      <s.BookDetail>
         <PageTitle title="Book Manage" />
         {isLoading ? (
            <Loading />
         ) : (
            <PageContent>{data && <BookInfo book={data} />}</PageContent>
         )}
      </s.BookDetail>
   );
};

export default BookDetail;
