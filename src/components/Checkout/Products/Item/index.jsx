import { formatMoney } from '../../../../helpers/CurrencyHelper';

import { Typography } from '../../../Typography/style';
import { 
  CheckoutProductItem,
  CheckoutProductLeft,
  CheckoutProductRight,
  CheckoutProductFigure,
  CheckoutProductImage,
  CheckoutProductTitle,
  CheckoutProductAmount
} from './style';

function Item({item}) {
  return(
    <CheckoutProductItem>
      <CheckoutProductLeft>
        <CheckoutProductFigure>
          <CheckoutProductImage src={item?.product?.image} alt={item?.product?.title}/>
        </CheckoutProductFigure>
        <CheckoutProductTitle>
          {item?.product?.title}
        </CheckoutProductTitle>
      </CheckoutProductLeft>
      <CheckoutProductRight>
        <Typography 
          className="checkoutQuantity" 
          font="secondary" 
          size="extraLarge"
        >
          {item.quantity}
        </Typography>
        <CheckoutProductAmount>
          R$ {formatMoney(item?.product?.price, ".", ",")}
        </CheckoutProductAmount>
        <CheckoutProductAmount>
          R$ {formatMoney(item?.amount, ".", ",")}
        </CheckoutProductAmount>
      </CheckoutProductRight>
    </CheckoutProductItem>
  )
}

export default Item;