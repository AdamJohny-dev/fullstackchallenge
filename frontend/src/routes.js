import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';


import Form from './Pages/Form';

function Routes(){
    return (
        <BrowserRouter>
            
            <Route component={Form} path="/cadastro" />
        </BrowserRouter>
    )
}

export default Routes;
