import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { Provider } from 'react-redux';
import store from "./store";

//Apollo
import { ApolloProvider } from "react-apollo";
import { client } from "./data/client";

ReactDOM.render(
      <Provider store={store}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
