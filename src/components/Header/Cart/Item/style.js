import styled from 'styled-components';
import { fontSecondary, grayLight, colorPrimary } from '../../../../assets/styles/variables';

export const BoxCartItem = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-bottom: 24px;
  margin-bottom: 24px;

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    width: 75%;
    height: 1px;
    background: ${grayLight};
    transform: translate(-50%, 0);
  }

  .btnDelete {
    cursor: pointer;

    &:hover {
      filter: brightness(0.5);
    }
  }
`;

export const BoxCartInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BoxCartCount = styled.div`
  display: flex;
  align-items: center;
`

export const BoxCartMoreLess = styled.button`
  font-family: ${fontSecondary};
  font-size: 16px;
  font-weight: bold;
  padding: 0 8px;
  cursor: pointer;

  &:hover {
    color: ${colorPrimary};
  }
  
  &.disabled {
    cursor: default;
    color: ${grayLight};
  }

`;

export const BoxCartCountItem = styled.span`
  width: 35px;
  font-family: ${fontSecondary};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border: none;

  &:hover, 
  &:focus {
    outline: none;
  }
`;

export const IconDelete = styled.img`
  width: 14px;
`;