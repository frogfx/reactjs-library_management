import styled from "styled-components";

export const Statistical = styled.div`
   box-shadow: 0 0 0.875rem 0 rgb(41 48 66 / 5%);
   border-radius: 5px;
   background: #e0eafc;
   color: #3f80ea;
   height: 100%;
   display: flex;
   justify-content: space-between;
`;

export const Left = styled.div`
   padding: 2rem;
   @media (max-width: 520px) {
      padding: 1rem;
   }
`;

export const Title = styled.h3`
   font-size: 1.6rem;
   font-weight: 500;
   margin-bottom: 1rem;
`;

export const Des = styled.p`
   font-size: 1.2rem;
`;

export const Image = styled.div`
   width: 15rem;
   height: 10rem;
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

export const Right = styled.div`
   display: flex;
   align-items: center;
`;
