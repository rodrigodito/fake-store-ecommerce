import { SectionTitle } from '../../../GlobalStyle';
import { ProductDescription } from './style';

function Description({product}) {
  return(
    <ProductDescription>
      <SectionTitle>Descrição: </SectionTitle>
      <p>{product?.description}</p>
    </ProductDescription>
  )
};

export default Description;