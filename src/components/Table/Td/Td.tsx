import React, { ReactChild, ReactChildren } from "react";
import * as s from "../StyleTable";

interface PropsTd {
   isCenter?: boolean;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
   isHidden?: boolean;
}

const Td: React.FC<PropsTd> = ({ children, isCenter, isHidden }) => {
   return (
      <s.Td isCenter={isCenter} isHidden={isHidden}>
         {children}
      </s.Td>
   );
};

export default Td;
