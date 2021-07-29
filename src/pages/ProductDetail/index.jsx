import {useState, useEffect} from 'react';

import ProductGallery from "../../components/ProductDetail/Gallery";
import ProductDescription from '../../components/ProductDetail/Description';
import ProductActions from "../../components/Showcase/ProductActions";
import api from '../../services/api';

import {ContainerWhite} from '../../GlobalStyle';
import { ProductTitle, ProductMainInfo } from './style';

function ProductDetail(props) {
  const [product, setProduct] = useState();
  const { id } = props?.match?.params;

  useEffect(() => {
    api.get(`/products/${id}`)
      .then(res => setProduct(res.data))
  }, []);

  return(
    <ContainerWhite>
      <ProductTitle>{product?.title}</ProductTitle>
      <ProductMainInfo>
        <ProductGallery product={product}/>
        <ProductActions product={product} />
      </ProductMainInfo>
      <ProductDescription product={product}/>
    </ContainerWhite>
  )
}

export default ProductDetail;