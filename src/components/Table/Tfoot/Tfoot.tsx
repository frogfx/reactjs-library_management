import React, { ReactChild, ReactChildren } from "react";
import * as s from "../StyleTable";

interface PropsTfoot {
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const Tfoot: React.FC<PropsTfoot> = ({ children }) => {
   return <s.Tfoot>{children}</s.Tfoot>;
};

export default Tfoot;
