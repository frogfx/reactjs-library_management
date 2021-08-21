import styled, { css } from "styled-components";
import { BookReader } from "@styled-icons/fa-solid";

type PropsSideBar = {
   isToggle?: boolean;
};

export const BookIcon = styled(BookReader)`
   width: 2.2rem;
   height: 2.2rem;
   color: #fff;
   margin-right: 1rem;
`;

export const SideBar = styled.div`
   z-index: 1;
   background: #293042;
   position: fixed;
   height: calc(100% - 9%);
   width: 25rem;
   min-height: 100vh;
   top: 0;
   left: -25rem;
   padding: 1.7rem 0;
   overflow-y: auto;
   transition: all 0.35s ease;
   ${(props: PropsSideBar) =>
      props.isToggle &&
      css`
         left: 0;
      `}
`;

export const Logo = styled.h1`
   color: #fff;
   margin-bottom: 5rem;
   font-size: 1.9rem;
   font-weight: 500;
   display: flex;
   align-items: center;
   justify-content: center;
`;
