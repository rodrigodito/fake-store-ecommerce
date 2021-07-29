import {useState, useEffect} from 'react';

import ProductGallery from "../../components/ProductDetail/Gallery";
import ProductDescription from '../../components/ProductDetail/Description';
import ProductActions from "../../components/Showcase/ProductActions";
import Loading from '../../components/Loading';
import api from '../../services/api';

import {ContainerWhite} from '../../assets/styles/GlobalStyle';
import { ProductTitle, ProductMainInfo } from './style';

function ProductDetail(props) {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = props?.match?.params;

  useEffect(() => {
    setLoading(true)
    api.get(`/products/${id}`)
      .then(res => {
        setProduct(res.data)
        setLoading(false)
      })
  }, []);

  return(
    <>
      <ContainerWhite>
        <ProductTitle>{product?.title}</ProductTitle>
        <ProductMainInfo>
          <ProductGallery product={product}/>
          <ProductActions product={product} />
        </ProductMainInfo>
        <ProductDescription product={product}/>
      </ContainerWhite>
      {loading && <Loading />}
    </>
  )
}

export default ProductDetail;