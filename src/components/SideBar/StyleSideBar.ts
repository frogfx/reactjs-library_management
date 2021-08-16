import styled, { css } from "styled-components";

type PropsSideBar = {
   isToggle?: boolean;
};

export const SideBar = styled.div`
   z-index: 1;
   background: #293042;
   position: fixed;
   height: calc(100% - 9%);
   width: 25rem;
   min-height: 100vh;
   top: 0;
   left: -25rem;
   padding: 3rem 0;
   overflow-y: auto;
   transition: all 0.35s ease;
   ${(props: PropsSideBar) =>
      props.isToggle &&
      css`
         left: 0;
      `}
`;
