import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

type PropsNav = { isActice?: boolean };

export const NavLink = styled(Link)`
   position: relative;
   padding: 1rem 2.5rem;
   color: rgba(233, 236, 239, 0.5);
   display: flex;
   align-items: center;
   transition: all 0.25s linear;
   &:focus {
      outline: 0;
      border: none;
      -moz-outline-style: none;
   }
   span {
      margin-top: 0.15rem;
   }
   &:hover {
      color: rgba(233, 236, 239, 0.75);
   }
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
`;

export const Nav = styled.div`
   ${(props: PropsNav) =>
      props.isActice &&
      css`
         ${NavLink} {
            color: #e9ecef;
            &::before {
               background-color: rgb(63, 128, 234);
            }
         }
      `};
`;
