import React from "react";
import * as s from "./StyleCategoryDetai";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import CategoryInfo from "../../../components/Info/CategoryInfo/CategoryInfo";

const CategoryDetail: React.FC = () => {
   return (
      <s.CategoryDetail>
         <PageTitle title="Category Manage" />
         <CategoryInfo />
      </s.CategoryDetail>
   );
};

export default CategoryDetail;
