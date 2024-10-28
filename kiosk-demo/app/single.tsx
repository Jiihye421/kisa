import { Link, router } from "expo-router";
import { ListItemType } from "@/types";
import { SafeAreaView, FlatList ,View, Text, TouchableOpacity, StyleSheet } from "react-native";

const LIST: ListItemType[] = [
    {
        key: '1955',
        name: '1955 버거',
        link: 'burger-1955'
        vid: 'g7EzMPH8Ir0'
    },
    {
        key: 'big-mc',
        name: '빅맥',
        link: 'big-mc'
        vid: 'm7G6fDMvUY8'
    },
]

export default function Page() {
    return <SafeAreaView> 
        <FlatList 
            data={LIST}
            renderItem={Item}
            style={{flex: 1}}
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

function Item( {item }:any) {
    return <View>
        <Link href={'/details/${item.vid}'}>
            <Text>{item.name}</Text>
        </Link>
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