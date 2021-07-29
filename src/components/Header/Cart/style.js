import styled from 'styled-components';
import { fontPrimary } from '../../../assets/styles/variables';

export const BoxCart = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 420px;
  padding: 16px;
  background: white;
  color: black;
  z-index: 9999;
  font-family: ${fontPrimary};
  box-shadow: 0 10px 14px -5px #797979;
`;

export const ButtonCart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
`;

export const QuantityCart = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background: white;
  color: black;
  transform: translate(40%, -40%);
`;