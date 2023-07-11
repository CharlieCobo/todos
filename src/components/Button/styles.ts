import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  color: white;
  padding: 1.4rem 1.6rem;
  border: none;
  border-radius: 5rem;
  background-image: ${({ theme }) => theme.gradients.button};
`;
