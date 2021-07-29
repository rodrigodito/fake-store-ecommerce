import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { cleanCart } from '../../store/modules/cart/actions';
import CheckoutInfos from '../../components/Checkout/Infos';
import CheckoutProducts from '../../components/Checkout/Products';

import { ButtonDefault, ContainerWhite, SectionTitle } from '../../assets/styles/GlobalStyle';
import { CheckoutMainInfos } from './style';

function Checkout() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleCloseOrder = () => {
    dispatch(cleanCart());
    history.push('/pedido-finalizado');
  }

  return (
    <ContainerWhite>
      <SectionTitle>
        Checkout
      </SectionTitle>
      <CheckoutMainInfos>
        <CheckoutProducts />
        <CheckoutInfos />
      </CheckoutMainInfos>
      <ButtonDefault onClick={handleCloseOrder}>
        Finalizar Pedido
      </ButtonDefault>
    </ContainerWhite>
  )
}

export default Checkout;