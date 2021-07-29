import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Showcase from '../../components/Showcase';
import Loading from '../../components/Loading';

import * as getProductsActions from '../../store/modules/products/actions';

import { Container } from '../../GlobalStyle';

function Home() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state?.products)

  useEffect(() => {
    dispatch(getProductsActions.getProductsRequest());
  }, [])

  return (
    <>
      <Container>
        <Showcase />
      </Container>
      {loading && <Loading />}
      
    </>
  )
};

export default Home;