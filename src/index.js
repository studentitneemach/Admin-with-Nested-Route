import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Store from './Store/Store';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={Store} >
            <App />
        </Provider>);


serviceWorker.unregister();



