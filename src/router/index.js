import Auth from "../Pages/Auth";
import Home from "../Pages/Home";

export const publicRoutes = [{ path: "/auth", component: Auth, exact: true }];

export const privateRoutes = [{ path: "/home", component: Home, exact: true }];
