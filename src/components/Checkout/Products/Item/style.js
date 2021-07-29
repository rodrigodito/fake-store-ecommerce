import styled from 'styled-components';
import { grayLight } from '../../../../assets/styles/variables';

export const CheckoutProductItem = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex: 1;
  width: 600px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${grayLight};

  .checkoutQuantity {
    line-height: 1.2;
  }
`;

export const CheckoutProductTitle = styled.span`
  width: 260px;
  margin-right: 16px;
`

export const CheckoutProductLeft = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;
`;

export const CheckoutProductRight = styled(CheckoutProductLeft)`
  justify-content: space-between;
`;

export const CheckoutProductFigure = styled.figure`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;

export const CheckoutProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CheckoutProductAmount = styled.span`
  min-width: 85px;
`;