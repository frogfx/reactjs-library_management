import React from "react";
import * as s from "./StyleCategoryEdit";
import { Link } from "react-router-dom";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import CategoryForm from "../../../components/Form/CategoryForm/CategoryForm";
import FormActionNew from "../../../components/Form/FormActions/FormActionNew/FormActionNew";

const CategoryEdit: React.FC = () => {
   return (
      <s.CategoryEdit>
         <PageTitle title="Category Manage" />
         <CategoryForm>
            <FormActionNew />
         </CategoryForm>
      </s.CategoryEdit>
   );
};

export default CategoryEdit;
