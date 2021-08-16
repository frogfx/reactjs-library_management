import React from "react";
import * as s from "../StyleTable";

interface PropsTitle {
   title?: string;
}

const TableTitle: React.FC<PropsTitle> = ({ title }) => {
   return <s.Title>{title}</s.Title>;
};

export default TableTitle;
