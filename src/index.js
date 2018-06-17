import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Main from './Main';
import Login from './Login';
import { BrowserRouter , Route } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path ="/" component={Login} />
            <Route path ="/dashboard" component={Main} />
        </div>
    </BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();
