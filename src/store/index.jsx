import { createStore } from 'redux';
import reducer from './reducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

export const store = createStore(reducer);
export const persister = 'baby-store';

// export { store, persister };
