import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Saved = () => {
    return (
        <View>
            <Text style={styles.text}>Saved</Text>
            <Link style={styles.text} href='/(auth)/login'>Login</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {top: 100, color: '#000'}
});

export default Saved;