import styled from 'styled-components';
import { fontSecondary } from '../../../assets/styles/variables';

export const HeaderSearch = styled.div`
  position: relative;
  margin-top: 8px;
`;

export const HeaderSearchInput = styled.input`
  width: 100%;
  padding: 8px 16px;
  border: 2px solid black;
  font-size: 14px;
  font-family: ${fontSecondary};
  font-weight: bold;
  text-transform: uppercase;
`;