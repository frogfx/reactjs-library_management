import styled, { css } from "styled-components";
import { AddressBook } from "@styled-icons/fa-regular";

type PropsPercent = {
   negative?: boolean;
};

export const BookIcon = styled(AddressBook)`
   width: 2rem;
   height: 2rem;
   color: #3f80ea;
`;

export const Statistical = styled.div`
   box-shadow: 0 0 0.875rem 0 rgb(41 48 66 / 5%);
   padding: 2.5rem 2rem;
   border-radius: 5px;
   background-color: #fff;
   @media (max-width: 520px) {
      padding: 1rem;
   }
`;

export const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 1.3rem;
`;

export const Title = styled.h3`
   font-size: 2rem;
   font-weight: 500;
   color: #495057;
   margin-bottom: 1rem;
`;

export const Des = styled.p`
   color: #6c757d;
`;

export const Icon = styled.div`
   width: 4.8rem;
   height: 4.8rem;
   display: flex;
   align-items: center;
   justify-content: center;
   background: #e0eafc;
   border-radius: 50%;
`;

export const Bottom = styled.div`
   display: flex;
   align-items: center;
`;

export const Percent = styled.div`
   font-size: 1.1rem;
   font-weight: 500;
   color: #4bbf73;
   background-color: rgba(75, 191, 115, 0.175);
   padding: 0.2rem 0.5rem;
   border-radius: 3px;
   ${(props: PropsPercent) =>
      props.negative &&
      css`
         background-color: rgba(217, 83, 79, 0.175);
         color: #d9534f;
      `}
`;

export const Time = styled.p`
   margin-left: 1rem;
   color: #6c757d;
`;
