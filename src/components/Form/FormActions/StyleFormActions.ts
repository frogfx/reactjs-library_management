import styled from "styled-components";
import { Save, TrashAlt } from "@styled-icons/fa-regular";
import { LongArrowAltLeft } from "@styled-icons/fa-solid";

export const TrashIcon = styled(TrashAlt)`
   width: 1.4rem;
   height: 1.4rem;
   margin-right: 0.5rem;
   margin-bottom: 0.1rem;
`;

export const LeftIcon = styled(LongArrowAltLeft)`
   width: 1.5rem;
   height: 1.5rem;
   margin-right: 0.3rem;
   margin-bottom: 0.1rem;
`;

export const SaveIcon = styled(Save)`
   width: 1.5rem;
   height: 1.5rem;
   margin-right: 0.3rem;
   margin-bottom: 0.1rem;
`;

export const FormActions = styled.div`
   display: flex;
   justify-content: flex-end;
`;

export const Action = styled.div`
   margin-left: 1rem;
`;
