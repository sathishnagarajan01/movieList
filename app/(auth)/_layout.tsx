import { Stack } from "expo-router";

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="login" />
        </Stack>
    );
}

export default AuthLayout;