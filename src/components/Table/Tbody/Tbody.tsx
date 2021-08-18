import React, { ReactChild, ReactChildren } from "react";
import * as s from "../StyleTable";

interface PropsTbody {
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const Tbody: React.FC<PropsTbody> = ({ children }) => {
   return <s.Tbody>{children}</s.Tbody>;
};

export default Tbody;
