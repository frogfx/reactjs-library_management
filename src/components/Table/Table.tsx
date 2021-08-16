import React, { ReactChild, ReactChildren } from "react";
import * as s from "./StyleTable";

interface PropsTable {
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const Table: React.FC<PropsTable> = ({ children }) => {
   return <s.Table>{children}</s.Table>;
};

export default Table;
