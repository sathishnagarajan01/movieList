import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
    return (
        <>
            <StatusBar hidden={false} />
            <Stack>
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
