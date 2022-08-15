import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, StatusBar, Animated, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import NavegateTopScreen from "../../../components/topScreenNavegate"
import Img3 from '../../../images/nuimg3.png'
import Bitcoin from "../../../icons/bitcoin.png"
import Ethereum from "../../../icons/ethereum.png"

export default function Cripto() {
    const [posicao, setPosicao] = useState(new Animated.Value(500))
    const [posicao2, setPosicao2] = useState(new Animated.Value(500))
    const [posicao3, setPosicao3] = useState(new Animated.Value(500))

    // const [letras, setLetras] = useState(new Animated.Value(48))

    // const [dados, setDados] = useState(20)

    function Animacao() {
        Animated.sequence([
            Animated.timing(
                posicao,
                {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true
                },
            ),
            Animated.timing(
                posicao2,
                {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true
                },
            ),
            Animated.timing(
                posicao3,
                {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true
                },
            )
        ]).start();
    }

    useEffect(() => {
        Animacao()
    }, [])

    return (
        <SafeAreaView>
            <NavegateTopScreen route={"Home"} icon={"left"} rightIcon={"questioncircleo"} />
            <ScrollView padding={20} style={{ position: "relative", marginBottom: 40, marginTop: 60 }}>
                <Animated.View style={[{
                    transform: [{ translateX: posicao }]
                }]}>
                    <Text style={{ fontSize: 26, fontWeight: "600" }}>Com apenas R$1 você já pode começar</Text>
                    <TouchableOpacity onPress={() => console.log("teste")} style={{ marginTop: 30, width: 220, borderRadius: 200, paddingHorizontal: 20, paddingVertical: 14, backgroundColor: "#600e83" }}>
                        <Text style={{ textAlign: "center", fontWeight: "700", color: "#ffff" }}>Comprar criptomoedas</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={[{
                    transform: [{ translateX: posicao2 }]
                }]}>
                    <TouchableOpacity onPress={() => console.log("teste")} style={{ backgroundColor: "#00000010", marginTop: 50, borderRadius: 10 }}>
                        <Image source={Img3} style={{ width: "100%", height: 140, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                        <View style={{ padding: 20, width: 230 }}>
                            <Text style={{ fontSize: 18, fontWeight: "600" }}>Chegou agora?</Text>
                            <Text style={{ fontWeight: "300" }}>Separamos algumas informações para te ajudar com os primeiros passos.</Text>
                            <View style={{ width: 140, borderRadius: 200, paddingHorizontal: 20, paddingVertical: 10, backgroundColor: "#600e83", marginBottom: 10, marginTop: 15 }}>
                                <Text style={{ textAlign: "center", fontWeight: "700", color: "#ffff" }}>Saiba Mais</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={[{ marginBottom: 40, transform: [{ translateX: posicao3 }] }]}>
                    <Text style={{ fontSize: 20, fontWeight: "600", marginTop: 20 }}>Criptomoedas disponíveis</Text>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 20, marginBottom: 20 }}>
                        <Image source={Bitcoin} style={{ width: 45, height: 45, marginRight: 15 }} />
                        <View>
                            <Text style={{ fontWeight: "700" }}>Bitcoin</Text>
                            <Text>A partir de R$ 1</Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Image source={Ethereum} style={{ width: 45, height: 45, marginRight: 15 }} />
                        <View>
                            <Text style={{ fontWeight: "700" }}>Ethereum</Text>
                            <Text>A partir de R$ 1</Text>
                        </View>
                    </View>
                </Animated.View>
            </ScrollView>
            <StatusBar backgroundColor={"#f2f2f2"} barStyle="dark-content" />
        </SafeAreaView>
    )
}