import styled, { css } from "styled-components";

type PropsBackground = {
   isShow?: boolean;
};

export const Box = styled.div`
   background-color: red;
`;

export const MainLayout = styled.div``;

export const Background = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   min-height: 100%;
   background-color: rgba(0, 0, 0, 0.2);
   z-index: 10;
   opacity: 0;
   display: none;
   visibility: hidden;
   transition: all 0.25s ease-in-out;
   ${(props: PropsBackground) =>
      props.isShow &&
      css`
         opacity: 1;
         visibility: visible;
      `}
   @media (max-width: 768px) {
      display: block;
   }
`;
