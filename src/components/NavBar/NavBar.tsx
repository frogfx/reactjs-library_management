import React from "react";
import NavDropdown from "./NavDropdown/NavDropdown";
import NavDropDownLable from "./NavDropdown/NavDropdownLabel/NavDropdownLabel";
import NavLink from "./NavLink/NavLink";
import * as s from "./StyleNavBar";

const NavBar: React.FC = () => {
   return (
      <s.NavBar>
         <s.NavBarTitle>Statistical</s.NavBarTitle>
         <s.NavBarItem>
            <NavLink path="/">
               <s.TachometerIcon />
               <span>Dashboards</span>
            </NavLink>
         </s.NavBarItem>
         <s.NavBarTitle>Manage</s.NavBarTitle>
         <s.NavBarItem>
            <NavDropdown
               parentLink="book-manage"
               links={[
                  { name: "Category", value: "category" },
                  { name: "Book", value: "book" },
               ]}
            >
               <NavDropDownLable>
                  <s.BookIcon />
                  <span>Book Manage</span>
               </NavDropDownLable>
            </NavDropdown>
         </s.NavBarItem>
         <s.NavBarItem>
            <NavLink path="/staff">
               <s.UserIcon />
               <span>Staff Manage</span>
            </NavLink>
         </s.NavBarItem>
         <s.NavBarItem>
            <NavLink path="/readers">
               <s.ReaderIcon />
               <span>Readers Manage</span>
            </NavLink>
         </s.NavBarItem>
         <s.NavBarItem>
            <NavDropdown
               parentLink="receipt-manage"
               links={[
                  { name: "Borrow", value: "borrow" },
                  { name: "Returns", value: "returns" },
                  { name: "Fine", value: "fine" },
               ]}
            >
               <NavDropDownLable>
                  <s.ReceiptIcon />
                  <span>Receipt Manage</span>
               </NavDropDownLable>
            </NavDropdown>
         </s.NavBarItem>
         <s.NavBarTitle>Auth</s.NavBarTitle>
         <s.NavBarItem>
            <NavLink path="/profile">
               <s.AddressCardIcon />
               <span>Profile</span>
            </NavLink>
         </s.NavBarItem>
      </s.NavBar>
   );
};

export default NavBar;
