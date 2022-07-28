import { Image, Keyboard, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Animated } from "react-native";
import NavegateTopScreen from "../../../components/topScreenNavegate"
import Transferir from "../../../icons/transferir.png"
import QrCode from "../../../icons/qrCode.png"
import CopiarColar from "../../../icons/copiarColar.png"
import Cobrar from "../../../icons/cobrar.png"
import Depositar from "../../../icons/depositar.png";
import BottonLine from "../../../components/bottonLine";
import Icon from "react-native-vector-icons/AntDesign";
import Transfer from "../transfer/index";
import Deposit from "../deposit/index";
import { useEffect, useState } from "react";

export default function PixArea() {

    const navigation = useNavigation()

    const [posicao, setPosicao] = useState(new Animated.Value(3200))
    const [posicao2, setPosicao2] = useState(new Animated.Value(3200))
    const [showTransfer, setShowTransfer] = useState(false)
    const [showDeposit, setShowDeposit] = useState(true)


    function Animacao(valor) {
        setShowTransfer(true)
        Animated.timing(
            posicao,
            {
                toValue: valor,
                duration: 400,
                useNativeDriver: true
            }
        ).start()
        if (valor != 0) {
            Animated.timing(
                posicao,
                {
                    toValue: valor,
                    duration: 800,
                    useNativeDriver: true
                }
            ).start()

            setTimeout(() => {
                setShowTransfer(false)
            }, 100)
        }
    }
    function Animacao2(valor) {

        setShowDeposit(true)
        Animated.timing(
            posicao2,
            {
                toValue: valor,
                duration: 800,
                useNativeDriver: true
            }
        ).start()

        if (valor != 0) {
            Animated.timing(
                posicao2,
                {
                    toValue: valor,
                    duration: 800,
                    useNativeDriver: true
                }
            ).start()
        }
    }

    return (
        <>
            <NavegateTopScreen route={"Home"} icon={"close"} rightIcon={"questioncircleo"} />
            <ScrollView>
                <View style={{ width: "100%", padding: 20, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Text style={{ fontSize: 30, fontWeight: "600", marginBottom: 10 }}>Área Pix</Text>
                    <Text>Envie e receba pagamentos a  qualquer hora do dia da semana, sem pagar nada por isso.</Text>
                    <View>
                        <Text style={{ fontSize: 24, marginTop: 20 }}>Enviar</Text>
                        <View style={{ display: "flex", flexDirection: "row", marginTop: 20, justifyContent: "space-around" }}>
                            <View style={firstStyleContainer.viewContentIcon}>
                                <TouchableOpacity onPress={() => Animacao(0)} style={firstStyleContainer.imagemIcon}>
                                    <Image source={Transferir} style={{ width: 30, height: 30 }} />
                                </TouchableOpacity>
                                <Text style={firstStyleContainer.textoContentIcons}>Transferir</Text>
                            </View>
                            <View style={firstStyleContainer.viewContentIcon}>
                                <TouchableOpacity onPress={() => navigation.navigate("PixArea")} style={firstStyleContainer.imagemIcon}>
                                    <Image source={CopiarColar} style={{ width: 30, height: 30 }} />
                                </TouchableOpacity>
                                <Text style={firstStyleContainer.textoContentIcons}>Pix Copiar e Colar</Text>
                            </View>
                            <View style={firstStyleContainer.viewContentIcon}>
                                <TouchableOpacity onPress={() => navigation.navigate("PixArea")} style={firstStyleContainer.imagemIcon}>
                                    <Image source={QrCode} style={{ width: 30, height: 30 }} />
                                </TouchableOpacity>
                                <Text style={firstStyleContainer.textoContentIcons}>Ler QR code</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 24, marginTop: 20 }}>Receber</Text>
                        <View style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
                            <View style={firstStyleContainer.viewContentIcon}>
                                <TouchableOpacity onPress={() => Animacao2(0)} style={firstStyleContainer.imagemIcon}>
                                    <Image source={Cobrar} style={{ width: 30, height: 30 }} />
                                </TouchableOpacity>
                                <Text style={firstStyleContainer.textoContentIcons}>Cobrar</Text>
                            </View>
                            <View style={firstStyleContainer.viewContentIcon}>
                                <TouchableOpacity onPress={() => Animacao2(0)} style={firstStyleContainer.imagemIcon}>
                                    <Image source={Depositar} style={{ width: 30, height: 30 }} />
                                </TouchableOpacity>
                                <Text style={firstStyleContainer.textoContentIcons}>Depositar</Text>
                            </View>
                        </View>
                    </View>
                    <BottonLine />
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('SavedMoney')} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                                <View>
                                    <Text style={{ fontWeight: "600" }}>Registro ou trazer chaves</Text>
                                    <Text style={{ width: 260, color: "#000000d1" }}>Registre uma nova chave ou faça uma portabilidade para o Nubank.</Text>
                                </View>
                            </View>
                            <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                        </TouchableOpacity>
                    </View>
                    <BottonLine />
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('SavedMoney')} style={{ display: "flex", flexDirection: "row", marginBottom: 10, justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                                <View>
                                    <Text style={{ fontWeight: "600" }}>Configurar Pix</Text>
                                    <Text style={{ width: 260, color: "#000000d1" }}>Gerencie seu limite diário de transferência ou suas chaves Pix.</Text>
                                </View>
                            </View>
                            <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                        </TouchableOpacity>
                    </View>
                    <BottonLine />
                </View>
            </ScrollView>

            {showTransfer &&
                (
                    <Animated.View style={{
                        position: "absolute",
                        transform: [{ translateY: posicao }]
                    }}>
                        <View style={{
                            width: "100%",
                            paddingHorizontal: 10,
                            paddingVertical: 13,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            backgroundColor: "#f2f2f2"
                        }}>
                            <TouchableOpacity onPress={() => Animacao(3200)} >
                                <Icon name={"close"} size={23} style={{ color: "black" ? "black" : '#000000d1', padding: 10 }} />
                            </TouchableOpacity>
                        </View>
                        <Transfer posicao={posicao} showCloseTogle={"none"} />
                    </Animated.View>

                )}

            {showDeposit &&
                (
                    <Animated.View style={{
                        position: "absolute",
                        transform: [{ translateY: posicao2 }]
                    }}>
                        <View style={{
                            width: "100%",
                            paddingHorizontal: 10,
                            paddingVertical: 13,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            backgroundColor: "#f2f2f2"
                        }}>
                            <TouchableOpacity onPress={() => Animacao2(3200)} >
                                <Icon name={"close"} size={23} style={{ color: "black" ? "black" : '#000000d1', padding: 10 }} />
                            </TouchableOpacity>
                        </View>
                        <Deposit posicao={posicao2} showCloseTogle={"none"} />
                    </Animated.View>
                )}
        </>
    )

}

const firstStyleContainer = StyleSheet.create({
    viewContentIcon: {
        display: "flex",
        alignItems: "center",
        width: 90,
    },
    textoContentIcons: {
        width: 120,
        textAlign: "center",
        fontSize: 13,
        marginTop: 5,
    },
    imagemIcon: {
        alignItems: "center",
        height: 60,
        width: 60,
        backgroundColor: '#ececf5',
        padding: 14,
        borderRadius: 100
    }

})

