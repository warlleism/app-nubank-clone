import { useState } from "react";
import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ContaPJ from "../../../images/contaPJ.png"
import PerfeitoNegocio from "../../../images/perfeitoNegocio.png"
import SimplesAssim from "../../../images/simplesAssim.jpg"
import VoceControle from "../../../images/voceControle.png"
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window")
const { height } = Dimensions.get("window").height

const imagens = [
    {
        id: 1,
        url: ContaPJ,
        texto: "texto1"
    },
    {
        id: 2,
        url: PerfeitoNegocio,
        texto: "texto2"
    },
    {
        id: 3,
        url: SimplesAssim,
        texto: "texto3"
    },
    {
        id: 4,
        url: VoceControle,
        texto: "texto4"
    }
]

export default function PjAccount() {

    const [activeIndex, setActiveIndex] = useState(0)

    const navigation = useNavigation()

    const ImagemContainer = ({ item, textos }) => {
        return (
            <View style={{ width: width, height: height }}>

                <Image source={item.url} style={styles.image} />

                <View style={{ position: "absolute", bottom: 60, padding: 20 }}>

                    <Text style={styles.textContainer}>
                        {
                            item.id == 1 ? "Chegou a conta PJ"
                                : item.id == 2 ? "Você no controle"
                                    : item.id == 3 ? "Perfeito para o seu negócio"
                                        : item.id == 4 ? "Simples assim" : " "}
                    </Text>

                    <Text style={{ color: "black", width: 330, fontSize: 16, color: "#ffff" }}>
                        {
                            item.id == 1 ? "A conta que empreendedores sempre pediram para conseguir resolver o seu dia a dia sem burocracia"
                                : item.id == 2 ? "Separe as finanças do seu negócio das pessoais e veja suas movimentações em tempo real pelo app"
                                    : item.id == 3 ? "Sem taxa de manuntenção. Faça pagamento de impostos e tributos e tenha acesso ao seu extrado para contabilidade."
                                        : item.id == 4 ? "Abertura de conta rápida. Transferências gratuitas e ilimitadas e atendimento 24h, 7 dias por semana." : " "}
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <>
            <SafeAreaView style={styles.conteiner}>
                <View style={{ height: "90%" }}>

                    <FlatList
                        data={imagens}
                        style={{ height: "100%" }}
                        horizontal
                        onMomentumScrollEnd={(event) => setActiveIndex(parseInt(event.nativeEvent.contentOffset.x / width * 1.2))}
                        scrollEventThrottle={16}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => String(item?.id)}
                        renderItem={({ item }) => <ImagemContainer item={item} textos={"teste"} />}
                    />
                </View>

                <View style={{ marginTop: -80 }}>
                    {
                        imagens.length > 1 ?
                            <View style={styles.dotsContainer}>
                                {
                                    imagens.map((_, i) => (
                                        <View key={i} style={[styles.dots, { backgroundColor: i == activeIndex ? '#8734c7' : 'grey' }]} />
                                    ))
                                }
                            </View>
                            : null
                    }
                </View>

                <TouchableOpacity onPress={() => console.log("teste")} style={styles.containerButtonStyle}>
                    <Text style={styles.buttonStyle}>Pedir conta PJ</Text>
                </TouchableOpacity>
            </SafeAreaView>

            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ position: "absolute", top: 10, left: 10 }}>
                <Icon name="close" size={26} style={{ color: '#ffff', backgroundColor: "#2a2a2abf", borderRadius: 30, padding: 3 }} />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({

    textContainer: {
        color: "black",
        width: 300,
        fontWeight: "700",
        fontSize: 26,
        color: "#ffff"
    },
    conteiner: {
        position: "relative",
        flex: 1,
        height: height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    image: {
        width: width,
        height: "100%"
    },
    dotsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center"
    },
    dots: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3
    },
    containerButtonStyle: {
        marginBottom: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonStyle: {
        backgroundColor: "#8734c7",
        fontSize: 16, color: "#ffff",
        fontWeight: "700",
        paddingHorizontal: 80,
        paddingVertical: 10,
        borderRadius: 20
    }
})