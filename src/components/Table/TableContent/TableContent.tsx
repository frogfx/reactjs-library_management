import React, { ReactChild, ReactChildren } from "react";
import * as s from "../StyleTable";

interface PropsContent {
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const TableContent: React.FC<PropsContent> = ({ children }) => {
   return <s.Content>{children}</s.Content>;
};

export default TableContent;
