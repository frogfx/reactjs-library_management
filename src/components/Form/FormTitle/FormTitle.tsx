import React from "react";
import * as s from "../StyleForm";

interface PropsTitle {
   title?: string;
}

const FormTitle: React.FC<PropsTitle> = ({ title }) => {
   return <s.Title>{title}</s.Title>;
};

export default FormTitle;
