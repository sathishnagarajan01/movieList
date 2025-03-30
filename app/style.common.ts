import { useFonts } from 'expo-font';
import { Raleway_200ExtraLight, Raleway_400Regular, Raleway_700Bold } from '@expo-google-fonts/raleway';

export default function customFont() {
    const [loaded, error] = useFonts({
        raleway: Raleway_700Bold
    });
}