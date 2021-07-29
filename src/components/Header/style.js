import styled from 'styled-components';
import { Container } from '../../assets/styles/GlobalStyle';
import { fontSecondary, colorPrimary } from '../../assets/styles/variables';

export const Header = styled.div`
  display: flex;
  padding: 16px 0;
  margin-bottom: 32px;
  background: ${colorPrimary};
  color: white;
  border-top: 4px solid black;
  font-family: ${fontSecondary};
  font-weight: bold;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-left: 16px;
`;

export const HeaderTitleLogo = styled.h1`
  width: 200px;
  color: white;
  font-family: ${fontSecondary};
  font-weight: bold;
  text-transform: uppercase;
`;
