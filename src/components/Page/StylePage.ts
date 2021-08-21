import styled, { css } from "styled-components";

type PropsHeader = {
   isToggle?: boolean;
};

export const Page = styled.div`
   background-color: #f7f9fc;
   min-height: 100vh;
   padding: 4rem 4rem 2.5rem;
   transition: all 0.35s ease;
   position: relative;
   left: 0;
   @media (min-width: 769px) {
      ${(props: PropsHeader) =>
         props.isToggle &&
         css`
            margin-left: 25rem;
         `}
   }
   @media (max-width: 768px) {
      ${(props: PropsHeader) =>
         props.isToggle &&
         css`
            left: 25rem;
         `}
   }
   @media (max-width: 520px) {
      padding: 2.5rem;
   }
   @media (max-width: 520px) {
      padding: 2.5rem 1rem;
   }
`;

export const Title = styled.h2`
   color: #495057;
   font-weight: 500;
   font-size: 2rem;
   margin-bottom: 1.5rem;
`;

export const Content = styled.div``;
