import React from "react";
import * as s from "./StyleBookDetail";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import BookInfo from "../../../components/Info/BookInfo/BookInfo";

const BookDetail: React.FC = () => {
   return (
      <s.BookDetail>
         <PageTitle title="Book Manage" />
         <BookInfo />
      </s.BookDetail>
   );
};

export default BookDetail;
