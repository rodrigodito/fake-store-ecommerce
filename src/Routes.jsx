import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import ThankyouPage from './pages/ThankyouPage';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/produto/:id" exact component={ProductDetail} />
      <Route path="/checkout" exact component={Checkout}/>
      <Route path="/pedido-finalizado" exact component={ThankyouPage}/>
    </Switch>
  )
}

export default Routes;