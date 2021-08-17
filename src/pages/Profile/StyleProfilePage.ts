import styled from "styled-components";
import { Eye, TrashAlt } from "@styled-icons/fa-regular";
import { Plus, PencilAlt } from "@styled-icons/fa-solid";

export const Action = styled.button``;

export const PlusIcon = styled(Plus)`
   width: 1.5rem;
   height: 1.5rem;
   color: #fff;
   margin-right: 0.5rem;
`;

export const TrashIcon = styled(TrashAlt)`
   width: 1.7rem;
   height: 1.7rem;
   color: #6c757d;
   transition: all 0.25s linear;
   &:hover {
      color: #212529;
   }
`;

export const PencilIcon = styled(PencilAlt)`
   width: 1.7rem;
   height: 1.7rem;
   color: #6c757d;
   transition: all 0.25s linear;
   &:hover {
      color: #212529;
   }
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

export const ProfilePage = styled.div``;
