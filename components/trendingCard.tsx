import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaskedView from '@react-native-masked-view/masked-view';
import { images } from "@/constants/images";

const TrendingCard = ({movie: {movie_id, title, poster_url}, index}: TrendingCardProps) => {
    return (
        <Link href={`/movies/${movie_id}`} asChild>
            <TouchableOpacity style={styles.cardTouch}>
                <Image
                    source={{uri: poster_url}}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.numberTrend}>
                    <MaskedView maskElement={
                        <Text style={{color: '#fff', fontSize: 60, fontWeight: 'bold'}}>{index+1}</Text>
                    }>
                        <Image style={{width: 56, height: 67}} source={images.rankingGradient} resizeMode="cover"/>
                    </MaskedView>
                </View>
                <Text numberOfLines={2} style={styles.title}>
                    {title}
                </Text>
            </TouchableOpacity>
        </Link>
    );
}

const styles = StyleSheet.create({
    cardTouch: {
        width: 128,
        position: 'relative',
        //paddingLeft: 20
    },
    image: {
        width: 128,
        height: 192,
        borderRadius: 12
    },
    numberTrend: {
        position: 'absolute',
        bottom: 46,
        left: -14,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: '99px'
    },
    title: {
        fontSize: 16,
        color: '#fff',
        marginTop: 12,
        fontWeight: 600
    }
});

export default TrendingCard;