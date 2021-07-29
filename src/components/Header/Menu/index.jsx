import { HeaderMenu } from './style';
import { Typography } from '../../Typography/style'

function Menu() {
  return(
    <HeaderMenu>
      <li>
        <Typography as="a" href="#" color="white">
          Promoções
        </Typography>
      </li>
      <li>
        <Typography as="a" href="#" color="white">
          Quem Somos
        </Typography>
      </li>
      <li>
        <Typography as="a" href="#" color="white">
          Política de entrega
        </Typography>
      </li>
      <li>
        <Typography as="a" href="#" color="white">
          FAQ
        </Typography>
      </li>
    </HeaderMenu>
  )
}

export default Menu;