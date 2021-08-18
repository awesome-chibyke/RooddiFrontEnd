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
import Dashboard from "./Screens/Dashboard";
import ForgotPassword from "./Screens/ForgotPassword";
import ChangePassword from "./Screens/ChangePassword";
import TwoFactorAuthForPasswordChange from "./Screens/TwoFactorAuthForPasswordChange";
import ConfirmPasswordAuth from "./Screens/ConfirmPasswordAuth";
import P2P from  "./Screens/P2P";
import GoogleAuth from "./Screens/GoogleAuth"
import TwoFactor from "./Screens/TwoFactor";
import FinaliseTwoFactor from "./Screens/FinaliseTwoFactor";


import { Provider } from "react-redux";
import {store, persistedStore} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistedStore} >
              <Router>
                  <Header />
                  <Route path="/" component={Home} exact />
                  <Route path="/signup" component={Register} />
                  <Route path="/activation/:email">
                      <AccountActivation />
                  </Route>
                  <Route path="/forgotpassword_two_factor">
                      <TwoFactorAuthForPasswordChange />
                  </Route>
                  <Route path="/confirm_auth_token/:email">
                      <ConfirmPasswordAuth />
                  </Route>
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/forgotpassword" >
                      <ForgotPassword />
                  </Route>
                  <Route path="/change_password">
                      <ChangePassword />
                  </Route>
                  <Route path="/authentication/:email" component={LoginAuthentication} />
                  <Route path="/two_factor_authentication/:email" component={GoogleAuth} />
                  <Route path="/login" component={Login} />
                  <Route path="/fees" component={Fees} />
                  <Route path="/features" component={Features} />
                  <Route path="/wallet" component={Wallet} />
                  <Route path="/buy-crypto-card" component={BuyCrptoCard} />
                  <Route path="/buy-sell-p2p" component={P2P} />
                  <Route path="/two_factor" component={TwoFactor} />
                  <Route path="/two_factor_finalize" component={FinaliseTwoFactor} />
                  <Footer />
              </Router>
          </PersistGate>
      </Provider>
    </>
  );
}

export default App;
