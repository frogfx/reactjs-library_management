import React, { ReactChild, ReactChildren } from "react";
import { useMatch } from "react-router-dom";
import * as s from "./StyleNavLink";

interface PropsNavLink {
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
   path: string;
}

const NavLink: React.FC<PropsNavLink> = ({ children, path }) => {
   const match = useMatch({ path: `/${path}/` });
   return (
      <s.NavLink isActice={match ? true : false} to={path}>
         {children}
      </s.NavLink>
   );
};

export default NavLink;
