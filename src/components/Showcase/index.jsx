import {useState, useEffect} from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';

import { BoxShowcase } from './style';

function Showcase() {
  const [products, setProducts] = useState([])
  const productsState = useSelector(state => state.products);
  
  useEffect(() => {
    if(productsState?.productsFiltered?.length > 0)
      setProducts(productsState?.productsFiltered)
    else setProducts(productsState?.allProducts)
  }, [productsState])

  return(
    <BoxShowcase>
      {products.length > 0 && 
        products.map(product => (
          <Card key={product?.id} product={product}/>
        )
      )}
    </BoxShowcase>
  )
}

export default Showcase;