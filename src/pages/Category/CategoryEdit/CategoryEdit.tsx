import React from "react";
import * as s from "./StyleCategoryEdit";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import CategoryForm from "../../../components/Form/CategoryForm/CategoryForm";
import FormActionEdit from "../../../components/Form/FormActions/FormActionEdit/FormActionEidt";

const CategoryEdit: React.FC = () => {
   return (
      <s.CategoryEdit>
         <PageTitle title="Category Manage" />
         <CategoryForm title="Category Edit">
            <FormActionEdit />
         </CategoryForm>
      </s.CategoryEdit>
   );
};

export default CategoryEdit;
