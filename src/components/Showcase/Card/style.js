import styled from 'styled-components';
import { fontSecondary, colorPrimary, grayLight } from '../../../assets/styles/variables';

export const BoxCard = styled.div`
  padding: 16px;
  background: white;
`;

export const CardFigured = styled.figure`
  width: 100%;
  height: 180px;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CardName = styled.h2`
  height: 30px;
  margin-bottom: 32px;
  font-size: 16px;
  font-weight: normal;
`;

export const CardActions = styled.div``;

export const CardCount = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardCountMoreLess = styled.button`
  font-family: ${fontSecondary};
  font-size: 28px;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    color: ${colorPrimary};
  }

  &.disabled {
    color: ${grayLight};
    cursor: default;
  }
`;

export const CardCountItem = styled.input`
  width: 75px;
  font-family: ${fontSecondary};
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  padding: 0 16px;
  border: none;

  &:hover, 
  &:focus {
    outline: none;
  }
`;

export const CardButton = styled.button`
  width: 100%;
  padding: 10px 0;
  margin-top: 5px;
  color: white;
  background: ${colorPrimary};
  border: 2px solid ${colorPrimary};
  text-align: center;
  font-family: ${fontSecondary};
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover, 
  &:focus,
  &:visited,
  &:active {
    background: white;
    border: 2px solid ${colorPrimary};
    color: ${colorPrimary};
  }
`;

export const CardPrice = styled.span`
  font-family: ${fontSecondary};
  font-weight: bold;
  font-size: 28px;
`;