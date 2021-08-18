import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Plus } from "@styled-icons/fa-solid";

type PropsTd = {
   isCenter?: boolean;
   width?: string;
};

type PropsTh = {
   isCenter?: boolean;
   width?: string;
};

export const PlusIcon = styled(Plus)`
   width: 1.2rem;
   height: 1.2rem;
   margin-right: 0.5rem;
`;

export const Table = styled.div`
   width: 100%;
   background-color: #fff;
   box-shadow: 0 0 0.875rem 0 rgb(41 48 66 / 5%);
   border-radius: 5px;
   padding: 1rem 1.5rem;
`;

export const Label = styled.div`
   padding: 1rem 0;
`;

export const Des = styled.p`
   color: #6c757d;
   font-size: 1.35rem;
`;

export const Title = styled.p`
   color: #495057;
   font-weight: 500;
   font-size: 1.6rem;
   margin-bottom: 0.7rem;
`;

export const Actions = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 2.5rem 0 1rem;
`;

export const ActionAdd = styled(Link)`
   color: #fff;
   padding: 0.7rem 1rem;
   font-size: 1.2rem;
   border-radius: 2px;
   background-color: #3f80ea;
   transition: all 0.25s linear;
   &:hover {
      background-color: #3266bb;
   }
`;

export const Content = styled.table`
   width: 100%;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
   border-bottom: 0.5px solid #dee6ed;
   &:nth-of-type(odd) {
      background-color: #f4f7f9;
   }
`;

export const Thead = styled.thead`
   border-bottom: 1.5px solid #6c757d;
   ${Tr} {
      background-color: transparent;
   }
`;

export const Th = styled.th`
   padding: 1.2rem;
   font-weight: 600;
   font-size: 1.35rem;
   color: #6c757d;
   text-align: left;
   &:first-of-type {
      padding-left: 2rem;
   }
   &:last-of-type {
      padding-right: 2rem;
   }
   ${(props: PropsTh) =>
      props.isCenter &&
      css`
         text-align: center;
      `}
   ${(props: PropsTh) =>
      props.width &&
      css`
         width: width + "rem";
      `}
`;

export const Td = styled.td`
   padding: 1.2rem;
   font-size: 1.35rem;
   color: #6c757d;
   &:first-of-type {
      padding-left: 2rem;
   }
   &:last-of-type {
      padding-right: 2rem;
   }
   ${(props: PropsTd) =>
      props.isCenter &&
      css`
         text-align: center;
      `}
`;

export const Pagination = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 1rem 1.5rem;
`;

export const PaginationDes = styled.p`
   color: #6c757d;
   font-size: 1.35rem;
`;
