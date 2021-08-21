import styled from "styled-components";
import { Table } from "../Table/StyleTable";

export const Info = styled.div`
   width: 100%;
   background-color: #fff;
   box-shadow: 0 0 0.875rem 0 rgb(41 48 66 / 5%);
   border-radius: 5px;
`;

export const Title = styled.h3`
   color: #495057;
   font-weight: 500;
   font-size: 1.6rem;
   padding: 2rem;
`;

export const Content = styled.div`
   padding: 2rem;
`;

export const InfoRow = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
   margin-bottom: 2rem;
   @media (max-width: 1024px) {
      margin-bottom: 0;
   }
`;

export const InfoItem = styled.div`
   width: calc(50% - 1rem);
   @media (max-width: 1024px) {
      width: 100%;
      margin-bottom: 2rem;
   }
`;

export const InfoTable = styled(Table)`
   padding: 1.5rem 0;
   box-shadow: 0 0 0 0;
`;

export const TableTitle = styled.h3`
   font-size: 2rem;
   font-weight: 700;
   font-family: "Open Sans", sans-serif;
`;

export const TableTop = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 1rem;
`;
