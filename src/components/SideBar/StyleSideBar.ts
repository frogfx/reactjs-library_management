import styled, { css } from "styled-components";

type PropsSideBar = {
   isOpen?: boolean;
};

export const SideBar = styled.div`
   z-index: 1;
   background: #293042;
   position: fixed;
   height: calc(100% - 9%);
   width: 25rem;
   left: -25rem;
   padding: 3rem 0;
   overflow-y: auto;
   transition: all 0.35s ease;
   ${(props: PropsSideBar) =>
      props.isOpen &&
      css`
         left: 0;
      `}
`;
