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
            <View style={{ width: '100%', display: "flex", flexDirection: "column" }}>

                <View style={styleContainerCorpoTop.containerCorpoTop}>
                    <View>
                        <View><Text style={styleContainerCorpoTop.textoContent}>Conta</Text></View>
                        <View><Text style={styleContainerCorpoTop.textoContent}>R$ 0,00</Text></View>
                    </View>
                    <View>
                        <Icon name="right" size={14} style={{ color: 'black' }} />
                    </View>
                </View>

                <ScrollView scrollEventThrottle={16}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ display: "flex", flexDirection: "row", marginTop: 40 }}>
                        <View style={styleContainerCorpoTop.viewContentIcon}>
                            <View style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#e2dde4', padding: 14, borderRadius: 100 }}>
                                <Image source={Pix} style={{ width: 30, height: 30 }} />
                            </View>
                            <Text style={styleContainerCorpoTop.textoContentIcons}>Área Pix</Text>
                        </View>

                        <View style={styleContainerCorpoTop.viewContentIcon}>
                            <View style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#e2dde4', padding: 14, borderRadius: 100 }}>
                                <Image source={Pagar} style={{ width: 30, height: 15, marginTop: 8 }} />
                            </View>
                            <Text style={styleContainerCorpoTop.textoContentIcons}>Pagar</Text>
                        </View>


                        <View style={styleContainerCorpoTop.viewContentIcon}>
                            <View style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#e2dde4', padding: 14, borderRadius: 100 }}>
                                <Image source={Transferir} style={{ width: 33, height: 30 }} />
                            </View>
                            <Text style={styleContainerCorpoTop.textoContentIcons}>Transferir</Text>
                        </View>

                        <View style={styleContainerCorpoTop.viewContentIcon}>
                            <View style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#e2dde4', padding: 14, borderRadius: 100 }}>
                                <Image source={Depositar} style={{ width: 35, height: 30 }} />
                            </View>
                            <Text style={styleContainerCorpoTop.textoContentIcons}>Depositar</Text>
                        </View>

                        <View style={styleContainerCorpoTop.viewContentIcon}>
                            <View style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#e2dde4', padding: 14, borderRadius: 100 }}>
                                <Image source={Telefone} style={{ width: 30, height: 30 }} />
                            </View>
                            <Text style={styleContainerCorpoTop.textoContentIcons}>Recarga de celular</Text>
                        </View>

                        <View style={styleContainerCorpoTop.viewContentIcon}>
                            <View style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#e2dde4', padding: 14, borderRadius: 100 }}>
                                <Image source={Cobrar} style={{ width: 42, height: 30 }} />
                            </View>
                            <Text style={styleContainerCorpoTop.textoContentIcons}>Cobrar</Text>
                        </View>

                        <View style={styleContainerCorpoTop.viewContentIcon}>
                            <View style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#e2dde4', padding: 14, borderRadius: 100 }}>
                                <Image source={Doacao} style={{ width: 30, height: 30 }} />
                            </View>
                            <Text style={styleContainerCorpoTop.textoContentIcons}>Doação</Text>
                        </View>

                        <View style={styleContainerCorpoTop.viewContentIcon}>
                            <View style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#e2dde4', padding: 14, borderRadius: 100 }}>
                                <Image source={Global} style={{ width: 53, height: 30 }} />
                            </View>
                            <Text style={styleContainerCorpoTop.textoContentIcons}>Tranferência Internac. </Text>
                        </View>

                        <View style={styleContainerCorpoTop.viewContentIcon}>
                            <View style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#e2dde4', padding: 14, borderRadius: 100 }}>
                                <Image source={Pix} style={{ width: 30, height: 30 }} />
                            </View>
                            <Text style={styleContainerCorpoTop.textoContentIcons}>Área Pix</Text>
                        </View>

                    </ScrollView>
                </ScrollView>

            </View>
        </>
    )
}

const styleContainerCorpoTop = StyleSheet.create({
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
    iconContentIcon: {

    },
    textoContentIcons: {
        fontSize: 13,
        marginTop: 5,
    }

})

