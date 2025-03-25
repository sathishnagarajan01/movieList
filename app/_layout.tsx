import { Stack } from "expo-router";

export default function RootLayout() {
    return (
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
                    headerShown: true,
                    title: 'Movie Details'
                }}
            />
        </Stack>
    );
}
