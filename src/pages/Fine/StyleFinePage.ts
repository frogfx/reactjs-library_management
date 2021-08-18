import styled from "styled-components";
import { Eye } from "@styled-icons/fa-regular";
import { Plus } from "@styled-icons/fa-solid";

export const Action = styled.button`
   border: none;
   background-color: transparent;
`;

export const PlusIcon = styled(Plus)`
   width: 1.5rem;
   height: 1.5rem;
   color: #fff;
   margin-right: 0.5rem;
`;

export const EyeIcon = styled(Eye)`
   width: 1.7rem;
   height: 1.7rem;
   color: #6c757d;
   transition: all 0.25s linear;
   &:hover {
      color: #212529;
   }
`;

export const FinePage = styled.div``;
