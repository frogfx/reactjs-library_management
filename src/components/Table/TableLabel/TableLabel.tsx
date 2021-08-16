import React, { ReactChild, ReactChildren } from "react";
import * as s from "../StyleTable";

interface PropsTableLabel {
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const TableLabel: React.FC<PropsTableLabel> = ({ children }) => {
   return <s.Label>{children}</s.Label>;
};

export default TableLabel;
