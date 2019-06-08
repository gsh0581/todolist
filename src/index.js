import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
//PWA progressive web application
//上线到https 协议的服务器，断网下仍可访问
//import * as serviceWorker from './serviceWorker';

// JSX语法 <App />
// 标签可以自定义。但必须以大写字母开头
ReactDOM.render(<TodoList />, document.getElementById('root'));

