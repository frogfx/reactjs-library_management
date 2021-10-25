import styled from "styled-components";
import { LongArrowAltLeft, PencilAlt } from "@styled-icons/fa-solid";
import { TrashAlt } from "@styled-icons/fa-regular";

export const TrashIcon = styled(TrashAlt)`
   width: 1.4rem;
   height: 1.4rem;
   margin-right: 0.5rem;
`;

export const PenIcon = styled(PencilAlt)`
   width: 1.5rem;
   height: 1.5rem;
   margin-right: 0.5rem;
`;

export const LeftIcon = styled(LongArrowAltLeft)`
   width: 1.5rem;
   height: 1.5rem;
   margin-right: 0.5rem;
`;

export const InfoAction = styled.div`
   margin-top: 2rem;
   display: flex;
   justify-content: flex-end;
`;

export const Action = styled.div`
   margin-left: 1rem;
`;
