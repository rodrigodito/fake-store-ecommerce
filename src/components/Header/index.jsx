import { NavLink } from 'react-router-dom';
import Infos from './Infos';
import Menu from './Menu';
import Search from './Search';

import { 
  Header as HeaderBox, 
  HeaderContainer, 
  HeaderContent,
  HeaderTitleLogo
} from './style';

function Header() {
  return (
    <HeaderBox>
      <HeaderContainer>
        <NavLink to='/'>
          <HeaderTitleLogo>
            Challenge Fake Store
          </HeaderTitleLogo>
        </NavLink>
        <HeaderContent>
          <Infos />
          <Menu />
          <Search />
        </HeaderContent>
      </HeaderContainer>
    </HeaderBox>
  );
};

export default Header;