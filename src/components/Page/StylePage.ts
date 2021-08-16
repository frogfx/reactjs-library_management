import styled, { css } from "styled-components";

type PropsHeader = {
   isToggle?: boolean;
};

export const Page = styled.div`
   background-color: #f7f9fc;
   min-height: 100vh;
   padding: 4rem 4rem 2.5rem;
   transition: all 0.35s ease;
   ${(props: PropsHeader) =>
      props.isToggle &&
      css`
         margin-left: 25rem;
      `}
`;

export const Title = styled.h2`
   color: #495057;
   font-weight: 500;
   font-size: 2rem;
   margin-bottom: 1.5rem;
`;

export const Content = styled.div``;
