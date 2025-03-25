import { Tabs } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { images } from '@/constants/images';
import { icons } from "@/constants/icons";

const TabIcon = ({focused, icon, title}: any) => {
    if(focused) {
        return (
            <ImageBackground
                style={styles.iconBg}
                source={images.highlight}
            >
                <Image
                    source={icon}
                    tintColor='#151312'
                />
                <Text style={styles.iconText}>{title}</Text>
            </ImageBackground>
        );
    } else {
        return (
            <View style={styles.unFocusContainer}>
                <Image
                    source={icon}
                    tintColor='#A8B5DB'
                />
            </View>
        );
    }
}

const tabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarIconStyle: {
                    width: '100%',
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarStyle: {
                    backgroundColor: '#0F0D23',
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom:16,
                    height: 50,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '#0F0D23'
                }
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                            title='Home'
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.search}
                            title='Search'
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='saved'
                options={{
                    title: 'Saved',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.save}
                            title='Saved'
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.person}
                            title='Profile'
                        />
                    )
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    iconBg: {
        flex: 1,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 54,
        minWidth: 112,
        borderRadius: 100,
        overflow: 'hidden'
    },
    iconText: {
        color: '#151312',
        fontSize: 16,
        fontWeight: 500,
        marginLeft: 5
    },
    unFocusContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    }
});

export default tabsLayout;