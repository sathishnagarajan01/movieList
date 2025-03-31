import { useState } from "react";

export const AuthService = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const login = () => {
        setIsAuthenticated(true);
    }

    const isLoggedIn = () => {
        return isAuthenticated;
    }

    const logout = (): void => {
        setIsAuthenticated(false);
    }

    return {
        login, logout, isLoggedIn
    }
}