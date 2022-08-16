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

    const data = [
        {
            img: Pix,
            dsc: "Área Pix",
            navigate: "PixArea"
        },
        {
            img: Pagar,
            dsc: "Pagar",
            navigate: "Pay"
        },
        {
            img: Transferir,
            dsc: "Transferir",
            navigate: "Transfer"
        },
        {
            img: Depositar,
            dsc: "Depositar",
            navigate: "Deposit"
        },
        {
            img: Telefone,
            dsc: "Recarga de celular",
            navigate: "Recharge"
        },
        {
            img: Cobrar,
            dsc: "Cobrar",
            navigate: "Demand"
        },
        {
            img: Doacao,
            dsc: "Doação",
            navigate: "Donation"
        },
        {
            img: Global,
            dsc: "Tranferência Internac.",
            navigate: "InternationalTransfer"
        },
        {
            img: Investir,
            dsc: "Investir",
            navigate: "Invest"
        },
    ]


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
                <ScrollView horizontal={true} scrollEventThrottle={16} showsHorizontalScrollIndicator={false} style={{ display: "flex", flexDirection: "row", marginTop: 40 }}>
                    {
                        data.map((e) => {
                            return (
                                <View style={firstStyleContainer.viewContentIcon} key={e.dsc}>
                                    <TouchableOpacity onPress={() => navigation.navigate(e.navigate)} style={firstStyleContainer.iconsScroll}>
                                        <Image source={e.img} style={{ width: 40, height: 40 }} />
                                    </TouchableOpacity>
                                    <Text style={firstStyleContainer.textoContentIcons}>{e.dsc}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate("Cards")} style={firstStyleContainer.cartoesContent}>
                    <Image source={Pix} style={{ width: 30, height: 30 }} />
                    <Text style={{ marginLeft: 10, fontWeight: '500' }}>Meus Cartões</Text>
                </TouchableOpacity>
                <ScrollView scrollEventThrottle={16} horizontal={true} showsHorizontalScrollIndicator={false} style={{ display: "flex", flexDirection: "row", padding: 20 }} >
                    <TouchableOpacity onPress={() => navigation.navigate("Cripto")} style={firstStyleContainer.infoContent}>
                        <Text style={{ width: 280, letterSpacing: 1, marginLeft: 10, fontWeight: '500', fontWeight: '400' }}><Text style={{ color: '#a031df' }}>Cripto:</Text> Compre com segurança a partir de R$1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("PjAccount")} style={firstStyleContainer.infoContent}>
                        <Text style={{ width: 280, letterSpacing: 1, marginLeft: 10, fontWeight: '500', fontWeight: '400' }}>Conheça a <Text style={{ color: '#a031df' }}>conta PJ:</Text> prática e livre de burocracia para seu...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("NoBureaucracy")} style={firstStyleContainer.lastInfoContent} >
                        <Text style={{ width: 280, letterSpacing: 1, fontWeight: '500', fontWeight: '400' }}>Salve amigos da burocracia.</Text>
                        <Text style={{ color: '#a031df' }}>Faça um convite para o Nubank.</Text>
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
        height: 70,
        width: 70,
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
        flexDirection: "column",
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

