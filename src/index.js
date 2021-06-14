import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
 import { Provider } from 'react-redux';
 import { store } from "./redux/store";
import { SnackbarProvider } from 'notistack';
ReactDOM.render((
  <BrowserRouter>
   <SnackbarProvider maxSnack={3}>

   <Provider store={store}> 
    <App />
     </Provider> 
    </SnackbarProvider>

  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
