import styled, { css } from "styled-components";
import { TrashAlt } from "@styled-icons/fa-regular";
import { Plus } from "@styled-icons/fa-solid";
import { Table } from "../Table/StyleTable";

type PropsFormItem = {
   isFull?: boolean;
};

export const TrashIcon = styled(TrashAlt)`
   width: 1.7rem;
   height: 1.7rem;
   color: #6c757d;
   transition: all 0.25s linear;
   &:hover {
      color: #212529;
   }
`;

export const PlusIcon = styled(Plus)`
   width: 1.5rem;
   height: 1.5rem;
   color: #fff;
   margin-right: 0.5rem;
`;

export const Form = styled.div`
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

export const FormContent = styled.form`
   padding: 2rem;
`;

export const FormRow = styled.div`
   margin-bottom: 1.5rem;
   display: flex;
   justify-content: space-between;
`;

export const FormItem = styled.div`
   width: calc(50% - 1rem);
   ${(props: PropsFormItem) =>
      props.isFull &&
      css`
         width: calc(100%);
      `}
`;

export const TableTitle = styled.h3`
   font-size: 2rem;
   font-weight: 700;
   font-family: "Open Sans", sans-serif;
`;

export const FormTableTop = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 1rem;
`;

export const FormTable = styled(Table)`
   padding: 1.5rem 0;
   box-shadow: 0 0 0 0;
`;

export const IsLost = styled.input`
   cursor: pointer;
`;

export const FormRowInfo = styled(FormRow)`
   margin: 2rem 0;
`;

export const FormImage = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;
