import React, { ReactChild, ReactChildren } from "react";
import { useMatch } from "react-router-dom";
import * as s from "../StyleNavDropdown";

interface PropsItem {
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
   path: string;
}

const Item: React.FC<PropsItem> = ({ children, path }) => {
   const match = useMatch({ path: `${path}/*` });
   return (
      <s.Item isActive={match ? true : false}>
         <s.ItemLink to={path}>{children}</s.ItemLink>
      </s.Item>
   );
};

export default Item;
