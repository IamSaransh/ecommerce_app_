import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from './Routes'

const view = (
    <Router>
        <div>
            <Routes></Routes>
        </div>
    </Router>
)

ReactDOM.render(view , document.getElementById('root'));

