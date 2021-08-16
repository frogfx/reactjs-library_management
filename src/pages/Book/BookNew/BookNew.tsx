import React from "react";
import * as s from "./StyleBookNew";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import FormActionNew from "../../../components/Form/FormActions/FormActionNew/FormActionNew";
import BookForm from "../../../components/Form/BookForm/BookForm";

const BookNew: React.FC = () => {
   return (
      <s.BookNew>
         <PageTitle title="Book Manage" />
         <BookForm title="Book New">
            <FormActionNew />
         </BookForm>
      </s.BookNew>
   );
};

export default BookNew;
