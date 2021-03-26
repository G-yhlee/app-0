import React from 'react';
import ReactDom from 'react-dom';
import App from './app'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'


ReactDom
// .render(<h1>i am react app!</h1>,document.getElementById('electronChat'))
.render(<App />,document.getElementById('app'))
