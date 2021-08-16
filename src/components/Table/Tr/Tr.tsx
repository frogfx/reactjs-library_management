import React, { ReactChild, ReactChildren } from "react";
import * as s from "../StyleTable";

interface PropsTr {
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const Tr: React.FC<PropsTr> = ({ children }) => {
   return <s.Tr>{children}</s.Tr>;
};

export default Tr;
