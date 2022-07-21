import { Text, View, StatusBar, Image, TouchableOpacity } from "react-native";
import NavegateTopScreen from "../../../components/topScreenNavegate"
import Icon from "react-native-vector-icons/AntDesign";
import virtualCard from "../../../icons/virtualCard.png"
import cartaoFisico from "../../../icons/cartaoFisico.png"
import CriarCartao from "../../../icons/criarCartao.png"
import BottonLine from "../../../components/bottonLine";

export default function MyCards() {
    return (
        <>
            <NavegateTopScreen route={"Home"} icon={"close"} />
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 26, fontWeight: "600" }}>Meus cartões</Text>
                <TouchableOpacity onPress={() => console.log("teste")} style={{ marginTop: 40 }}>
                    <Text style={{ fontWeight: "600", color: "#0000009c" }}>Cartão físico</Text>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 30 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Image source={virtualCard} style={{ width: 30, height: 30, marginRight: 15 }} />
                            <View>
                                <Text>WARLLEI S MARTINS</Text>
                                <Text>****2493</Text>
                            </View>
                        </View>
                        <Icon name="right" size={14} style={{ color: 'black' }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("teste")} style={{ marginTop: 40 }}>
                    <Text style={{ fontWeight: "600", color: "#0000009c" }}>Cartão físico</Text>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 30 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Image source={cartaoFisico} style={{ width: 30, height: 30, marginRight: 15 }} />
                            <View>
                                <Text>WARLLEI S MARTINS</Text>
                                <Text>****2493</Text>
                            </View>
                        </View>
                        <Icon name="right" size={14} style={{ color: 'black' }} />
                    </View>
                </TouchableOpacity>
                <BottonLine />
                <TouchableOpacity onPress={() => console.log("teste")} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Image source={CriarCartao} style={{ width: 45, height: 45, marginRight: 15 }} />
                    <Text style={{ color: "#662d91", fontSize: 23 }}>Criar cartão virtual</Text>
                </TouchableOpacity>
            </View>
            <StatusBar backgroundColor={"#f2f2f2"} />
        </>
    )
}