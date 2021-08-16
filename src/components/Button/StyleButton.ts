import styled, { css } from "styled-components";

type PropsButton = {
   typeColor?: string;
};

export const Button = styled.button`
   color: #fff;
   padding: 0.7rem 1.5rem;
   font-size: 1.35rem;
   border-radius: 2px;
   border: none;
   background-color: transparent;
   transition: all 0.25s linear;
   display: flex;
   align-items: center;
   font-family: "Poppins", sans-serif;
   ${(props: PropsButton) =>
      props.typeColor === "primary" &&
      css`
         background-color: #3f80ea;
         &:hover {
            background-color: #3266bb;
         }
      `}
   ${(props: PropsButton) =>
      props.typeColor === "danger" &&
      css`
         background-color: rgb(253, 61, 79);
      `}
    ${(props: PropsButton) =>
      props.typeColor === "warning" &&
      css`
         background-color: #e5a54b;
         &:hover {
            background-color: #e9b366;
         }
      `}
    ${(props: PropsButton) =>
      props.typeColor === "success" &&
      css`
         background-color: rgb(58, 202, 91);
      `}
    ${(props: PropsButton) =>
      props.typeColor === "info" &&
      css`
         background-color: #1f9bcf;
         &:hover {
            background-color: #1a84b0;
         }
      `}
    ${(props: PropsButton) =>
      props.typeColor === "link" &&
      css`
         display: inline-block;
         color: #fff;
      `}
`;
