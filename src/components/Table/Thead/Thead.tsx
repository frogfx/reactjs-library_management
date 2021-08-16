import React, { ReactChild, ReactChildren } from "react";
import * as s from "../StyleTable";

interface PropsThead {
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const Thead: React.FC<PropsThead> = ({ children }) => {
   return <s.Thead>{children}</s.Thead>;
};

export default Thead;
