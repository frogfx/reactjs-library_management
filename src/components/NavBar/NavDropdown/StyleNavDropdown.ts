import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { AngleDown } from "@styled-icons/fa-solid";

type PropsNavDropdown = {
   isOpen?: boolean;
   heightList?: string;
   isActive?: boolean;
};

export const AngleDownIcon = styled(AngleDown)`
   width: 1.3rem;
   height: 1.3rem;
   margin-bottom: 0.2rem;
   transition: all 0.2s ease-in-out;
`;

export const Label = styled.div`
   cursor: pointer;
   padding: 1rem 2.5rem;
   color: rgba(233, 236, 239, 0.5);
   transition: all 0.25s linear;
   display: flex;
   align-items: center;
   justify-content: space-between;
   &:hover {
      color: rgba(233, 236, 239, 0.75);
   }
`;

export const Title = styled.div`
   position: relative;
   &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      background-color: transparent;
      width: 3px;
      height: 90%;
      transform: translateY(-50%);
      transition: all 0.25s linear;
   }
   ${(props: PropsNavDropdown) =>
      props.isActive &&
      css`
         ${Label} {
            color: #e9ecef;
         }
         &::before {
            background-color: rgb(63, 128, 234);
         }
      `};
`;

export const LabelLeft = styled.div``;

export const LabelRight = styled.div``;

export const List = styled.ul`
   padding-left: 4.5rem;
   max-height: ${(props: PropsNavDropdown) => props.heightList};
   transition: all 0.25s ease;
   overflow: hidden;
`;

export const Item = styled.li``;

export const ItemLink = styled(Link)`
   cursor: pointer;
   color: rgba(233, 236, 239, 0.5);
   display: inline-block;
   padding: 1rem 1.5rem;
   width: 100%;
   position: relative;
   transition: all 0.25s ease;
   max-height: 3.6rem;
   &:focus {
      outline: 0;
      border: none;
      -moz-outline-style: none;
   }
   &:hover {
      color: #e9ecef;
   }
   ${(props: PropsNavDropdown) =>
      props.isActive &&
      css`
         outline: 0;
         border: none;
         -moz-outline-style: none;
         color: #568fed;
      `};
`;

export const Dropdown = styled.div`
   ${(props: PropsNavDropdown) =>
      props.isOpen &&
      css`
         ${AngleDownIcon} {
            transform: rotate(-180deg);
         }
      `}
`;
