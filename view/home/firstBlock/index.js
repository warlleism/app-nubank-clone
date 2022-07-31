import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TouchableHighlight, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/AntDesign";
import Telefone from "../../../icons/smartphone.png"
import Pagar from "../../../icons/barcode.png"
import Transferir from "../../../icons/transferir.png"
import Depositar from "../../../icons/depositar.png"
import Pix from "../../../icons/pix.png"
import Cobrar from "../../../icons/cobrar.png"
import Doacao from "../../../icons/coracao.png"
import Global from "../../../icons/global.png"
import Investir from "../../../icons/investir.png"



export default function firstBlock(props) {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={{ width: '100%', display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#ffff" }}>
                <TouchableOpacity onPress={() => navigation.navigate('Account')} style={firstStyleContainer.containerCorpoTop}>
                    <View>
                        <View><Text style={firstStyleContainer.textoContent}>Conta</Text></View>
                        <View style={{ height: 40 }}>{props.showMoney == true ? <Text style={firstStyleContainer.textoContent}>R$ 1829,80</Text> : <Text style={{ fontSize: 30 }}>••••</Text>}</View>
                    </View>
                    <Icon name="right" size={14} style={{ color: 'black' }} />
                </TouchableOpacity>
                <ScrollView scrollEventThrottle={16}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ display: "flex", flexDirection: "row", marginTop: 40 }}>
                        <View style={firstStyleContainer.viewContentIcon}>
                            <TouchableOpacity onPress={() => navigation.navigate("PixArea")} style={firstStyleContainer.iconsScroll}>
                                <Image source={Pix} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <Text style={firstStyleContainer.textoContentIcons}>Área Pix</Text>
                        </View>
                        <View style={firstStyleContainer.viewContentIcon}>
                            <TouchableOpacity onPress={() => navigation.navigate("Pay")} style={firstStyleContainer.iconsScroll}>
                                <Image source={Pagar} style={{ width: 30, height: 15, marginTop: 8 }} />
                            </TouchableOpacity>
                            <Text style={firstStyleContainer.textoContentIcons}>Pagar</Text>
                        </View>
                        <View style={firstStyleContainer.viewContentIcon}>
                            <TouchableOpacity onPress={() => navigation.navigate("Transfer")} style={firstStyleContainer.iconsScroll}>
                                <Image source={Transferir} style={{ width: 33, height: 30 }} />
                            </TouchableOpacity>
                            <Text style={firstStyleContainer.textoContentIcons}>Transferir</Text>
                        </View>
                        <View style={firstStyleContainer.viewContentIcon}>
                            <TouchableOpacity onPress={() => navigation.navigate("Deposit")} style={firstStyleContainer.iconsScroll}>
                                <Image source={Depositar} style={{ width: 35, height: 30 }} />
                            </TouchableOpacity>
                            <Text style={firstStyleContainer.textoContentIcons}>Depositar</Text>
                        </View>
                        <View style={firstStyleContainer.viewContentIcon}>
                            <TouchableOpacity onPress={() => navigation.navigate("Recharge")} style={firstStyleContainer.iconsScroll}>
                                <Image source={Telefone} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <Text style={firstStyleContainer.textoContentIcons}>Recarga de celular</Text>
                        </View>
                        <View style={firstStyleContainer.viewContentIcon}>
                            <TouchableOpacity onPress={() => navigation.navigate("Demand")} style={firstStyleContainer.iconsScroll}>
                                <Image source={Cobrar} style={{ width: 42, height: 39 }} />
                            </TouchableOpacity>
                            <Text style={firstStyleContainer.textoContentIcons}>Cobrar</Text>
                        </View>
                        <View style={firstStyleContainer.viewContentIcon}>
                            <TouchableOpacity onPress={() => navigation.navigate("Donation")} style={firstStyleContainer.iconsScroll}>
                                <Image source={Doacao} style={{ width: 39, height: 34 }} />
                            </TouchableOpacity>
                            <Text style={firstStyleContainer.textoContentIcons}>Doação</Text>
                        </View>
                        <View style={firstStyleContainer.viewContentIcon}>
                            <TouchableOpacity onPress={() => navigation.navigate("InternationalTransfer")} style={firstStyleContainer.iconsScroll}>
                                <Image source={Global} style={{ width: 53, height: 33 }} />
                            </TouchableOpacity>
                            <Text style={firstStyleContainer.textoContentIcons}>Tranferência Internac. </Text>
                        </View>
                        <View style={firstStyleContainer.viewContentIcon}>
                            <TouchableOpacity onPress={() => navigation.navigate("Invest")} style={firstStyleContainer.iconsScroll}>
                                <Image source={Investir} style={{ width: 30, height: 36 }} />
                            </TouchableOpacity>
                            <Text style={firstStyleContainer.textoContentIcons}>Investir</Text>
                        </View>
                    </ScrollView>
                </ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate("Cards")} style={firstStyleContainer.cartoesContent}>
                    <Image source={Pix} style={{ width: 30, height: 30 }} />
                    <Text style={{ marginLeft: 10, fontWeight: '500' }}>Meus Cartões</Text>
                </TouchableOpacity>

                <ScrollView scrollEventThrottle={16} horizontal={true} showsHorizontalScrollIndicator={false} style={{ display: "flex", flexDirection: "row", padding: 20 }} >
                    <TouchableOpacity onPress={() => navigation.navigate("Cripto")} style={firstStyleContainer.infoContent}>
                        <Text style={{ width: 280, letterSpacing: 1, marginLeft: 10, fontWeight: '500', fontWeight: '400' }}><Text style={{ color: '#a031df' }}>Cripto:</Text> Compre com segurança a partir de R$1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('teste')} style={firstStyleContainer.infoContent}>
                        <Text style={{ width: 280, letterSpacing: 1, marginLeft: 10, fontWeight: '500', fontWeight: '400' }}>Conheça a <Text style={{ color: '#a031df' }}>conta PJ:</Text> prática e livre de burocracia para seu...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('teste')} style={firstStyleContainer.lastInfoContent} >
                        <Text style={{ width: 280, letterSpacing: 1, marginLeft: 10, fontWeight: '500', fontWeight: '400' }}>Salve amigos da burocracia. <Text style={{ color: '#a031df' }}>Faça um convite para o Nubank.</Text> prática e livre de burocracia para seu...</Text>
                    </TouchableOpacity>
                </ScrollView>

            </View>
        </SafeAreaView>
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
    iconsScroll: {
        alignItems: "center",
        height: 60,
        width: 60,
        backgroundColor: '#ececf5',
        padding: 14,
        borderRadius: 100
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
    infoContent: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: '#ececf5',
        width: 320,
        padding: 20,
        borderRadius: 10,
        marginLeft: 0,
        marginRight: 10
    },
    lastInfoContent: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: '#ececf5',
        width: 320,
        padding: 20,
        borderRadius: 10,
        marginLeft: 0,
        marginRight: 40
    },
    textoContentIcons: {
        fontSize: 13,
        marginTop: 5,
    }

})

