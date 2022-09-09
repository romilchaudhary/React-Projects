import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import Users from "./pages/Users";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/products/:prodcutId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
