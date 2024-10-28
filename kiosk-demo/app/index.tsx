import { Link, router } from "expo-router";
import { SafeAreaView, Text, View, TouchableOpacity, } from "react-native";

export default function Page() {
    // View로 하면 화면의 최상단에 보여서 잘림 
    // SafeArea : 안전구역, Text는 노치 영역 피해 컨텐츠 표시함.
    return <SafeAreaView style={{ 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }}> 
        <TouchableOpacity onPress={()=>{
            // dynamic navigate, programable navigate
            router.push('/category');
        }} style={{ width: '100%'}}>
            <View style={{ 
                width: '100%', height: '100%', 
                justifyContent: 'center', alignItems: 'center'
            }}>
                 <Text style={{ fontSize: 20 }}>주문하시려면 화면을 터치하세요</Text>
            </View>
        </TouchableOpacity>
    </SafeAreaView>
}