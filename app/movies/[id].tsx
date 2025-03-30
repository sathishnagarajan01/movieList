import { icons } from "@/constants/icons";
import { findMovieById } from "@/services/movieApi";
import useFetch from "@/services/useFetch";
import { router, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
//import { StatusBar } from "expo-status-bar";


interface MovieInfoProps {
    lable: string,
    value?: string | number | null
}

const MovieInfo = ({lable, value}: MovieInfoProps) => (
    <View style={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 20
    }}>
        <Text style={{
            color: '#a8b5db',
            fontWeight: 400,
            fontSize: 12
        }}>{lable}</Text>
        <Text style={{
            color: '#d6c6ff',
            fontWeight: 700,
            fontSize: 12,
            marginTop: 8
        }}>{value || 'N/A'}</Text>
    </View>
)

const movieDetails = () => {
    const { id } = useLocalSearchParams();
    const { data: movie, loading } = useFetch(() => findMovieById(id as string));
    return (
        <View style={styles.wrap}>
            <StatusBar hidden={true} />
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 80
                }}
            >
                <View>
                    <Image
                        style={styles.image}
                        resizeMode="stretch"
                        source={{
                            uri: movie && movie.poster ? movie.poster : 'https://fakeimg.pl/220x310/afdecc'
                        }}
                    />
                </View>
                <View style={styles.titleWrap}>
                    <Text style={styles.titleText}>{movie?.title}</Text>
                    <View style={styles.yearWrap}>
                        <Text style={styles.yearText}>{movie?.year}</Text>
                        <Text style={styles.yearText}>{movie?.runtime}m</Text>
                    </View>
                    <View style={styles.ratingsWrap}>
                        <Image style={styles.ratingsImage} source={icons.star}/>
                        <Text style={styles.ratingsText}>{movie ? Math.round(movie?.rating) ?? 0 : 0}/10</Text>
                        <Text style={styles.yearText}>(1000 Votes)</Text>
                    </View>
                    <MovieInfo lable="Overview" value={movie?.plot} />
                    <MovieInfo lable="Genres" value={movie?.genre?.map((g) => g).join(' - ') || 'N/A'} />
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '50%'
                    }}>
                        <MovieInfo lable="Budget" value={(movie && ('$'+parseInt(movie?.boxOffice.split(' ')[0].split('$')[1])/2)+' million')}/>
                        <MovieInfo lable="Box Office" value={movie?.boxOffice}/>
                    </View>
                    <MovieInfo lable="Producstion Companies" value={movie?.production}/>
                </View>
            </ScrollView>
            <View style={{
                marginTop: 20,
                position: 'relative'
            }}>
                <TouchableOpacity style={{
                    position: 'absolute',
                    bottom: 30,
                    left: 0,
                    right: 0,
                    marginHorizontal: 20,
                    backgroundColor: '#ab8bff',
                    borderRadius: 8,
                    paddingVertical: 14,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 50
                }} onPress={router.back}>
                    <Image source={icons.arrow} style={{
                        width: 20,
                        height: 20,
                        marginRight: 4,
                        marginTop: 2,
                        transform: [
                            { perspective: 850 },
                            { translateX: 0 },
                            { rotate: '180deg'}
                        ],
                    }} tintColor='#fff'/>
                        <Text style={{
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: 12
                        }}>Go Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        backgroundColor: '#000',
        flex: 1
    },
    image: {
        width: '100%',
        height: 550
    },
    titleWrap: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 20,
        paddingHorizontal: 20
    },
    titleText: {
        color: '#fff',
        fontWeight: 600,
        fontSize: 16
    },
    yearWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 4,
        marginTop: 8,
    },
    yearText: {
        color: '#d6c6ff',
        fontSize: 12
    },
    ratingsWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#221f3d',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        columnGap: 4,
        marginTop: 10
    },
    ratingsImage: {
        width: 16
    },
    ratingsText: {
        color: '#fff',
        fontWeight: 600,
        fontSize: 12
    }
});

export default movieDetails;