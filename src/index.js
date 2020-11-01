import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import TodoApp from './TodoApp'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css'; 

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <TodoApp />
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
