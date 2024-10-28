import { Link, router } from "expo-router";
import { ListItemType } from "@/types";
import { SafeAreaView, FlatList ,View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const LIST: ListItemType[] = [
    {
        key: '1955',
        name: '1955 버거',
        link: 'burger-1955'
    },
    {
        key: 'big-mc',
        name: '빅맥',
        link: 'big-mc'
    },
    {
        key: 'btd',
        name: '베이컨 토마토 디럭스 세트',
        link: ''
    },
]

export default function Page() {
    return <SafeAreaView>
        <FlatList
            data={LIST}
            renderItem={Item}
            numColumns={2}
            style={{padding: 16}}
        />
        <View style={{ padding: 12, flexDirection: 'row', gap: 12}} >
            <TouchableOpacity style={ [ styles.button, {marginBottom: 0, flex: 1} ]} onPress={()=>{
                router.push('/category');
            }}>
                <Text style={ styles.label }>이전 메뉴</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ [ styles.button, {marginBottom: 0, flex: 1} ]} onPress={()=>{
                router.push('/');
            }}>
                <Text style={ styles.label }>처음으로</Text>
            </TouchableOpacity>
        </View>
        
    </SafeAreaView>
}

function Item( {item}:any) {
    const itemWidth = Dimensions.get('window').width /2 -16 -8;
    return <View style= {{ aspectRatio: 1, width: itemWidth, backgroundColor: '#ddd', marginBottom: 16, marginRight: 16,
        justifyContent: 'center', alignItems: 'center' 
        }}>
        <Text>{item.name}</Text>
    </View>
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        padding: 16,
        margin: 5,
    },
    label: {
        fontWeight: 'normal',
        fontSize: 30,
    },
});