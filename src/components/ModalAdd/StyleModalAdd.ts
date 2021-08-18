import styled, { css } from "styled-components";
import { Times } from "@styled-icons/fa-solid";
import { Bookmark } from "@styled-icons/fa-regular";

type PropsModal = {
   isOpen: boolean;
};

export const TimesIcon = styled(Times)`
   width: 1.4rem;
   height: 1.4rem;
   color: #000;
`;

export const BookMarkIcon = styled(Bookmark)`
   width: 1.2rem;
   height: 1.2rem;
   color: #fff;
   margin-right: 0.5rem;
`;

export const Modal = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   z-index: 1;
   transform: translate(-50%, -50%) scale(0.8);
   background-color: #fff;
   padding: 2rem 2rem 1.5rem;
   border-radius: 4px;
   transition: all 0.25s linear;
`;

export const Title = styled.h2`
   font-size: 2.2rem;
   font-weight: bold;
   text-align: center;
   margin-bottom: 1.5rem;
`;

export const Select = styled.div`
   width: 40rem;
`;

export const Action = styled.div`
   margin-top: 2rem;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const Close = styled.button`
   position: absolute;
   top: 0.5rem;
   right: 0.3rem;
   background: none;
   border: none;
`;

export const Background = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   min-height: 100%;
   border-radius: 4px;
   background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalAdd = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   min-height: 100%;
   opacity: 0;
   visibility: hidden;
   transition: all 0.25s ease-in-out;
   ${(props: PropsModal) =>
      props.isOpen &&
      css`
         opacity: 1;
         visibility: visible;
      `};
   ${(props: PropsModal) =>
      props.isOpen &&
      css`
         ${Modal} {
            transform: translate(-50%, -50%) scale(1);
         }
      `};
`;
