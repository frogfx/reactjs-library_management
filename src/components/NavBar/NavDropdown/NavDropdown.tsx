import React, { useState, ReactChild, ReactChildren } from "react";
import { useMatch } from "react-router-dom";
import Item from "./NavDropdownItem/NavDropdownItem";
import * as s from "./StyleNavDropdown";

interface Link {
   name?: string;
   value?: string;
}

interface PropsDropdown {
   children?:
      | string
      | ReactChild
      | ReactChild[]
      | ReactChildren
      | ReactChildren[];
   parentLink?: string;
   links: Link[];
}

const NavDropdown: React.FC<PropsDropdown> = ({
   children,
   parentLink,
   links,
}) => {
   const match = useMatch({ path: `/${parentLink}/*` });
   const [isOpen, setIsOpen] = useState(false);
   const [heightList, setHeightList] = useState("0px");
   const toggle = () => {
      setIsOpen(!isOpen);
      if (isOpen) {
         setHeightList("0px");
      } else {
         const height = 36 * links.length;
         setHeightList(`${height}px`);
      }
   };

   return (
      <s.Dropdown isOpen={isOpen}>
         <s.Title isActive={match ? true : false} onClick={toggle}>
            {children}
         </s.Title>
         <s.List heightList={heightList}>
            {links?.map((link) => (
               <Item path={`/${parentLink}/${link.value}`}>{link.name}</Item>
            ))}
         </s.List>
      </s.Dropdown>
   );
};

export default NavDropdown;
