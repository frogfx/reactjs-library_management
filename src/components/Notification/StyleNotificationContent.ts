import styled, { css } from "styled-components";
import { Check, Times } from "@styled-icons/fa-solid";

type PropsNotification = {
   type: string;
};

export const CheckIcon = styled(Check)`
   width: 1.5rem;
   height: 1.5rem;
`;

export const TimesIcon = styled(Times)`
   width: 1.7rem;
   height: 1.7rem;
`;

export const Notification = styled.div`
   padding: 1.3rem;
   width: 100%;
   border-radius: 3px;
   display: flex;
   align-items: center;
   ${(props: PropsNotification) =>
      props.type === "success" &&
      css`
         border-color: #c9ecd5;
         background-color: #dbf2e3;
      `};
   ${(props: PropsNotification) =>
      props.type === "danger" &&
      css`
         border-color: #f4cbca;
         background-color: #f7dddc;
      `};
`;

export const Mess = styled.p`
   font-size: 1.2rem;
   margin-left: 1rem;
`;
