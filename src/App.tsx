import React, { useMemo } from 'react';
import { ApolloProvider } from '@apollo/client'
import client from './services/apolo-client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './screens/home/Home.screen';
import Productscreen from './screens/product/Product.screen';
import './app.style.css'
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { toggleOverLay } from './redux/slices/cartOverLay.slice';

function App() {
  const { openOverLay } = useAppSelector(state => state.overLay)
  const dispatch = useAppDispatch()
  return (
    <ApolloProvider client={client} >
      <Header />

      <div className='body__container' >
        {(openOverLay) && <div className='modal__'
          onClick={() => dispatch(toggleOverLay())} ></div>}
        <Router>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/product/:productId"} component={Productscreen} />
            <Route exact path={"/cart"} component={() => <div>this cart</div>} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>

  );
}

export default App;
