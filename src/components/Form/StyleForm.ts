import styled from "styled-components";
import { TrashAlt } from "@styled-icons/fa-regular";
import { Plus } from "@styled-icons/fa-solid";

export const TrashIcon = styled(TrashAlt)`
   width: 1.4rem;
   height: 1.4rem;
   color: rgb(253, 61, 79);
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
   margin-top: 0.5rem;
   display: flex;
   justify-content: space-between;
`;

export const FormItem = styled.div`
   width: calc(50% - 1rem);
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

export const FormTable = styled.div`
   margin: 3rem 0;
`;

export const IsLost = styled.input`
   cursor: pointer;
`;

export const FormRowInfo = styled(FormRow)`
   margin: 2rem 0;
`;
