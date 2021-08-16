import styled from "styled-components";

export const Group = styled.div``;

export const Label = styled.label`
   font-size: 1.3rem;
   color: #767676;
   span {
      margin-left: 0.3rem;
      color: red;
   }
`;

export const Select = styled.select`
   font-family: "Poppins", sans-serif;
   margin-top: 0.5rem;
   display: block;
   width: 100%;
   height: calc(1.5em + 0.75rem + 2px);
   padding: 0.4rem 1rem;
   font-weight: 400;
   color: #495057;
   background-color: #fff;
   background-clip: padding-box;
   border: 1px solid #ced4da;
   border-radius: 0.25rem;
   transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
   &::placeholder {
      color: #c4c4c4;
   }
`;

export const Error = styled.p`
   font-size: 1rem;
   color: red;
   margin: 0.3rem;
`;
