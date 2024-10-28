import { Link } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function Page() {
    return <SafeAreaView>
        <Text>Page 2</Text>
        <Link href={'/'}>Back to home</Link>
    </SafeAreaView>
}