import { useLocalSearchParams } from "expo-router"
import { SafeAreaView, Text, View } from "react-native";
import WebView from "react-native-webview";

export default function Page() {
    const { vid } = useLocalSearchParams();
    return <SafeAreaView style={{flex:1}}>
        <View style={{ width: '100%', aspectRatio: 16/9}}>
            <WebView
                source={{ uri: 'https://www.youtube.com/embed/${vid}'}}
                style={{
                    flex: 1,
                }}
            />
        </View>
    </SafeAreaView>
}