import { useDispatch } from 'react-redux';

import { 
  removeProductToCart, 
  increaseProductQuantity, 
  decreaseProductQuantity 
} from '../../../../store/modules/cart/actions';
import { formatMoney } from '../../../../helpers/CurrencyHelper';

import { Typography } from '../../../Typography/style';
import { 
  BoxCartItem, 
  BoxCartInfos, 
  BoxCartCount, 
  BoxCartMoreLess, 
  BoxCartCountItem, 
  IconDelete 
} from './style';

import TrashIcon from '../../../../assets/images/icons/trash.svg';

function Item({item}) {
  const dispatch = useDispatch();

  const handleLessProduct = () => {
    dispatch(decreaseProductQuantity(item))
  }

  const handleMoreProduct = () => {
    dispatch(increaseProductQuantity(item))
  }
  
  const handleRemoveProduct = () => {
    dispatch(removeProductToCart(item))
  };
  
  return(
    <BoxCartItem>
      <BoxCartInfos>
        <Typography 
          size="small" 
          font="primary" 
          textTransform="none" 
          weight="normal" 
          width="200px"
        >
          {item?.product?.title}
        </Typography>
        <BoxCartCount>
          <BoxCartMoreLess 
            className={`${item?.quantity <= 1 ? 'disabled' : ''}`} 
            onClick={handleLessProduct}
          >
            -
          </BoxCartMoreLess>
          <BoxCartCountItem >
            {item?.quantity}
          </BoxCartCountItem>
          <BoxCartMoreLess 
            onClick={handleMoreProduct}
          >
            +
          </BoxCartMoreLess>
        </BoxCartCount>
        <Typography size="small">
          R$ {formatMoney(item?.product?.price, '.', ',')}
        </Typography>
      </BoxCartInfos>
      <Typography 
        color="red" 
        textTransform="none" 
        size="extraSmall" 
        weight="normal" 
        onClick={handleRemoveProduct}
        className="btnDelete"
      >
        <IconDelete src={TrashIcon} alt="Ícone Remover"/>
        Remover
      </Typography>
    </BoxCartItem>
  )
}

export default Item