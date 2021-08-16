import React, { ReactChild, ReactChildren } from "react";
import * as s from "../StyleTable";

interface PropsTh {
   width?: string;
   isCenter?: boolean;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const Th: React.FC<PropsTh> = ({ children, isCenter, width }) => {
   return (
      <s.Th isCenter={isCenter} width={width}>
         {children}
      </s.Th>
   );
};

export default Th;
