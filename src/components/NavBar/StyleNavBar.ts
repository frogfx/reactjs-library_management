import styled, { css } from "styled-components";
import {
   Home,
   UserTie,
   User,
   Receipt,
   TachometerAlt,
} from "@styled-icons/fa-solid";
import { AddressCard, AddressBook } from "@styled-icons/fa-regular";
import { Link } from "react-router-dom";

type PropsNavBarItem = { isActice?: boolean };

export const TachometerIcon = styled(TachometerAlt)`
   width: 2rem;
   height: 2rem;
   margin-right: 1.5rem;
`;

export const ReceiptIcon = styled(Receipt)`
   width: 1.9rem;
   height: 1.9rem;
   margin-right: 1.5rem;
`;

export const AddressCardIcon = styled(AddressCard)`
   width: 2rem;
   height: 2rem;
   margin-right: 1.5rem;
`;

export const ReaderIcon = styled(User)`
   width: 1.9rem;
   height: 1.9rem;
   margin-right: 1.5rem;
`;

export const UserIcon = styled(UserTie)`
   width: 1.9rem;
   height: 1.9rem;
   margin-right: 1.5rem;
`;

export const HomeIcon = styled(Home)`
   color: #fff;
   width: 1.8rem;
   height: 1.8rem;
   margin-right: 0.7rem;
`;

export const BookIcon = styled(AddressBook)`
   width: 1.9rem;
   height: 1.9rem;
   margin-right: 1.5rem;
`;

export const NavBarTitle = styled.p`
   color: #ced4da;
   padding: 2rem 2.5rem 1rem;
   font-size: 1.2rem;
`;

export const NavBar = styled.ul``;

export const NavBarItem = styled.li``;
