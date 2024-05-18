import { createRoot } from 'react-dom/client';

// third party
import { Provider } from 'react-redux';

// project imports
import App from './App';
// import  store from './app/store';
import {store} from '@store';

// style + assets
import '@assets/scss/style.scss';
import 'react-perfect-scrollbar/dist/css/styles.min.css'
import config from './config';

// ==============================|| REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
      <App basename={config.basename}/>
  </Provider>
);
