import { useSelector } from 'react-redux';

import CheckoutProductItem from './Item';

import { CheckoutProducts } from './style';

function Products() {
  const cartState = useSelector(state => state.cart)
  return(
    <CheckoutProducts>
      {cartState?.cart?.products?.length > 0 && 
        cartState?.cart?.products.map(item => (
          <CheckoutProductItem item={item}/>
        )
      )}
    </CheckoutProducts>
  );
}

export default Products;