import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const movieDetails = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>Movie Details: {id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default movieDetails;