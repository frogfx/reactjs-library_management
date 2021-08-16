import React, { ReactChild, ReactChildren } from "react";
import * as s from "../StyleTable";

interface PropsActions {
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const TableActions: React.FC<PropsActions> = ({ children }) => {
   return (
      <s.Actions>
         <s.ActionAdd to="new">
            <s.PlusIcon />
            Add
         </s.ActionAdd>
         <div>{children}</div>
      </s.Actions>
   );
};

export default TableActions;
