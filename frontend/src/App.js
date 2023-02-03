import { useEffect } from "react";
import WebFont from "webfontloader";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/Products/ProductDetails";

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat", "Roboto"],
      },
    });
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
};

export default App;
