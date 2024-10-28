import { Link } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function Page() {
    return <SafeAreaView>
        <Text>Home</Text>
        <Link href={'/page2'}>Go Page 2</Link>
    </SafeAreaView>
}