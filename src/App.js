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
import VerifyEmailForTwoFactorDeactivation from "./Screens/VerifyEmailForTwoFactorDeactivation";
import VerifyPhoneForTwoFactorDeactivation from "./Screens/VerifyPhoneForTwoFactorDeactivation";
import Profile from "./Screens/Profile";
import DeactivateTwoFactor from "./Screens/DeactivateTwoFactor"
import DisableTwofactorRequest from "./Screens/DisableTwofactorRequest";
import Successful from './Screens/Successful'
import PhoneVerify from './Screens/PhoneVerify'
import UploadID from "./Screens/UploadID";
import ValidatePhone from "./Screens/ValidatePhone";
import Completed from "./Screens/Completed";
import Admin from "./Screens/Admin";
import AdminUserEdit from "./Screens/AdminUserEdit";
import Roles from "./Screens/Roles";
import CreateRoles from "./Screens/CreateRoles";
import TypeOfUser from "./Screens/TypeOfUser";
import CreateTypeOfUser from "./Screens/CreateTypeOfUser";
import Priviledges from "./Screens/Priviledges";
import Settings from "./Screens/Settings"
import MainDashboard from "./Screens/Dashboard/MainDashboard";




import { Provider } from "react-redux";
import {store, persistedStore} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import CoinContext from "./Contexts/CoinContext";
import TestContext from "./Screens/TestContext";
import ContextPostGet from "./Contexts/ContextPostGet";
import TestPostContext from "./Screens/TestPostContext";
import Stepper from "./components/Includes/Stepper";
import ToolTipContext from "./Contexts/ToolTipContext";

function App() {
  return (
    <>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistedStore} >
              <ToolTipContext >
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
                  <Route path="/disable_two_factor">
                      <VerifyEmailForTwoFactorDeactivation />
                  </Route>

                  <Route path="/test_context">
                      <CoinContext >
                          <TestContext />
                      </CoinContext>
                  </Route>

                  <Route path="/test_data_context">
                      <ContextPostGet >
                          <TestPostContext />
                      </ContextPostGet>
                  </Route>

                  <Route path="/deactivate_two_factor_phone/:email">
                      <VerifyPhoneForTwoFactorDeactivation />
                  </Route>
                  <Route path="/stepper">
                      <Stepper />
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
                  <Route path="/profile" component={Profile} />
                  <Route path="/deactivate_twofactor" component={DeactivateTwoFactor} />
                  <Route path="/disable_two_factor_request" component={DisableTwofactorRequest} />
                  <Route path="/successful">
                      <Successful />
                  </Route>
                  <Route path="/phone_verify" component={PhoneVerify} />
                  <Route path="/upload_id" component={UploadID} />
                  <Route path="/validate_phone" component={ValidatePhone} />
                  <Route path="/completed" component={Completed} />
                  <Route path="/admin" component={Admin} />
                  <Route path="/edit-user/:unique_id" component={AdminUserEdit} />
                  <Route path="/roles" component={Roles} />
                  <Route path="/create-roles" component={CreateRoles} />
                  <Route path="/type-of-user" component={TypeOfUser} />
                  <Route path="/create-type-of-user" component={CreateTypeOfUser} />
                  <Route path="/priviledges" component={Priviledges} />
                  <Route path="/settings" component={Settings} />
                  <Route path="/main-dash" component={MainDashboard} />
                  <Footer />
              </Router>
              </ToolTipContext>
          </PersistGate>
      </Provider>
    </>
  );
}

export default App;
