import { useSelector } from 'react-redux';

import { formatMoney } from '../../../helpers/CurrencyHelper';

import { Typography } from '../../Typography/style';
import { CheckoutInfos, CheckoutInfoTop } from './style';

function Infos() {
  const { cart } = useSelector(state => state.cart)

  return(
    <CheckoutInfos>
      <CheckoutInfoTop>
        <Typography as="p" size="extraSmall">
          Entrega em:
        </Typography>
        <Typography>
          Avenida das Nações Unidas 12901, Brooklin Paulista, São Paulo / SP
        </Typography>
      </CheckoutInfoTop>
      <div>
        <Typography as="p" display="flex" justifyContent="space-between" size="large" weight="bold">
          Subtotal: 
          <span>R$ {formatMoney(cart?.orderSubAmount, '.', ',')}</span>
        </Typography>
        <Typography as="p" display="flex" justifyContent="space-between" size="large" weight="bold">
          Frete: 
          <span>R$ {formatMoney(cart?.orderShippingAmount, '.', ',')}</span>
        </Typography>
        <Typography as="p" display="flex" justifyContent="space-between" size="large" weight="bold">
          Total: 
          <span>R$ {formatMoney(cart?.orderAmount, '.', ',')}</span>
        </Typography>
      </div>
    </CheckoutInfos>
  );
}

export default Infos;