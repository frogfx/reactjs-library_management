import styled from "styled-components";
import { PencilAlt, Upload } from "@styled-icons/fa-solid";

export const UploadIcon = styled(Upload)`
   width: 1.5rem;
   height: 1.5rem;
   margin-right: 0.7rem;
`;

export const PenIcon = styled(PencilAlt)`
   width: 1.5rem;
   height: 1.5rem;
   margin-right: 0.7rem;
`;

export const ProfileInfo = styled.div``;

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
   display: flex;
   padding: 2rem;
`;

export const Left = styled.div`
   width: 30%;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const Right = styled.div`
   width: 70%;
`;

export const Item = styled.div`
   margin-bottom: 2rem;
`;
