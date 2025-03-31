import { AuthProvider, useAuth } from "@/providers/AuthProviders";
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "react-native";


const AuthGate = () => {
    const { user } = useAuth();
    if(user === null) {
        return <Redirect href='/(auth)/login' />
    }
    return <Redirect href='/(tabs)' />
}

const StackScreen = () => {
    return (
        <>
            <StatusBar hidden={false} />
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{
                        headerShown: false,
                        title: 'Root Index'
                    }}
                />
                <Stack.Screen
                    name="(auth)"
                    options={{
                        headerShown: false,
                        title: 'Login'
                    }}
                />
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                        title: 'Back'
                    }}
                />
                <Stack.Screen
                    name="movies/[id]"
                    options={{
                        headerShown: false,
                        title: 'Movie Details'
                    }}
                />
            </Stack>
        </>
    );
}

export default function RootLayout() {
    return (
        <AuthProvider>
            <AuthGate />
            <StackScreen />
        </AuthProvider>
    );
}
