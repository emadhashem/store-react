import React, { useMemo } from 'react';
import { ApolloProvider } from '@apollo/client'
import client from './services/apolo-client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './screens/home/Home.screen';


function App() {

  return (
    <ApolloProvider client={client} >
      <Header />
      <div style={{ width: '95%', minHeight: ' 90vh', margin : 'auto' }} >
        
        <Router>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/product/:id"} component={() => <div>this product</div>} />
            <Route exact path={"/cart"} component={() => <div>this cart</div>} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>

  );
}

export default App;
