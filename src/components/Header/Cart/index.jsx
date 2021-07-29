import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import Item from './Item';
import Resume from './Resume';

import { BoxInfo } from '../Infos/style';
import { BoxCart, ButtonCart, QuantityCart } from './style';
import { Typography } from '../../Typography/style';
import { ButtonDefault } from '../../../assets/styles/GlobalStyle';

import CartIcon from '../../../assets/images/icons/shopping_cart.svg';

function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartState = useSelector(state => state?.cart)
  const wrapperRef = useRef(null);
  let history = useHistory();

  const handleCloseOrder = () => {
    setIsCartOpen(false);
    history.push("/checkout");
  }

  return(
    <BoxInfo 
      className={`cart ${isCartOpen ? 'opened' : ''}`} 
      ref={wrapperRef}
    >
      <ButtonCart onClick={() => setIsCartOpen(!isCartOpen)}>
        <img src={CartIcon} alt="Ícone carrinho" className="icon-cart"/>
        <span>Carrinho</span>
        <QuantityCart>
          {cartState?.cart?.products?.length}
        </QuantityCart>
      </ButtonCart>
      
      {isCartOpen &&
        <BoxCart>
          {cartState?.cart?.products?.length > 0 ?
           (
            <>
              {cartState?.cart?.products?.map(item => (
                <Item item={item} key={item.product.id} />
              ))}
              <Resume />
              <ButtonDefault onClick={handleCloseOrder}>
                Checkout
              </ButtonDefault>
            </>
          ) : (
            <Typography size="small" textTransform="none" weight="normal">
              seu carrinho está vazio
            </Typography>
          )
        }
        </BoxCart>
      }
    </BoxInfo>
  )
}

export default Cart;