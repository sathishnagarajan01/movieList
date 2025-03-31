import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';

interface AuthContextType {
    user: string | null,
    login: (username: string) => Promise<void>,
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        const loadUser = async () => {
            const storedUser = await SecureStore.getItemAsync('userToken');
            if(storedUser) {
                setUser(storedUser);
            }
        };
        loadUser();
    },[]);

    const login = async (username: string) => {
        await SecureStore.setItemAsync('userToken', username);
        setUser(username);
    };

    const logout = async () => {
        await SecureStore.deleteItemAsync('userToken');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}