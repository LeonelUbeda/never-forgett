import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store, persistor } from './store/index';
import MainLayout from './components/layout/MainLayout/MainLayout';
import GroupPage from './pages/payments/Group';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Payments from './pages/payments/Payments';
import FullScreenLoading from './components/payments/FullScreenLoading';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={GroupPage} exact path="/payments/groups" />
          <Route component={Payments} exact path="/payments" />
          <Route component={Settings} exact path="/settings" />
        </Switch>
      </MainLayout>
    </Router>
  );
};

const Main = () => (
  <Provider store={store}>
    <PersistGate loading={<FullScreenLoading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

export default Main;
