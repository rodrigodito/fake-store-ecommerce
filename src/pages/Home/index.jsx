import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import Showcase from '../../components/Showcase';

import * as getProductsActions from '../../store/modules/products/actions';

import { Container } from '../../GlobalStyle';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsActions.getProductsRequest());
  }, [])

  return (
    <Container>
      <Showcase />
    </Container>
  )
};

export default Home;