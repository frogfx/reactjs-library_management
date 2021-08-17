import styled from "styled-components";
import { Upload } from "@styled-icons/fa-solid";

export const Action = styled.button``;

export const UploadIcon = styled(Upload)`
   width: 1.5rem;
   height: 1.5rem;
   margin-right: 0.5rem;
   margin-bottom: 0.2rem;
`;

export const ChoseFile = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
`;

export const Label = styled.label`
   cursor: pointer;
   color: #fff;
   padding: 0.7rem 1.5rem;
   font-size: 1.35rem;
   border-radius: 2px;
   border: none;
   background-color: #3f80ea;
   transition: all 0.25s linear;
   /* display: flex;
   align-items: center; */
   font-family: "Poppins", sans-serif;
   &:hover {
      background-color: #3266bb;
   }
`;

export const Input = styled.input`
   display: none;
`;
