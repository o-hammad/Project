import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import NavBar from './components/NavBar/NavBar';

import MainPage from './components/MainPage/MainPage';
import LoginForm from './components/SessionForms/LoginForm';
import SignupForm from './components/SessionForms/SignupForm';

import { getCurrentUser } from './store/session';
import CustomerRFQ from './components/CustomerRFQ/CustomerRFQ';
import Dashboard from './components/Dashboard/Dashboard';
import ProsecRFQ from './components/ProsecRFQ/ProsecRFQ';
import VendorQuote from './components/VendorQuote/VendorQuote';
import ProsecQuote from './components/ProsecQuote/ProsecQuote';
import CustomerPO from './components/CustomerPO/CustomerPO';
import ProsecPO from './components/ProsecPO/ProsecPO';
import ProsecInvoice from './components/ProsecInvoice/ProsecInvoice';
import VendorInvoice from './components/VendorInvoice/VendorInvoice';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return loaded && (
    <>
      <NavBar />
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginForm} />
        <AuthRoute exact path="/signup" component={SignupForm} />

        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/customerrfqs" component={CustomerRFQ} />
        <ProtectedRoute exact path="/prosecrfqs" component={ProsecRFQ} />
        <ProtectedRoute exact path="/vendorquotes" component={VendorQuote} />
        <ProtectedRoute exact path="/prosecquotes" component={ProsecQuote} />
        <ProtectedRoute exact path="/customerpos" component={CustomerPO} />
        <ProtectedRoute exact path="/prosecpos" component={ProsecPO} />
        <ProtectedRoute exact path="/prosecinvoices" component={ProsecInvoice} />
        <ProtectedRoute exact path="/vendorinvoices" component={VendorInvoice} />
      </Switch>
    </>
  );
}

export default App;
