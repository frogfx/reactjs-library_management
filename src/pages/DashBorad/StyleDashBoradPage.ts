import styled from "styled-components";
import { AddressBook, User } from "@styled-icons/fa-regular";

export const UserIcon = styled(User)`
   width: 2rem;
   height: 2rem;
   color: #3f80ea;
`;

export const BookIcon = styled(AddressBook)`
   width: 2rem;
   height: 2rem;
   color: #3f80ea;
`;

export const DashBoradPage = styled.div``;

export const List = styled.li`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`;

export const Item = styled.ul`
   width: calc(50% - 1.2rem);
   margin-bottom: 2.5rem;
   @media (max-width: 1024px) {
      width: 100%;
   }
`;
