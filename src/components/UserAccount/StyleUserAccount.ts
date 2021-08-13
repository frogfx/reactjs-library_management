import styled, { css } from "styled-components";
import { AngleDown, SignOutAlt } from "@styled-icons/fa-solid";
import { User } from "@styled-icons/fa-regular";

type PropsDropdown = {
   isOpen: boolean;
};

export const SignOutIcon = styled(SignOutAlt)`
   width: 1.3rem;
   height: 1.3rem;
   margin-right: 0.3rem;
`;

export const UserIcon = styled(User)`
   width: 1.3rem;
   height: 1.3rem;
   margin-right: 0.3rem;
`;

export const AngleDownIcon = styled(AngleDown)`
   width: 1.5rem;
   height: 1.5rem;
   color: #828282;
`;

export const UserAccount = styled.div`
   position: relative;
`;

export const Label = styled.div`
   cursor: pointer;
   display: flex;
   align-items: center;
`;

export const Image = styled.img`
   width: 4rem;
   height: 4rem;
   border-radius: 50%;
`;

export const Name = styled.p`
   margin: 0 0.5rem;
   color: #293042;
`;

export const Dropdown = styled.div`
   position: absolute;
   width: 100%;
   top: 100%;
   background-color: #fff;
   border: 1px solid rgba(0, 0, 0, 0.15);
   border-radius: 0.3rem;
   padding: 0.5rem 0;
   opacity: 0;
   visibility: hidden;
   transition: all 0.25s linear;
   ${(props: PropsDropdown) =>
      props.isOpen &&
      css`
         opacity: 1;
         visibility: visible;
         top: calc(100% + 0.8rem);
      `}
`;

export const DropdownItem = styled.div`
   cursor: pointer;
   color: #495057;
   background-color: transparent;
   padding: 0.8rem 1.5rem;
   display: flex;
   align-items: center;
   &:hover {
      background-color: #f4f7f9;
      ${SignOutIcon},${UserIcon} {
         color: #1e2125;
      }
   }
`;
