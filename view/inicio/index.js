import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import CorpoTopo from "../corpoTopo";

export default function Inicio() {
    return (
        <>
            <View style={conainerTop.container}>
                <View style={conainerTop.containerIcons}>
                    <View>
                        <Icon name="user" size={23} style={{ color: '#fff', backgroundColor: '#8734c7', borderRadius: 23, padding: 10, marginTop: -14 }} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '60%' }} >
                        <Icon name="eye" size={23} style={{ marginRight: '16%', color: '#fff' }} />
                        <Icon name="questioncircleo" size={23} style={{ marginRight: '16%', color: '#fff' }} />
                        <Icon name="adduser" size={23} style={{ color: '#fff', marginRight: '16%' }} />
                    </View>
                </View>
                <View>
                    <Text style={{ color: '#fff', marginTop: '-10%', marginLeft: '5%', fontSize: 20 }}>Olá, Warllei</Text>
                </View>
            </View>
            <CorpoTopo />
        </>
    )
}

const conainerTop = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#9600c4',
        height: 150
    },
    containerIcons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        padding: 20
    },

});

