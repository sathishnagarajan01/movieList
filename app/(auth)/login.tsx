import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { AuthService } from '../../services/AuthService';
import { Redirect, router } from "expo-router";
import { useAuth } from '@/providers/AuthProviders';
import { useEffect, useState } from "react";

const Login = () => {
    const { user, login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(user) {
            router.replace('/(tabs)');
        }
    }, []);

    const handleLogin = async () => {
        console.log({username, password})
        if (username === "Sathish" && password === "passwd") {
            await login(username);
            router.replace('/(tabs)');
        } else {
            alert("Invalid credentials!");
        }
    }
    return (
        <View style={styles.wrap}>
            <Text>Login</Text>
                <TextInput placeholder="Username" onChangeText={setUsername} />
                <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
                <Button title="Login" onPress={handleLogin} />
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Login;