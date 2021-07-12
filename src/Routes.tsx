import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import CoursePage from './Pages/CoursePage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/courses/all" component={CoursePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;