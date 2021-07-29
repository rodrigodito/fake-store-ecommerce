import styled from 'styled-components';
import { fontPrimary, grayLight } from '../../assets/styles/variables';
import { CardActions } from '../../components/Showcase/Card/style';

export const ProductTitle = styled.h1`
  margin-bottom: 32px;
  font-family: ${fontPrimary};
  font-weight: normal;
  font-size: 22px;
`;

export const ProductMainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 64px;
  margin-bottom: 32px;
  border-bottom: 1px solid ${grayLight};

  ${CardActions} {
    width: 250px;
  }
`;