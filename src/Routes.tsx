import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import SearchPage from './Pages/SearchPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/courses/all" component={SearchPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;