import styled from "styled-components";
import { Link } from "react-router-dom";
import { SignInAlt } from "@styled-icons/fa-solid";

export const SignInIcon = styled(SignInAlt)`
   width: 1.5rem;
   height: 1.5rem;
   margin-right: 0.7rem;
`;

export const LoginPage = styled.div`
   position: absolute;
   left: 50%;
   top: 50%;
   display: inline-block;
   transform: translate(-50%, -50%);
   width: 47rem;
`;

export const Title = styled.h2`
   color: #495057;
   font-weight: 500;
   font-size: 2.3rem;
   text-align: center;
   margin-bottom: 1rem;
`;

export const Des = styled.p`
   color: #6c757d;
   font-size: 1.65rem;
   font-weight: 300;
   text-align: center;
   margin-bottom: 1.5rem;
`;

export const Form = styled.form`
   background-color: #fff;
   box-shadow: 0 0 0.875rem 0 rgb(41 48 66 / 5%);
   border-radius: 5px;
   padding: 3rem 4rem 2rem;
`;

export const FormRow = styled.div`
   margin-bottom: 1.5rem;
`;

export const Action = styled.div`
   display: flex;
   justify-content: center;
`;

export const Forget = styled(Link)`
   color: #3f80ea;
   font-size: 1.1rem;
   &:hover {
      text-decoration: underline;
   }
`;

export const Remember = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 2rem;
   p {
      margin-left: 0.5rem;
      margin-bottom: 0.1rem;
      color: #6c757d;
   }
`;
