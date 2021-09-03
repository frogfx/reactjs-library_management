import styled, { keyframes } from "styled-components";

export const Loading = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   min-height: 100%;
`;

const spinner = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   width: 3rem;
   height: 3rem;
   border: 5px solid #3f80ea;
   border-radius: 50%;
   border-top-color: transparent;
   animation: ${spinner} 1.5s linear infinite;
`;
