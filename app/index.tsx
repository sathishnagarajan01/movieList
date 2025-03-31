import { Text, View } from "react-native";
import { AuthService } from '../services/AuthService';
import { Redirect } from "expo-router";

const RootIndex = () => {
    return <>
        {AuthService().isLoggedIn() ? <Redirect href='/(tabs)' /> : <Redirect href='/(auth)/login' />}
    </>
}

export default RootIndex;