import React from "react";
import { useParams } from "react-router-dom";
import * as s from "./StyleCategoryEdit";
import useFetch from "../../../hooks/useFetch";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import CategoryForm from "../../../components/Form/CategoryForm/CategoryForm";
import FormActionEdit from "../../../components/Form/FormActions/FormActionEdit/FormActionEidt";
import { Category } from "../../../interface/index";
import categoryApi from "../../../api/categoryApi";
import Loading from "../../../components/Loading/Loading";

const CategoryEdit: React.FC = () => {
   const { id } = useParams();
   const [data, isLoading, error] = useFetch<Category>(() =>
      categoryApi.get(id)
   );
   return (
      <s.CategoryEdit>
         <PageTitle title="Category Manage" />
         {isLoading ? (
            <Loading />
         ) : (
            <CategoryForm title="Category Edit" initValue={data} action="edit">
               <FormActionEdit />
            </CategoryForm>
         )}
      </s.CategoryEdit>
   );
};

export default CategoryEdit;
