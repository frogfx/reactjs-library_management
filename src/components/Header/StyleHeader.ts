import styled from "styled-components";
import { AlignLeft } from "@styled-icons/fa-solid";

export const Header = styled.header`
   padding: 1rem 2rem;
   box-shadow: 0 0 2rem 0 rgb(41 48 66 / 10%);
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const Toggle = styled.div`
   cursor: pointer;
   width: 2.4rem;
   height: 2.4rem;
   display: flex;
   align-items: center;
`;

export const BarsIcon = styled.div`
   position: relative;
   width: 2.4rem;
   height: 0.35rem;
   border-radius: 1px;
   background-color: #495057;
   &::before,
   ::after {
      content: "";
      position: absolute;
      background-color: #495057;
      height: 0.35rem;
      border-radius: 1px;
      left: 0;
   }
   &::before {
      width: 80%;
      top: -0.8rem;
   }
   &::after {
      width: 60%;
      top: 0.8rem;
   }
`;

export const AlignLeftIcon = styled(AlignLeft)`
   width: 2rem;
   height: 2rem;
   color: #495057;
`;
