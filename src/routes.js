
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout'
import Person from './containers/Person'

const AppRoutes = () =>
<Layout>
    <Switch>
        <Route exact path="/" component={Person} />
        <Redirect to="/" />
    </Switch>
</Layout>

export default AppRoutes;
