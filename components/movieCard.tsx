import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


// {id, title, poster, rating, year}: MovieFakeApi
// {id, title, poster_path, vote_average , release_date}: MovieTmdb

const MovieCardTmdb = ({id, title, poster_path, vote_average , release_date}: MovieTmdb) => {
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity style={styles.card}>
                <Image
                    source={{
                        uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://fakeimg.pl/220x310/afdecc'
                    }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                <View style={styles.content}>
                    <Image
                        source={icons.star}
                        style={styles.star}
                    />
                    <Text style={styles.ratings}>{Math.round(vote_average/2)}</Text>
                </View>
                <View style={styles.release}>
                    <Text style={styles.releaseText}>
                        {new Date(release_date).getFullYear()}
                    </Text>
                    <Text style={styles.platform}>
                        Movie
                    </Text>
                </View>
            </TouchableOpacity>
        </Link>
    );
}

const MovieCardFake = ({id, title, poster, rating, year}: MovieFakeApi) => {
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity style={styles.card}>
                <Image
                    source={{
                        uri: poster ? poster : 'https://fakeimg.pl/220x310/afdecc'
                    }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                <View style={styles.content}>
                    <Image
                        source={icons.star}
                        style={styles.star}
                    />
                    <Text style={styles.ratings}>{Math.round(rating/2)}</Text>
                </View>
                <View style={styles.release}>
                    <Text style={styles.releaseText}>
                        {year}
                    </Text>
                    <Text style={styles.platform}>
                        Movie
                    </Text>
                </View>
            </TouchableOpacity>
        </Link>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '30%'
    },
    image: {
        width: '100%',
        height: 208,
        borderRadius: 8
    },
    title: {
        color: '#fff',
        marginTop: 8,
        fontWeight: 600
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        columnGap: 4
    },
    star: {
        width: 16
    },
    ratings: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 600,
        textTransform: 'uppercase'
    },
    release: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    releaseText: {
        fontSize: 12,
        color: '#9ca4ab',
        fontWeight: 500,
        marginTop: 4
    },
    platform: {
        fontSize: 12,
        fontWeight: 500,
        color: '#9ca4ab',
        textTransform: 'uppercase'
    }
});

export default MovieCardTmdb;