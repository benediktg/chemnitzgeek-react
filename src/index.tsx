import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'mini.css';

ReactDOM.render(
  <App />,
  document.getElementById('container') as HTMLElement
);
registerServiceWorker();
