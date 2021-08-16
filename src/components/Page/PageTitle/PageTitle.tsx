import React from "react";
import * as s from "../StylePage";

interface PropsTitle {
   title?: string;
}

const PageTitle: React.FC<PropsTitle> = ({ title }) => {
   return <s.Title>{title}</s.Title>;
};

export default PageTitle;
