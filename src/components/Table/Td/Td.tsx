import React, { ReactChild, ReactChildren } from "react";
import * as s from "../StyleTable";

interface PropsTd {
   isCenter?: boolean;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const Td: React.FC<PropsTd> = ({ children, isCenter }) => {
   return <s.Td isCenter={isCenter}>{children}</s.Td>;
};

export default Td;
