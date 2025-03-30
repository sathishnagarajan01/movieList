import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { images } from "@/constants/images";
import MovieCard from "@/components/movieCard";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/movieApi";
import SearchBox from "@/components/serachBox";
import { icons } from "@/constants/icons";
import { useEffect, useState } from "react";
import { updateSearchCount } from "@/services/appwrite";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError,
        reset,
        refetch: loadMovies
    } = useFetch(() => fetchMovies({
        query: searchQuery
    }), true);

    useEffect(() => {
        const timeoutId = setTimeout(async () => {
            if(searchQuery.trim()) {
                await loadMovies();
            } else {
                reset();
            }
        },1000);
        return () => clearTimeout(timeoutId);
    }, [searchQuery]);

    useEffect(() => {
        if(movies?.length > 0 && movies?.[0]) {
            updateSearchCount(searchQuery, movies[0]);
        }
    }, [movies]);

    return (
        <View style={styles.container}>
            <StatusBar style='light'/>
            <Image
                style={styles.bgImg}
                source={images.bg}
            />
            <FlatList
                data={movies}
                renderItem={({item}) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: 'flex-start',
                    gap: 16,
                    marginVertical: 16
                }}
                contentContainerStyle={{
                    paddingBottom: 100
                }}
                style={{
                    marginTop: 8,
                    paddingBottom: 128
                }}
                scrollEnabled={true}
                ListHeaderComponent={
                    <>
                        <View style={styles.searchHeader}>
                            <Image source={icons.logo} style={styles.logo} />
                        </View>
                        <View style={styles.ss}>
                            <SearchBox
                                placeholder='Search movies...'
                                value={searchQuery}
                                onChangeText={(text: string) => setSearchQuery(text)}
                            />
                        </View>
                        {moviesLoading && (
                            <ActivityIndicator size='large' color='#0000ff' style={{marginTop: 12, marginBottom: 12}} />
                        )}
                        {moviesError && (
                            <Text style={{color: '#fef2f2', paddingLeft: 20, paddingRight: 20, marginHorizontal: 12}}>
                                Error: {moviesError.message}
                            </Text>
                        )}
                        {!moviesLoading && !moviesError && searchQuery.trim() && movies?.length > 0 && (
                            <Text style={{fontSize: 20, lineHeight: 28, color: '#fff', fontWeight: 'bold'}}>
                                Search Result for {' '}
                                <Text style={{color: '#ab8bff'}}>{searchQuery}</Text>
                            </Text>
                        )}
                    </>
                }
                ListEmptyComponent={
                    (!moviesLoading && !moviesError) ? (
                        <View style={{marginTop: 80, paddingHorizontal: 20}}>
                            <Text style={{textAlign: 'center', color: '#f9fafb'}}>{searchQuery.trim() ? 'No Movies Found' : 'Search For a Movie'}</Text>
                        </View>
                    ) : null
                }
            />
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
        paddingRight: 20,
    },
    logo: {
        width: 48,
        height: 40,
    },
    searchHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    },
    searchWrap: {
        marginTop: 80,
    },
    ss: {
        marginTop: 20,
        marginBottom: 20
    }
});

export default Search;