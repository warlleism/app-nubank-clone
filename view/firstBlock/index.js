import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Telefone from "../../icones/smartphone.png"
import Pagar from "../../icones/barcode.png"
import Transferir from "../../icones/transferir.png"
import Depositar from "../../icones/depositar.png"
import Pix from "../../icones/pix.png"
import Cobrar from "../../icones/cobrar.png"
import Doacao from "../../icones/coracao.png"
import Global from "../../icones/global.png"
import Investir from "../../icones/investir.png"
import { useNavigation } from '@react-navigation/native';



export default function firstBlock() {
    const navigation = useNavigation();

    return (
        <>
            <View style={{ width: '100%', display: "flex", flexDirection: "column", alignItems: "center" }}>
                <View style={firstStyleContainer.containerCorpoTop}>
                    <View>
                        <View><Text style={firstStyleContainer.textoContent}>Conta</Text></View>
                        <View><Text style={firstStyleContainer.textoContent}>R$ 1829,80</Text></View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Conta')} >
                        <Icon name="right" size={14} style={{ color: 'black' }} />
                    </TouchableOpacity>
                </View>
                <ScrollView scrollEventThrottle={16}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ display: "flex", flexDirection: "row", marginTop: 40 }}>
                        <View style={firstStyleContainer.viewContentIcon}>
                            <TouchableOpacity onPress={console.log('teste')} style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                <Image source={Pix} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <Text style={firstStyleContainer.textoContentIcons}>Área Pix</Text>
                        </View>
                        <View style={firstStyleContainer.viewContentIcon}>
                            <TouchableOpacity onPress={console.log('teste')} style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                <Image source={Pagar} style={{ width: 30, height: 15, marginTop: 8 }} />
                            </TouchableOpacity>
                            <Text style={firstStyleContainer.textoContentIcons}>Pagar</Text>
                        </View>
                        <View style={firstStyleContainer.viewContentIcon}>
                            <TouchableOpacity onPress={console.log('teste')} style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                <Image source={Transferir} style={{ width: 33, height: 30 }} />
                            </TouchableOpacity>
                            <Text style={firstStyleContainer.textoContentIcons}>Transferir</Text>
                        </View>
                        <View style={firstStyleContainer.viewContentIcon}>
                            <TouchableOpacity onPress={console.log('teste')} style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                <Image source={Depositar} style={{ width: 35, height: 30 }} />
                            </TouchableOpacity>
                            <Text style={firstStyleContainer.textoContentIcons}>Depositar</Text>
                        </View>
                        <View style={firstStyleContainer.viewContentIcon}>
                            <TouchableOpacity onPress={console.log('teste')} style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                <Image source={Telefone} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <Text style={firstStyleContainer.textoContentIcons}>Recarga de celular</Text>
                        </View>
                        <View style={firstStyleContainer.viewContentIcon}>
                            <TouchableOpacity onPress={console.log('teste')} style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                <Image source={Cobrar} style={{ width: 42, height: 39 }} />
                            </TouchableOpacity>
                            <Text style={firstStyleContainer.textoContentIcons}>Cobrar</Text>
                        </View>
                        <View style={firstStyleContainer.viewContentIcon}>
                            <TouchableOpacity onPress={console.log('teste')} style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                <Image source={Doacao} style={{ width: 39, height: 34 }} />
                            </TouchableOpacity>
                            <Text style={firstStyleContainer.textoContentIcons}>Doação</Text>
                        </View>
                        <View style={firstStyleContainer.viewContentIcon}>
                            <TouchableOpacity onPress={console.log('teste')} style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                <Image source={Global} style={{ width: 53, height: 33 }} />
                            </TouchableOpacity>
                            <Text style={firstStyleContainer.textoContentIcons}>Tranferência Internac. </Text>
                        </View>
                        <View style={firstStyleContainer.viewContentIcon}>
                            <TouchableOpacity onPress={console.log('teste')} style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                <Image source={Investir} style={{ width: 30, height: 36 }} />
                            </TouchableOpacity>
                            <Text style={firstStyleContainer.textoContentIcons}>Investir</Text>
                        </View>
                    </ScrollView>
                </ScrollView>
                <TouchableOpacity onPress={console.log('teste')} style={firstStyleContainer.cartoesContent}>
                    <Image source={Pix} style={{ width: 30, height: 30 }} />
                    <Text style={{ marginLeft: 10, fontWeight: '500' }}>Meus Cartões</Text>
                </TouchableOpacity>
                <ScrollView scrollEventThrottle={16} >
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ display: "flex", flexDirection: "row", padding: 20 }} >
                        <TouchableOpacity onPress={console.log('teste')} style={firstStyleContainer.cartoesSegundoContent}>
                            <Text style={{ marginLeft: 10, fontWeight: '500', fontWeight: '400' }}>Conheça <Text style={{ color: '#a031df' }}>Nubank Vida</Text>: um seguro simples e que cabe no bolso</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={console.log('teste')} style={firstStyleContainer.infoContent}>
                            <Text style={{ marginLeft: 10, fontWeight: '500', fontWeight: '400' }}>Salve seus amigos da burocracia. <Text style={{ color: '#a031df' }}>Faça um convite...</Text></Text>
                        </TouchableOpacity>
                    </ScrollView>
                </ScrollView>
            </View>
        </>
    )
}

const firstStyleContainer = StyleSheet.create({
    containerCorpoTop: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20
    },
    textoContent: {
        fontSize: 18,
    },
    viewContentIcon: {
        display: "flex",
        alignItems: "center",
        width: 90,
    },
    cartoesContent: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#ececf5',
        width: '90%',
        padding: 14,
        borderRadius: 10,
        marginTop: 20
    },
    cartoesSegundoContent: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: '#ececf5',
        width: 320,
        padding: 20,
        borderRadius: 10,
    },
    infoContent: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: '#ececf5',
        width: 320,
        padding: 20,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 40
    },
    textoContentIcons: {
        fontSize: 13,
        marginTop: 5,
    }

})

