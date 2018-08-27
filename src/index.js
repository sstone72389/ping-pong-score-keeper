import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import 'materialize-css/dist/css/materialize.min.css';
// Importing the fetch polyfill allows cypress to intercept fetch api requests.
import 'whatwg-fetch';
// Change me if you prefer sass,scss, less. (Note you may need to update the build config)
import './index.css';
import { persistor, store } from './store';
import App from './components/App';
import Loading from './components/Loading';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor} >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// Hot Module Replacement
// if (module.hot) {
//   module.hot.accept();
// }
