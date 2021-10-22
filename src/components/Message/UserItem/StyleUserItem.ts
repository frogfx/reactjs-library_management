import styled, { css } from "styled-components";

type PropsStatus = {
   isOnline: boolean;
};

export const UserItem = styled.li`
   cursor: pointer;
   display: flex;
   justify-content: space-between;
   padding: 1rem 2rem;
   transition: all 0.25s linear;

   &:hover {
      background-color: #f4f7f9;
      color: #495057;
   }
   @media (max-width: 700px) {
      width: 100%;
   }
`;

export const Left = styled.div`
   display: flex;
   align-items: center;
`;

export const Image = styled.img`
   width: 4rem;
   height: 4rem;
   border-radius: 50%;
`;

export const Info = styled.div`
   margin-left: 2rem;
   margin-right: 2.5rem;
`;

export const Name = styled.p`
   color: #212529;
`;

export const Status = styled.p`
   color: #737d85;
   font-size: 1.15rem;
   position: relative;
   padding-left: 1.3rem;
   &::after,
   &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 1rem;
      height: 1rem;
      background-color: transparent;
      transform: translateY(-50%);
      border-radius: 50%;
   }
   ${(props: PropsStatus) =>
      props.isOnline
         ? css`
              &::before {
                 background-color: #71cc90;
              }
           `
         : css`
              &::after {
                 background-color: #e27c79;
              }
           `}
`;

export const Noti = styled.p`
   width: 1.6rem;
   height: 1.6rem;
   background-color: #4bbf73;
   border-radius: 2px;
   display: flex;
   align-items: center;
   justify-content: center;
   span {
      color: #fff;
      font-size: 1.1rem;
   }
`;
