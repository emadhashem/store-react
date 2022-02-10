import React from 'react';
import { ApolloProvider } from '@apollo/client'
import client from './services/apolo-client';
import Test from './components/Test';


function App() {
  return (
    <ApolloProvider client={client} >
      <Test />
    </ApolloProvider>

  );
}

export default App;
