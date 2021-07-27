import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Includes/Header";
import Footer from "./components/Includes/Footer";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import Fees from "./Screens/Fees";
import Features from "./Screens/Features";
import Wallet from "./Screens/Wallet";
import BuyCrptoCard from "./Screens/BuyCrptoCard";
import AccountActivation from "./Screens/AccountActivation";
import LoginAuthentication from "./Screens/LoginAuthentication";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
      <Router>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={Register} />
          <Route path="/activation/:email">
              <AccountActivation />
          </Route>
        <Route path="/authentication/:email" component={LoginAuthentication} />
        <Route path="/login" component={Login} />
        <Route path="/fees" component={Fees} />
        <Route path="/features" component={Features} />
        <Route path="/wallet" component={Wallet} />
        <Route path="/buy-crypto-card" component={BuyCrptoCard} />
        <Footer />
      </Router>
      </Provider>
    </>
  );
}

export default App;
