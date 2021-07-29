import { useSelector } from 'react-redux';

import { formatMoney } from '../../../../helpers/CurrencyHelper';

import { Typography } from '../../../Typography/style';
import { CartResume } from './style'

function Resume() {
  const cartState = useSelector(state => state.cart)

  return(
    <CartResume>
      <Typography 
        size="small" 
        textTransform="none" 
        display="flex" 
        justifyContent="space-between"
      >
        Subtotal
        <Typography as="span" weight="600">
          R$ {formatMoney(cartState?.cart?.orderSubAmount, '.', ',')}
        </Typography>
      </Typography>
      <Typography 
        size="small" 
        textTransform="none" 
        display="flex" 
        justifyContent="space-between"
      >
        Frete
        <Typography as="span" weight="600">
          R$ {formatMoney(cartState?.cart?.orderShippingAmount, '.', ',')}
        </Typography>
      </Typography>
      <Typography 
        size="small" 
        textTransform="none" 
        display="flex" 
        justifyContent="space-between"
      >
        Total
        <Typography as="span" weight="600">
          R$ {formatMoney(cartState?.cart?.orderAmount, '.', ',')}
        </Typography>
      </Typography>
    </CartResume>
  );
};

export default Resume;