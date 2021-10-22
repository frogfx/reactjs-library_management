import styled, { css } from "styled-components";

type PropsItem = {
   isMyMessage?: boolean;
   isCurrentUser?: boolean;
};

export const Image = styled.img`
   width: 3.5rem;
   height: 3.5rem;
   border-radius: 50%;
`;

export const Message = styled.div`
   margin-left: 1rem;
   padding: 1rem;
   background-color: #eff2f6;
   border-radius: 0.4rem;
   color: #6c757d;
`;

export const Content = styled.p``;

export const MessageItem = styled.div`
   display: flex;
   margin-top: 2rem;
   ${(props: PropsItem) =>
      props.isCurrentUser &&
      css`
         margin-top: 0.5rem;
         ${Image} {
            opacity: 0;
            visibility: hidden;
         }
      `}
   ${(props: PropsItem) =>
      props.isMyMessage &&
      css`
         flex-direction: row-reverse;
         ${Image} {
            display: none;
         }
         ${Message} {
            background-color: #3f80ea;
            color: #fff;
         }
      `}
`;
