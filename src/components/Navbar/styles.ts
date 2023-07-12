import styled from '@emotion/styled';

export const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 1.6rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors['grey-400']};
  box-shadow: 0rem 3rem 4rem 0rem rgba(0, 0, 0, 0.1);
`;

export const LogoWrapperStyled = styled.div`
  width: 100%;
`;

export const LogoStyled = styled.p`
  font-size: 3.2rem;
  text-transform: uppercase;
  letter-spacing: -0.6rem;
  font-weight: 700;
  background-image: ${({ theme }) => theme.gradients.button};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;
