import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavegateTopScreen from "../../../components/topScreenNavegate"
import BarCode from "../../../icons/barcode.png"
import Celular from "../../../icons/smartphone.png"
import Pix from "../../../icons/pix.png"
import BottonLine from "../../../components/bottonLine";

export default function Pay() {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <NavegateTopScreen route={"Home"} icon={"close"} />
            <View style={{ width: "100%", padding: 20, display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 60 }}>
                <Text style={{ fontSize: 30, fontWeight: "600", marginBottom: 10 }}>Estas são suas opções de pagamento</Text>
                <View>
                    <View style={{ display: "flex", flexDirection: "column", marginTop: 20, justifyContent: "space-around" }}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("PixArea")} style={firstStyleContainer.viewContentIcon}>
                                <Image source={Pix} style={{ width: 30, height: 30, marginRight: 15 }} />
                                <View>
                                    <Text>Pagar com Pix</Text>
                                    <Text>Leia um QR code ou cole o código</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <BottonLine />
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("PixArea")} style={firstStyleContainer.viewContentIcon}>
                                <Image source={Celular} style={{ width: 30, height: 30, marginRight: 15 }} />
                                <View>
                                    <Text>Pagar fatura do cartão</Text>
                                    <Text>Gere um boleto ou pague com seu saldo</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <BottonLine />
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("PixArea")} style={firstStyleContainer.viewContentIcon}>
                                <Image source={BarCode} style={{ width: 30, height: 30, marginRight: 15 }} />
                                <View>
                                    <Text>Pagar boleto</Text>
                                    <Text>Use o saldo da conta ou cartão de crédito</Text>
                                </View>
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
        width: "100%",
    },
})

