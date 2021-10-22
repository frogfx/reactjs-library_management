import React from "react";
import * as s from "./StyleBookEdit";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import BookForm from "../../../components/Form/BookForm/BookForm";
import FormActionEdit from "../../../components/Form/FormActions/FormActionEdit/FormActionEidt";

const BookEdit: React.FC = () => {
   return (
      <s.BookEdit>
         <PageTitle title="Book Manage" />
         <BookForm title="Book Edit" action="edit">
            <FormActionEdit />
         </BookForm>
      </s.BookEdit>
   );
};

export default BookEdit;
