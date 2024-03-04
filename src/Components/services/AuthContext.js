// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {

        if (username === 'trainee' && password === 'traineePassword') {
            setUser({ username, role: 'trainee' });
        } else if (username === 'admin' && password === 'adminPassword') {
            setUser({ username, role: 'admin' });
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
