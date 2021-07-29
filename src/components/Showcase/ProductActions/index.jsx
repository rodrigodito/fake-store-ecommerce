import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addProductToCart } from '../../../store/modules/cart/actions'
import { formatMoney } from '../../../helpers/CurrencyHelper';
import SnackbarAlert from '../../SnackbarAlert';

import {
  CardPrice,
  CardCount,
  CardCountMoreLess,
  CardCountItem,
  CardActions
} from '../Card/style';
import { ButtonDefault } from '../../../GlobalStyle';

function ProductActions({product}) {
  const [quantity, setQuantity] = useState(1);
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
  const dispatch = useDispatch();

  const addToCart = () => {
    setIsOpenSnackbar(true);
    dispatch(addProductToCart({...product, quantity}));
  };

  const handleChangeQuantity = value => {
    value = value.replace(/\D/g, '')

    if(value > 0) setQuantity(Number(value))
    else setQuantity(1)
  }

  const quantityLess = () => {
    if(quantity > 1) setQuantity(Number(quantity - 1))
  }
  
  const quantityMore = () => {
    setQuantity(Number(quantity + 1))
  }
  return(
    <>
      <CardActions>
        <CardPrice>
          R$ {formatMoney(product?.price, '.', ',')}
        </CardPrice>
        <CardCount>
          <CardCountMoreLess 
            className={`${quantity <= 1 ? 'disabled' : ''}`} 
            onClick={quantityLess}
          >
            -
          </CardCountMoreLess>
          <CardCountItem 
            value={quantity} 
            onChange={e => handleChangeQuantity(e.target.value)} 
          />
          <CardCountMoreLess onClick={quantityMore}>
            +
          </CardCountMoreLess>
        </CardCount>
        <ButtonDefault onClick={addToCart}>
          Adicionar
        </ButtonDefault>
      </CardActions>
      <SnackbarAlert open={isOpenSnackbar} setOpen={setIsOpenSnackbar}>
        Produto adicionado com sucesso
      </SnackbarAlert>
    </>
  )
}

export default ProductActions