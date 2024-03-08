import { createContext, useContext, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import api from "./api";
let AuthContext = createContext();

export function AuthProvider({ children }) {
    let [user, setUser] = useState();
    let navigate = useNavigate();
    let location = useLocation();
    let signin = async (values, actions) => {
        let response = await api.post(`/api/users/login`, values);
        let { data } = response.data;
        actions.resetForm();
        if (data?.user === null || data?.user === undefined) {
            setUser(null);
            navigate("/login", {replace: true, state:"Login Failed check username or password"});
        }
        else {
            setUser(data.user);
            let from = location.state?.from?.pathname || "/dashboard";
            navigate(from, {replace: true, state:"Login success"});
        }
    };

    let signout = () => {
        setUser(null);
        navigate("/");
    };

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}

export function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth?.user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}