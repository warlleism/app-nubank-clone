import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FirstBlock from "../firstBlock";
import SecondBlock from "../secondblock";

export default function Home() {
    return (
        <>
            <StatusBar backgroundColor={"#8734c7"} />
            <ScrollView scrollEventThrottle={16}>
                <View style={conainerTop.container}>
                    <View style={conainerTop.containerIcons}>
                        <TouchableOpacity onPress={console.log('teste')}>
                            <Icon name="user" size={23} style={{ color: '#fff', backgroundColor: '#a031df', borderRadius: 23, padding: 10, marginTop: -14 }} />
                        </TouchableOpacity>
                        <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '60%' }} >
                            <TouchableOpacity onPress={console.log('teste')}>
                                <Icon name="eye" size={23} style={{ marginRight: '16%', color: '#fff' }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={console.log('teste')}>
                                <Icon name="questioncircleo" size={23} style={{ marginRight: '16%', color: '#fff' }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={console.log('teste')}>
                                <Icon name="adduser" size={23} style={{ color: '#fff', marginRight: '16%' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: '#fff', marginTop: '-10%', marginLeft: '5%', fontSize: 20 }}>Olá, Warllei</Text>
                    </View>
                </View>
                <FirstBlock />
                <SecondBlock />
            </ScrollView>
        </>
    )
}

const conainerTop = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#8734c7',
        height: 130,
    },
    containerIcons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 13,
        padding: 20
    },

});

