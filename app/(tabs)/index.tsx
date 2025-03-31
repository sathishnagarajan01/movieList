import {ActivityIndicator, Button, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Link } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBox from "@/components/serachBox";
import { useRouter } from 'expo-router';
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/movieApi";
import MovieCard from "@/components/movieCard";
import { getTrendingMovie } from "@/services/appwrite";
import TrendingCard from "@/components/trendingCard";

export default function Index() {
    const router = useRouter();

    const {
        data: trendingMovies,
        loading: trendingLoading,
        error: trendingError 
    } = useFetch(getTrendingMovie);

    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError 
    } = useFetch(() => fetchMovies({query: ''}));
    
    /*const getHeader = () => {
        return <Text>{'My Title'}</Text>;
    };

    const getFooter = () => {
        if (moviesLoading) {
            return null;
        }
        return <Text>{'Loading...'}</Text>;
    };*/

    return (
        <View style={styles.container}>
            <StatusBar style='light'/>
            <Image
                style={styles.bgImg}
                source={images.bg}
            />
            <ScrollView 
                style={styles.firstList} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    minHeight: '100%',
                    paddingBottom: 10
                }}
            >
                <Image style={styles.logo} source={icons.logo}/>
                {
                    moviesLoading || trendingLoading ? (
                        <ActivityIndicator
                            size='large'
                            color='#0000ff'
                            style={{marginTop:10, alignSelf: 'center'}}
                        />
                    ) : moviesError || trendingError ? (
                        <Text>Error: {moviesError?.message || trendingError?.message}</Text>
                    ) : (
                        <View style={styles.searchBox}>
                            <SearchBox
                                onPress={() => router.push('/search')}
                                placeholder='Search for a movie'
                            />
                            {trendingMovies && (
                                <View style={styles.trendingWrap}>
                                    <Text style={styles.trendingText}>Trending Movies</Text>
                                    <FlatList
                                        style={{
                                            marginBottom: 16,
                                            marginTop: 12,
                                        }}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        ItemSeparatorComponent={() => <View style={{width:16}}></View>}
                                        data={trendingMovies}
                                        renderItem={({item, index}) => (
                                            <TrendingCard movie={item} index={index} />
                                        )}
                                        keyExtractor={(item) => item.movie_id.toString()}
                                        scrollEnabled={true}
                                    />
                                </View>
                            )}
                            <>
                                <Text style={styles.trendingText}>Latest Movies</Text>
                            </>
                            <FlatList
                                data={movies}
                                renderItem={({item}) => (
                                    <MovieCard
                                        {...item}
                                    />
                                )}
                                keyExtractor={(item) => item.id.toString()}
                                numColumns={3}
                                columnWrapperStyle={{
                                    justifyContent: 'flex-start',
                                    gap: 20,
                                    paddingRight: 5,
                                    marginBottom: 10
                                }}
                                style={{
                                    marginTop: 8,
                                    paddingBottom: 128
                                }}
                                scrollEnabled={false}
                                /*ListHeaderComponent={getHeader}
                                ListFooterComponent={getFooter}*/
                            />
                        </View>
                    )
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    bgImg: {
        position: 'absolute',
        width: '100%',
        zIndex: 0
    },
    firstList: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    logo: {
        width: 48,
        height: 40,
        marginTop: 80,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    searchBox: {
        flex: 1,
        marginTop: 20
    },
    trendingWrap: {
        marginTop: 40,
    },
    trendingText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 600,
        marginTop: 20,
        marginBottom: 12
    }
});
