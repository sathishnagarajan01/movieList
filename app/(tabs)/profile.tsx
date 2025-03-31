import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from '@/providers/AuthProviders';
import { router } from "expo-router";

const Profile = () => {
    const {user, logout } = useAuth();
    const handleLogout = async () => {
        await logout();
        router.replace('/(auth)/login');
    }

    return (
        <View>
            <Text>Profile</Text>
            <Text style={{color: '#000', marginTop: 50}}>Welcome, {user}!</Text>
            <Button color='#000' title="Logout" onPress={handleLogout} />
        </View>
    );
}

const styles = StyleSheet.create({});

export default Profile;