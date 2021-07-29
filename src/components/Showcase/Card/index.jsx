import { NavLink } from 'react-router-dom';
import ProductActions from '../ProductActions';

import { BoxCard, CardFigured, CardName } from './style';

function Card({ product }) {
  return (
    <BoxCard key={product?.id}>
      <NavLink to={`produto/${product?.id}`}>
        <CardFigured>
          <img src={product?.image} alt={product?.title}/>
        </CardFigured>
        <CardName>
          {product?.title}
        </CardName>
      </NavLink>
      <ProductActions product={product} />
    </BoxCard>
  )
};

export default Card;