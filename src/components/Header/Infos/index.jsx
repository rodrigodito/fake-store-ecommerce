import Cart from '../Cart';

import { 
  BoxInfo, 
  TopInfo,
} from './style';

import PhoneIcon from '../../../assets/images/icons/phone.svg';
import ShippingIcon from '../../../assets/images/icons/truck.svg';

function Infos(){
  return(
    <TopInfo>
      <BoxInfo>
        <img src={PhoneIcon} alt="Ícone telefone"/>
        (11) 99123-4567
      </BoxInfo>
      <BoxInfo>
        <img src={ShippingIcon} alt="Ícone entrega grátis"/>
        Entrega Grátis
      </BoxInfo>
      <Cart />
    </TopInfo>
  )
}

export default Infos;