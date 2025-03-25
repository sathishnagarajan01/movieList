import { icons } from "@/constants/icons";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
    placeholder: string;
    onPress?: () => void;
    value?: string;
    onChangeText?: (text: string) => void;
}

const SearchBox = ({placeholder, onPress, value, onChangeText}: Props) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.searchIcon}
                source={icons.search}
                resizeMode="contain"
                tintColor='#ab8bff'
            />
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor='#a8b5db'
                style={styles.textBox}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0f0d23',
        borderRadius: 100,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 16,
        paddingBottom: 16
    },
    searchIcon: {
        width: 20,
        height: 20
    },
    textBox: {
        flex: 1,
        marginLeft: 10,
        color: '#ffffff'
    }
});

export default SearchBox;