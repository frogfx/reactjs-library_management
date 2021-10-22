import styled from "styled-components";
import { Input } from "../../components/InputGroup/StyleInputGroup";

export const ChatPage = styled.div``;

export const Container = styled.div`
   width: 100%;
   background-color: #fff;
   box-shadow: 0 0 0.875rem 0 rgb(41 48 66 / 5%);
   border-radius: 5px;
   display: flex;
   @media (max-width: 700px) {
      flex-wrap: wrap;
   }
`;

export const MessageUsers = styled.div`
   @media (max-width: 700px) {
      width: 100%;
   }
`;

export const Search = styled.div`
   padding: 1.6rem 2rem;
   border-bottom: 1px solid #dee6ed;
`;

export const List = styled.div`
   height: 36rem;
   overflow-y: scroll;
`;

export const MessageBox = styled.div`
   flex: 1;
   border-left: 1px solid #dee6ed;
   @media (max-width: 700px) {
      width: 100%;
      border-top: 1px solid #dee6ed;
   }
`;

export const BoxTop = styled.div`
   padding: 1.5rem 2.5rem;
   border-bottom: 1px solid #dee6ed;
   @media (max-width: 700px) {
      border-right: 1px solid #dee6ed;
   }
`;

export const BoxBottom = styled.div`
   padding: 1.5rem 2.5rem;
   border-top: 1px solid #dee6ed;
   display: flex;
   align-items: center;
   @media (max-width: 700px) {
      border-right: 1px solid #dee6ed;
   }
`;

export const BoxCenter = styled.div`
   height: 30rem;
   padding: 0 2rem 2rem;
   overflow-y: scroll;
   @media (max-width: 700px) {
      border-right: 1px solid #dee6ed;
   }
`;

export const InputSend = styled(Input)`
   margin-top: 0;
   border-top-right-radius: 0;
   border-bottom-right-radius: 0;
   margin-right: 0.2rem;
`;

export const Send = styled.button`
   height: 2.975rem;
   border-radius: 0.25rem;
   border-top-left-radius: 0;
   border-bottom-left-radius: 0;
   border: none;
   background-color: #3f80ea;
   color: #fff;
   padding: 0 1.5rem;
   transition: all 0.25s linear;
   &:hover {
      background-color: #366dc7;
   }
`;
