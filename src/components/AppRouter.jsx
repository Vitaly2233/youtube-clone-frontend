import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router/index";

export default function AppRouter() {
    const { isAuth } = useContext(AuthContext);
    return isAuth ? (
        <Switch>
            {privateRoutes.map((route) => (
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            ))}
            <Redirect to="/home" />;
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map((route) => (
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            ))}
            <Redirect to="/auth" />
        </Switch>
    );
}
