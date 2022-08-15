import { useState } from "react";
import { Animated, Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import NavegateTopScreen from "../../../components/topScreenNavegate";
import BottonLine from "../../../components/bottonLine";
import Cartao from "../../../icons/cartao.png"
import Pagar from "../../../icons/barcode.png"
import Parcelar from "../../../icons/parcelar.png"
import Ajuste from "../../../icons/ajuste.png"
import Resumo from "../../../icons/resumo.png"
import Amigos from "../../../icons/amigos.png"
import Boleto from "../../../icons/boleto.png"
import Debito from "../../../icons/debito-automatico.png"
import Compra from "../../../icons/compra.png"
import Transferir from "../../../icons/transferir.png"

const { width } = Dimensions.get("window")
const { height } = Dimensions.get("window")


export default function CreditCard() {

    const [active, setActive] = useState(0)
    const [x] = useState(new Animated.Value(0))

    return (
        <SafeAreaView>

            <ScrollView>
                <Animated.ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={(event) => setActive(parseInt(event.nativeEvent.contentOffset.x / width * 1.9))}
                    style={styles.conteinerInfo}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x } } }], {
                        useNativeDriver: true,
                    })}
                >
                    <View style={styles.conteinerInfoContent}>
                        <View>
                            <Text style={{ fontWeight: "800", color: "#202020bf" }}>Fatura Atual</Text>
                            <Text style={{ fontSize: 25, fontWeight: "600", marginTop: 7 }}>R$ 26,80</Text>
                            <Text style={{ marginTop: 7, color: "#202020bf" }}>Limite disponível R$1.1745,00</Text>
                            <Text style={{ marginTop: 7, color: "#202020bf" }}>Fecha em 18 AGO</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", marginRight: -25 }}>
                            <View style={{ marginBottom: 2, backgroundColor: "#16de0be6", height: "70%", width: 8, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}></View>
                            <View style={{ marginBottom: 2, backgroundColor: "#1c8de0", height: "5%", width: 8 }}></View>
                            <View style={{ backgroundColor: "tomato", height: "25%", width: 8, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}></View>
                        </View>
                    </View>

                    <View style={styles.conteinerInfoContentFatura}>
                        <Animated.View style={{
                            display: "flex", flexDirection: "column",
                            transform: [{
                                translateX: x.interpolate({
                                    inputRange: [0, width / 1],
                                    outputRange: [width / 6, 0]
                                })
                            }]
                        }}>
                            <TouchableOpacity onPress={() => console.log("teste")} style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 19, fontWeight: "600" }}>R$1.745,00 <Text style={{ fontSize: 19, fontWeight: "100" }}>></Text></Text>
                                <Text style={{ color: "#202020bf" }}>Limite disponível</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => console.log("teste")} style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 19, fontWeight: "600" }}>R$1.745,00 <Text style={{ fontSize: 19, fontWeight: "100" }}>></Text></Text>
                                <Text style={{ color: "#202020bf" }}>Fatura atual</Text>
                            </TouchableOpacity>
                            <View style={{ marginTop: 10, display: "flex", flexDirection: "row", justifyContent: "space-between", width: width - 60 }}>
                                <TouchableOpacity onPress={() => console.log("teste")}>
                                    <Text style={{ fontSize: 19, fontWeight: "600" }}>R$1.745,00 <Text style={{ fontSize: 19, fontWeight: "100" }}>></Text></Text>
                                    <Text style={{ color: "#202020bf" }}>Próximas faturas</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => console.log("teste")} style={{ backgroundColor: "tomato", paddingHorizontal: 30, paddingVertical: 14, borderRadius: 30 }}>
                                    <Text style={{ color: "#ffff", fontWeight: "600" }}>Antecipar</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </View>
                </Animated.ScrollView>
                <View style={{ bottom: 20, display: "flex", flexDirection: "row", alignSelf: "center", marginTop: 20 }}>
                    <View style={{ borderRadius: 30, width: 9, height: 9, backgroundColor: active == 0 ? "black" : "#2020203b", marginRight: 10 }}></View>
                    <View style={{ borderRadius: 30, width: 9, height: 9, backgroundColor: active == 1 ? "black" : "#2020203b", }}></View>
                </View>
                <ScrollView horizontal={true} scrollEventThrottle={16} showsHorizontalScrollIndicator={false} style={{ display: "flex", flexDirection: "row", marginTop: 40 }}>
                    <View style={styles.viewContentIcon}>
                        <TouchableOpacity onPress={() => console.log("teste")} style={styles.iconsScroll}>
                            <Image source={Pagar} style={{ width: 30, height: 15, marginTop: 8 }} />
                        </TouchableOpacity>
                        <Text style={styles.textoContentIcons}>Pagar fatura</Text>
                    </View>
                    <View style={styles.viewContentIcon}>
                        <TouchableOpacity onPress={() => console.log("teste")} style={styles.iconsScroll}>
                            <Image source={Resumo} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <Text style={styles.textoContentIcons}>Resumo de faturas</Text>
                    </View>
                    <View style={styles.viewContentIcon}>
                        <TouchableOpacity onPress={() => console.log("teste")} style={styles.iconsScroll}>
                            <Image source={Parcelar} style={{ width: 33, height: 30 }} />
                        </TouchableOpacity>
                        <Text style={styles.textoContentIcons}>Parcelar Compras</Text>
                    </View>
                    <View style={styles.viewContentIcon}>
                        <TouchableOpacity onPress={() => console.log("teste")} style={styles.iconsScroll}>
                            <Image source={Ajuste} style={{ width: 35, height: 30 }} />
                        </TouchableOpacity>
                        <Text style={styles.textoContentIcons}>Ajustar limite</Text>
                    </View>
                    <View style={styles.viewContentIcon}>
                        <TouchableOpacity onPress={() => console.log("teste")} style={styles.iconsScroll}>
                            <Image source={Cartao} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <Text style={styles.textoContentIcons}>Meus cartões</Text>
                    </View>
                    <View style={styles.viewContentIcon}>
                        <TouchableOpacity onPress={() => console.log("teste")} style={styles.iconsScroll}>
                            <Image source={Amigos} style={{ width: 42, height: 39 }} />
                        </TouchableOpacity>
                        <Text style={styles.textoContentIcons}>Indicar amigos</Text>
                    </View>
                    <View style={styles.viewContentIcon}>
                        <TouchableOpacity onPress={() => console.log("teste")} style={styles.iconsScroll}>
                            <Image source={Boleto} style={{ width: 39, height: 34 }} />
                        </TouchableOpacity>
                        <Text style={styles.textoContentIcons}>Pagar boleto</Text>
                    </View>
                    <View style={styles.viewContentIcon}>
                        <TouchableOpacity onPress={() => console.log("teste")} style={styles.iconsScroll}>
                            <Image source={Debito} style={{ width: 39, height: 33 }} />
                        </TouchableOpacity>
                        <Text style={styles.textoContentIcons}>Débito automático</Text>
                    </View>
                </ScrollView>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 20, marginBottom: 20 }}>Historico</Text>
                    <View>
                        <View style={{ marginTop: 20, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <View style={{ padding: 7, backgroundColor: "#c2c2c38c", borderRadius: 50, marginRight: 20 }}>
                                    <Image source={Compra} style={{ width: 28, height: 27 }} />
                                </View>
                                <View>
                                    <Text>Compra no débito</Text>
                                    <Text style={{ width: 230 }}>Carone p Costa</Text>
                                    <Text>R$ 2,19</Text>
                                </View>
                            </View>
                            <Text>11 JUL</Text>
                        </View>
                        <BottonLine />
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <View style={{ padding: 7, backgroundColor: "#c2c2c38c", borderRadius: 50, marginRight: 20 }}>
                                    <Image source={Transferir} style={{ width: 28, height: 27 }} />
                                </View>
                                <View>
                                    <Text>Transferência recebida</Text>
                                    <Text style={{ width: 230 }}>Warllei Da Silva Martins</Text>
                                    <Text>R$ 870,00</Text>
                                </View>
                            </View>
                            <Text>11 JUL</Text>
                        </View>
                        <BottonLine />
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <View style={{ padding: 7, backgroundColor: "#c2c2c38c", borderRadius: 50, marginRight: 20 }}>
                                    <Image source={Pagar} style={{ width: 28, height: 27 }} />
                                </View>
                                <View>
                                    <Text>Pagamento efeituado</Text>
                                    <Text style={{ width: 230 }}>SOCIEDADE ECUCADAO E GESTAO DE EXCELENCIA</Text>
                                    <Text>R$ 509,88</Text>
                                </View>
                            </View>
                            <Text>03 JAN</Text>
                        </View>
                        <BottonLine />
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <View style={{ padding: 7, backgroundColor: "#c2c2c38c", borderRadius: 50, marginRight: 20 }}>
                                    <Image source={Transferir} style={{ width: 28, height: 27 }} />
                                </View>
                                <View>
                                    <Text>Transferência enviada</Text>
                                    <Text style={{ width: 230 }}>Rafael Honório da Silva</Text>
                                    <Text>R$ 150,00</Text>
                                </View>
                            </View>
                            <Text>11 JUL</Text>
                        </View>
                        <BottonLine />
                        <View style={{ marginTop: 20, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <View style={{ padding: 7, backgroundColor: "#c2c2c38c", borderRadius: 50, marginRight: 20 }}>
                                    <Image source={Compra} style={{ width: 28, height: 27 }} />
                                </View>
                                <View>
                                    <Text>Compra no débito</Text>
                                    <Text style={{ width: 230 }}>Carone p Costa</Text>
                                    <Text>R$ 2,19</Text>
                                </View>
                            </View>
                            <Text>11 JUL</Text>
                        </View>
                        <BottonLine />
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <View style={{ padding: 7, backgroundColor: "#c2c2c38c", borderRadius: 50, marginRight: 20 }}>
                                    <Image source={Transferir} style={{ width: 28, height: 27 }} />
                                </View>
                                <View>
                                    <Text>Transferência recebida</Text>
                                    <Text style={{ width: 230 }}>Warllei Da Silva Martins</Text>
                                    <Text>R$ 870,00</Text>
                                </View>
                            </View>
                            <Text>11 JUL</Text>
                        </View>
                        <BottonLine />
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <View style={{ padding: 7, backgroundColor: "#c2c2c38c", borderRadius: 50, marginRight: 20 }}>
                                    <Image source={Pagar} style={{ width: 28, height: 27 }} />
                                </View>
                                <View>
                                    <Text>Pagamento efeituado</Text>
                                    <Text style={{ width: 230 }}>SOCIEDADE ECUCADAO E GESTAO DE EXCELENCIA</Text>
                                    <Text>R$ 509,88</Text>
                                </View>
                            </View>
                            <Text>03 JAN</Text>
                        </View>
                        <BottonLine />
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <View style={{ padding: 7, backgroundColor: "#c2c2c38c", borderRadius: 50, marginRight: 20 }}>
                                    <Image source={Transferir} style={{ width: 28, height: 27 }} />
                                </View>
                                <View>
                                    <Text>Transferência enviada</Text>
                                    <Text style={{ width: 230 }}>Rafael Honório da Silva</Text>
                                    <Text>R$ 150,00</Text>
                                </View>
                            </View>
                            <Text>11 JUL</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <NavegateTopScreen route={"Home"} icon={"left"} rightIcon={"questioncircleo"} backgroundColor={"#f2f2f2f2"} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conteinerInfo: {
        height: height / 2,
        marginTop: 60,
    },
    conteinerInfoContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        width: width - 20
    },
    conteinerInfoContentFatura: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        width: width - 20
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
    textoContentIcons: {
        fontSize: 13,
        marginTop: 5,
        textAlign: "center"
    }
})