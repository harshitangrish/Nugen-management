import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './Pages/Dashboard';
import Login from './Login';
import Expenditure from './Pages/Expenditure';
import Admission from './Pages/Admission';
import { BrowserRouter , Route } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path ="/" component={Login} />
            <Route path ="/dashboard" component={Dashboard} />
            <Route path="/Expenditure" component={Expenditure}/>
            <Route path="/Admission" component={Admission}/>
        </div>
    </BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();
