import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import SearchTermContextProvider from "./context";
import CoursePage from './Pages/CoursePage';

const Routes = () => {
    return (
        <BrowserRouter>
            <SearchTermContextProvider>
                <Header />
                <Switch>
                    <Route path="/courses/all" component={CoursePage} />
                </Switch>
            </SearchTermContextProvider>
        </BrowserRouter>
    )
}

export default Routes;