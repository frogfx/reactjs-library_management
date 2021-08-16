import styled, { css } from "styled-components";

type PropsPagination = {
   isActive?: boolean;
};

export const Pagination = styled.div`
   display: flex;
`;

export const List = styled.ul`
   display: flex;
   align-items: center;
`;

export const Item = styled.li``;

export const ItemAction = styled.button`
   width: 3rem;
   height: 3rem;
   border: 1px solid #dee6ed;
   border-right: 0px solid #dee6ed;
   color: #6c757d;
   background-color: #fff;
   transition: all 0.25s linear;
   &:hover {
      color: #020202;
      background-color: #e2e8ee;
   }
   ${(props: PropsPagination) =>
      props.isActive &&
      css`
         background-color: #3f80ea;
         color: #fff;
         &:hover {
            background-color: #3f80ea;
            color: #fff;
         }
      `}
`;

export const Button = styled.button`
   background-color: #fff;
   border: 1px solid #dee6ed;
   color: #6c757d;
   padding: 0.7rem 1rem;
   max-height: 3rem;
   transition: all 0.25s linear;
   &:hover {
      color: #020202;
      background-color: #e2e8ee;
   }
`;

export const Next = styled(Button)`
   border-top-right-radius: 3.5px;
   border-bottom-right-radius: 3.5px;
`;

export const Previous = styled(Button)`
   border-top-left-radius: 3.5px;
   border-bottom-left-radius: 3.5px;
   margin-right: -1px;
`;
