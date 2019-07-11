import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function AppRouter () {
    return (
        <Router>
            <React.Fragment>
                <AppNav />
                <Switch>
                    <Route exact path="/" component={SearchPage} />
                    <Route exact path="/saved" component={SavedPage} />
                    <Route component={NotFound} />
                </Switch>
                <AppFooter />
            </React.Fragment>
        </Router>
    );
}

export default AppRouter;