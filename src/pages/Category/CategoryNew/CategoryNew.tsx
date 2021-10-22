import React from "react";
import * as s from "./StyleCategoryNew";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import CategoryForm from "../../../components/Form/CategoryForm/CategoryForm";
import FormActionNew from "../../../components/Form/FormActions/FormActionNew/FormActionNew";

const CategoryNew: React.FC = () => {
   return (
      <s.CategoryNew>
         <PageTitle title="Category Manage" />
         <CategoryForm title="Category New" action="add">
            <FormActionNew />
         </CategoryForm>
      </s.CategoryNew>
   );
};

export default CategoryNew;
