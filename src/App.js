import './css/main.css';
import './css/base.css';
import './css/grid.css';
import './css/responsive.css';
import './App.css';
import './css/style.css';
import Footer from './components/footer/footer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import ProductIndex from './components/productIndex';
import Login from './components/login/login';
import Register from './components/register/register';
import Cart from './components/cart/cart';

function App() {
  return (
    <Router>
      <div className="web">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={ProductIndex} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
