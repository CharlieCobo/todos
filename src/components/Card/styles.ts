import styled from '@emotion/styled';

export const CardStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.4rem;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors['grey-400']};
`;
