import styled from '@emotion/styled';

export const H1 = styled.h1`
  font-family: 'Zilla Slab', serif;
  font-size: 4.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 5.6rem;
`;

interface PProps {
  done?: boolean;
}

export const P = styled.p<PProps>`
  color: ${({ theme }) => theme.colors['grey-200']};
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem;
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
`;
