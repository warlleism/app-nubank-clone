import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NavegateTopScreen from "../../../components/topScreenNavegate"
import NuSocio from "../../../images/nuSocio.png"
import NuSocioImg1 from "../../../images/pieceNubank1.jpg"
import NuSocioImg2 from "../../../images/pieceNubank2.jpg"
import NuSocioImg3 from "../../../images/pieceNubank3.jpg"
import pieceNubankVideo1 from "../../../images/pieceNubankVideo1.jpg"
import pieceNubankVideo2 from "../../../images/pieceNubankVideo2.jpg"
import pieceNubankVideo3 from "../../../images/pieceNubankVideo3.jpg"
import AppButton from "../../../components/button"


export default function PieceNubank() {

    const imagens = [
        {
            id: 1,
            img: pieceNubankVideo1,
        },
        {
            id: 2,
            img: pieceNubankVideo2,
        },
        {
            id: 3,
            img: pieceNubankVideo3,
        }
    ]


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ marginTop: 60, padding: 20 }}>
                    <Image source={NuSocio} style={{ height: 120, width: 300 }} />
                    <Text style={{ marginTop: 15, fontSize: 19 }}>Cada pedacinho (BDR) está valendo: </Text>
                    <Text style={{ marginTop: 15, fontSize: 20, fontWeight: "600" }}>R$: 600,98</Text>
                    <Text style={{ marginTop: 15, color: "#35363aa6" }}>Última atualização às 00:50</Text>

                    <TouchableOpacity onPress={() => console.log("teste")}>
                        <Text style={style.contentTextVariacao}>Variação do dia</Text>
                    </TouchableOpacity>

                </View>

                <View style={style.containerNuEnsina}>
                    <Text style={{ fontSize: 18, fontWeight: "600" }}>NuEnsina: o jeito Nu de ensinar sobre grana</Text>
                    <Text style={{ marginTop: 20, marginBottom: 20 }}>Aprenda novas formas de lidar com seu dinheiro e até como fazê-lo crescer. tem vídeo,Quiz, dicas diversas e muito mais!</Text>
                    <TouchableOpacity onPress={() => console.log("teste")}>
                        <AppButton
                            background={'#8734c7'}
                            color={'#ffff'}
                            titulo={'Ir para o NuEnsina'}
                            evento={'testes'}
                            pVertical={11}
                            weight={"700"}
                            fontSize={19}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 50, backgroundColor: "#ffff", borderTopLeftRadius: 20, borderTopRightRadius: 20, width: "100%" }}>
                    <Text style={{ padding: 20, fontSize: 20, fontWeight: "600" }}>Dicas de leitura para você</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                        <TouchableOpacity onPress={() => console.log("teste")} style={{ marginLeft: 20, width: 210, height: 280, borderRadius: 20, backgroundColor: "#2020200f" }}>
                            <Image source={NuSocioImg3} style={{ width: "100%", height: 120, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                            <Text style={{ padding: 14, fontSize: 14 }}>Resultados Nubank do 2º trimestre 2022</Text>
                            <Text style={{ padding: 14, marginTop: -20, color: "#35363aa6" }}>Veja alguns dos principais números e entenda o que eles significam.</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log("teste")} style={{ marginLeft: 20, width: 210, height: 280, borderRadius: 20, backgroundColor: "#2020200f" }}>
                            <Image source={NuSocioImg2} style={{ width: "100%", height: 120, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                            <Text style={{ padding: 14, fontSize: 14 }}>Programa de investimentos terá apoio de B3, a Bolsa d...</Text>
                            <Text style={{ padding: 14, marginTop: -20, color: "#35363aa6" }}>A Bolsa de Valores brasileira apoiará o programa educacional do NuSócios. ...</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log("teste")} style={{ marginLeft: 20, marginRight: 20, width: 210, height: 280, borderRadius: 20, backgroundColor: "#2020200f" }}>
                            <Image source={NuSocioImg1} style={{ width: "100%", height: 120, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                            <Text style={{ padding: 14, fontSize: 14 }}>Resultados Nubank do 2º trimestre 2022</Text>
                            <Text style={{ padding: 14, marginTop: -20, color: "#35363aa6" }}>Veja alguns dos principais números e entenda o que eles significam.</Text>
                        </TouchableOpacity>

                    </ScrollView>
                    <View>
                        <Text style={{ padding: 20, fontSize: 20, fontWeight: "800", marginTop: 30 }}>Comece sua jornada como a gente</Text>
                        <Text style={{ padding: 20, fontSize: 17, color: "#35363aa6", marginBottom: 20 }}>parabéns! Seu BDR vale um pedacinho do Nubank. Por aqui você vai acompanhar a variação do preço dele e também aprender sobre investimentos na bolsa de valores. Veja o conteúdo que preparamos para você.</Text>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                            {imagens.map((e) => {
                                return (
                                    <TouchableOpacity onPress={() => console.log("teste")} key={e.id}>
                                        <Image source={e.img} style={style.containerVideo} />
                                    </TouchableOpacity>
                                )
                            })}

                        </ScrollView>

                    </View>

                    <View style={style.containerIndicarAmigos}>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: "600" }}>Indique o Nubank</Text>
                            <Text style={{ color: "#35363aa6" }}>Salve seus amigos da burocracia.</Text>
                        </View>
                        <TouchableOpacity onPress={() => console.log("teste")}>
                            <AppButton
                                background={'#8734c7'}
                                color={'#ffff'}
                                titulo={'Indicar'}
                                evento={'testes'}
                                pVertical={11}
                                pHorizontal={30}
                                weight={"600"}
                                fontSize={14}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <NavegateTopScreen route={"Home"} icon={"left"} rightIcon={"questioncircleo"} backgroundColor={"#ffffff52"} />
        </SafeAreaView>
    )

}

const style = StyleSheet.create({
    contentTextVariacao: {
        marginTop: 15,
        borderRadius: 40,
        backgroundColor: "#ffff",
        width: 140,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    containerNuEnsina: {
        padding: 20,
        backgroundColor: "#ffff",
        width: "95%",
        alignSelf: "center",
        borderRadius: 20
    },
    containerVideo: {
        width: 220,
        height: 300,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20
    },
    containerIndicarAmigos: {
        marginBottom: 30,
        marginTop: 20,
        padding: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }

})

