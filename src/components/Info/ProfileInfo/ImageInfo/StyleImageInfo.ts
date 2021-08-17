import styled, { css } from "styled-components";

type PropsImage = {
   medium?: boolean;
};

export const ImageInfo = styled.div`
   margin-bottom: 1rem;
`;

export const ImageBox = styled.div`
   border-radius: 50%;
   overflow: hidden;
   width: 13rem;
   height: 13rem;
   ${(props: PropsImage) =>
      props.medium &&
      css`
         width: 15rem;
         height: 15rem;
      `}
`;

export const Image = styled.img``;
