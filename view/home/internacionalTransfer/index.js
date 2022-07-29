import { SafeAreaView } from "react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NavegateTopScreen from "../../../components/topScreenNavegate";
import TransferMoneyInternational from "../../../icons/transferMoneyInternational.png"
import ReciveMoneyInternational from "../../../icons/reciveMoneyInternational.png"
import BottonLine from "../../../components/bottonLine";
import Icon from "react-native-vector-icons/AntDesign";


export default function InternationalTransfer() {
    return (
        <SafeAreaView>
            <NavegateTopScreen route={"Home"} icon={"close"} rightIcon={"questioncircleo"} />
            <View style={{ width: "100%", padding: 20, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Text style={{ fontSize: 30, fontWeight: "700", marginBottom: 10 }}>Transferência <Text style={{ color: "#a031df" }}>Internacional</Text></Text>
                <Text style={{ fontSize: 17, marginTop: 10 }}>Envie e receba dinheiro do exterior de maneira rápida e segura.</Text>
                <View>
                    <View style={{ display: "flex", flexDirection: "column", marginTop: 20, justifyContent: "space-around" }}>
                        <View>
                            <TouchableOpacity onPress={() => console.log("teste")} style={firstStyleContainer.viewContentIcon}>
                                <Image source={TransferMoneyInternational} style={{ width: 40, height: 40, marginRight: 15 }} />
                                <View style={{ width: "76%" }}>
                                    <Text style={{ fontWeight: "500" }}>Enviar</Text>
                                    <Text>Faça seu dinheiro chegar em mais de 100 países em apenas um dia útil.</Text>
                                </View>
                                <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                            </TouchableOpacity>
                        </View>
                        <BottonLine />
                        <View>
                            <TouchableOpacity onPress={() => console.log("teste")} style={firstStyleContainer.viewContentIcon}>
                                <Image source={ReciveMoneyInternational} style={{ width: 40, height: 40, marginRight: 15 }} />
                                <View style={{ width: "76%" }}>
                                    <Text style={{ fontWeight: "500" }}>Receber</Text>
                                    <Text>Receba dinheiro do exterior com total segurança em apenas dois dias uíteis.</Text>
                                </View>
                                <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                            </TouchableOpacity>
                        </View>
                        <BottonLine />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )

}


const firstStyleContainer = StyleSheet.create({
    viewContentIcon: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
})

