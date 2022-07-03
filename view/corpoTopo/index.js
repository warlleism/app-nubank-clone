import { View, Text, StyleSheet, ScrollView, Image, } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Telefone from "../../icones/smartphone.png"
import Pagar from "../../icones/barcode.png"
import Transferir from "../../icones/transferir.png"
import Depositar from "../../icones/depositar.png"
import Pix from "../../icones/pix.png"
import Cobrar from "../../icones/cobrar.png"
import Doacao from "../../icones/coracao.png"
import Global from "../../icones/global.png"

export default function corpoTopo() {
    return (
        <>
            <View style={{ width: '100%', display: "flex", flexDirection: "column", alignItems: "center" }}>
                <View style={styleContainerCorpo.containerCorpoTop}>
                    <View>
                        <View><Text style={styleContainerCorpo.textoContent}>Conta</Text></View>
                        <View><Text style={styleContainerCorpo.textoContent}>R$ 1829,80</Text></View>
                    </View>
                    <View>
                        <Icon name="right" size={14} style={{ color: 'black' }} />
                    </View>
                </View>
                <ScrollView scrollEventThrottle={16}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ display: "flex", flexDirection: "row", marginTop: 40 }}>
                        <View style={styleContainerCorpo.viewContentIcon}>
                            <View style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                <Image source={Pix} style={{ width: 30, height: 30 }} />
                            </View>
                            <Text style={styleContainerCorpo.textoContentIcons}>Área Pix</Text>
                        </View>
                        <View style={styleContainerCorpo.viewContentIcon}>
                            <View style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                <Image source={Pagar} style={{ width: 30, height: 15, marginTop: 8 }} />
                            </View>
                            <Text style={styleContainerCorpo.textoContentIcons}>Pagar</Text>
                        </View>
                        <View style={styleContainerCorpo.viewContentIcon}>
                            <View style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                <Image source={Transferir} style={{ width: 33, height: 30 }} />
                            </View>
                            <Text style={styleContainerCorpo.textoContentIcons}>Transferir</Text>
                        </View>
                        <View style={styleContainerCorpo.viewContentIcon}>
                            <View style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                <Image source={Depositar} style={{ width: 35, height: 30 }} />
                            </View>
                            <Text style={styleContainerCorpo.textoContentIcons}>Depositar</Text>
                        </View>
                        <View style={styleContainerCorpo.viewContentIcon}>
                            <View style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                <Image source={Telefone} style={{ width: 30, height: 30 }} />
                            </View>
                            <Text style={styleContainerCorpo.textoContentIcons}>Recarga de celular</Text>
                        </View>
                        <View style={styleContainerCorpo.viewContentIcon}>
                            <View style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                <Image source={Cobrar} style={{ width: 42, height: 30 }} />
                            </View>
                            <Text style={styleContainerCorpo.textoContentIcons}>Cobrar</Text>
                        </View>
                        <View style={styleContainerCorpo.viewContentIcon}>
                            <View style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                <Image source={Doacao} style={{ width: 30, height: 30 }} />
                            </View>
                            <Text style={styleContainerCorpo.textoContentIcons}>Doação</Text>
                        </View>
                        <View style={styleContainerCorpo.viewContentIcon}>
                            <View style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                <Image source={Global} style={{ width: 53, height: 30 }} />
                            </View>
                            <Text style={styleContainerCorpo.textoContentIcons}>Tranferência Internac. </Text>
                        </View>
                        <View style={styleContainerCorpo.viewContentIcon}>
                            <View style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                <Image source={Pix} style={{ width: 30, height: 30 }} />
                            </View>
                            <Text style={styleContainerCorpo.textoContentIcons}>Área Pix</Text>
                        </View>
                    </ScrollView>
                </ScrollView>
                <View style={styleContainerCorpo.cartoesContent}>
                    <Image source={Pix} style={{ width: 30, height: 30 }} />
                    <Text style={{ marginLeft: 10, fontWeight: '500' }}>Meus Cartões</Text>
                </View>
                <ScrollView scrollEventThrottle={16} >
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  style={{ display: "flex", flexDirection: "row", padding: 20 }} >
                        <View style={styleContainerCorpo.cartoesSegundoContent}>
                            <Text style={{ marginLeft: 10, fontWeight: '500', fontWeight: '400' }}>Conheça <Text style={{ color: '#a031df' }}>Nubank Vida</Text>: um seguro simples e que cabe no bolso</Text>
                        </View>
                        <View style={styleContainerCorpo.cartoesSegundoContent} marginLeft={10} marginRight={40} >
                            <Text style={{ marginLeft: 10, fontWeight: '500', fontWeight: '400' }}>Salve seus amigos da burocracia. <Text style={{ color: '#a031df' }}>Faça um convite...</Text></Text>
                        </View>
                    </ScrollView>
                </ScrollView>
            </View>
        </>
    )
}

const styleContainerCorpo = StyleSheet.create({
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
    textoContentIcons: {
        fontSize: 13,
        marginTop: 5,
    }

})

