import { Animated, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavegateTopScreen from "../../../components/topScreenNavegate"
import BarCode from "../../../icons/barcode.png"
import Pix from "../../../icons/pix.png"
import Copiar from "../../../icons/copiarColar.png"
import Salario from "../../../icons/salario.png"
import BottonLine from "../../../components/bottonLine";
import Icon from "react-native-vector-icons/AntDesign";


export default function Deposit(props) {

    const navigation = useNavigation()

    const Height = Dimensions.get("window").height
    const Width = Dimensions.get("window").width

    return (
        <SafeAreaView>
            <Animated.View style={{ backgroundColor: "#f2f2f2", height: Height, width: Width }}>
                <NavegateTopScreen route={"Home"} icon={"close"} display={props.showCloseTogle ? props.showCloseTogle : ""} />
                <ScrollView style={{ marginTop: -30 }}>
                    <View style={{ width: "100%", padding: 20, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Text style={{ fontSize: 30, fontWeight: "600", marginBottom: 10, width: 320 }}>Como você quer <Text style={{ color: "#a031df" }}>depositar</Text> na sua conta do Nubank?</Text>
                        <View>
                            <View style={{ display: "flex", flexDirection: "column", marginTop: 20, justifyContent: "space-around" }}>
                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate("PixArea")}>
                                        <View style={firstStyleContainer.viewContentIcon}>
                                            <Image source={Pix} style={{ width: 30, height: 30, marginRight: 15 }} />
                                            <View>
                                                <Text style={{ fontWeight: "700", width: 250 }}>Receber na hora em qualquer dia, sem custo</Text>
                                                <Text style={{ width: 250, color: "#000000d1" }}>Gere um código Pix, com ou sem chave, para copiar e colar no seu banco.</Text>
                                            </View>
                                            <Icon name="right" size={16} style={{ color: '#000000d1', padding: 10 }} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <BottonLine />
                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate("PixArea")}>
                                        <View style={firstStyleContainer.viewContentIcon}>
                                            <Image source={BarCode} style={{ width: 30, height: 30, marginRight: 15 }} />
                                            <View>
                                                <Text style={{ fontWeight: "700", width: 250 }}>Receber em até 3 dias, sem custo</Text>
                                                <Text style={{ width: 250, color: "#000000d1" }}>Gere um boleto de depósito.</Text>
                                            </View>
                                            <Icon name="right" size={16} style={{ color: '#000000d1', padding: 10 }} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <BottonLine />
                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate("PixArea")}>
                                        <View style={firstStyleContainer.viewContentIcon}>
                                            <Image source={Copiar} style={{ width: 30, height: 30, marginRight: 15 }} />
                                            <View>
                                                <Text style={{ fontWeight: "700", width: 250 }}>Copiar dados da conta</Text>
                                                <Text style={{ width: 250, color: "#000000d1" }}>Usar dados da sua conta para transferir usando Pix, TED e DOC.</Text>
                                            </View>
                                            <Icon name="right" size={16} style={{ color: '#000000d1', padding: 10 }} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <BottonLine />
                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate("PixArea")}>
                                        <View style={firstStyleContainer.viewContentIcon}>
                                            <Image source={Salario} style={{ width: 30, height: 30, marginRight: 15 }} />
                                            <View>
                                                <Text style={{ fontWeight: "700", width: 250 }}>Receber salário, sem custo</Text>
                                                <Text style={{ width: 250, color: "#000000d1" }}>O salário cai no mesmo dia em que é depositado onde você tem conta.</Text>
                                            </View>
                                            <Icon name="right" size={16} style={{ color: '#000000d1', padding: 10 }} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <BottonLine />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Animated.View>
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

