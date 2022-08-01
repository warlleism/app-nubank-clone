import { Dimensions, StatusBar, Text, View, Animated, SafeAreaView, StyleSheet } from "react-native";
import NavegateTopScreen from "../../../../components/topScreenNavegate";
import BottonLine from "../../../../components/bottonLine";
import { useEffect, useState } from "react";
import Data from "../../data.json"

const screen = Dimensions.get("window").width;

export default function TotalIncome() {

    const [x] = useState(new Animated.Value(0))

    const dados = {
        saldo: "",
        rendeu: "",
        valor: "",
        redimentosBrutos: "",
        valorRendimentosBrutos: "",
        imposto: "",
        valorImposto: "",
        iof: "",
        valorIOF: "",
        saldoEntradasSaidas: "",
        valorEntradaSaida: "",
        entradas: "",
        valorEntradas: "",
        saidas: "",
        valorSaidas: "",
        dinheiroGuardado: "",
        valorSaidaDe: "",
        rendendo: "",
        valorRendendo: ""
    }

    const [data, setData] = useState(dados)

    const getData = () => {
        Data.data.map((e) => {
            e.rendimento.map(e => {
                setData({
                    saldo: e.saldo,
                    rendeu: e.rendeu,
                    valor: e.valor,
                    redimentosBrutos: e.redimentosBrutos,
                    valorRendimentosBrutos: e.valorRendimentosBrutos,
                    imposto: e.imposto,
                    valorImposto: e.valorImposto,
                    iof: e.iof,
                    valorIOF: e.valorIOF,
                    saldoEntradasSaidas: e.saldoEntradasSaidas,
                    valorEntradaSaida: e.valorEntradaSaida,
                    entradas: e.entradas,
                    valorEntradas: e.valorEntradas,
                    saidas: e.saidas,
                    valorSaidas: e.valorSaidas,
                    dinheiroGuardado: e.dinheiroGuardado,
                    valorSaidaDe: e.valorSaidaDe,
                    rendendo: e.rendendo,
                    valorRendendo: e.valorRendendo
                })
            })
        })
    }

    useEffect(() => {
        getData()
    }, [])

    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    const Container = () => {
        return a.map((e) => {
            return (
                <View style={{ width: screen, padding: 20 }}>
                    <Text>{data.saldo}</Text>
                    <Text style={{ fontSize: 19, fontWeight: "300", marginTop: 20 }}>{data.rendeu}</Text>
                    <Text style={{ color: "green" }}>{data.valor}</Text>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                        <Text>{data.redimentosBrutos}</Text>

                        <Text>{data.valorRendimentosBrutos}</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                        <Text>{data.imposto}</Text>
                        <Text>{data.valorImposto}</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                        <Text>{data.iof}</Text>
                        <Text>{data.valorIOF}</Text>
                    </View>
                    <BottonLine />
                    <View>
                        <Text style={{ marginBottom: 10 }}>{data.saldoEntradasSaidas}</Text>
                        <Text>é <Text style={{ fontWeight: "bold" }}>{data.valorEntradaSaida}</Text></Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>{data.entradas}</Text>
                            <Text>{data.valorEntradas}</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>{data.saidas}</Text>
                            <Text>{data.valorSaidas}</Text>
                        </View>
                    </View>
                    <BottonLine />
                    <View>
                        <Text>{data.dinheiroGuardado}</Text>
                        <Text style={{ fontSize: 20, fontWeight: "300", marginTop: 30 }}>{data.valorSaidaDe}</Text>
                        <Text style={{ fontSize: 20, fontWeight: "300" }}>{data.rendendo} <Text style={{ color: "green" }}>{data.valorRendendo}</Text></Text>
                    </View>
                </View>
            )
        })
    }


    return (
        <SafeAreaView>
            <NavegateTopScreen color={"#ffff"} route={"Account"} icon={"close"} rightIcon={"questioncircleo"} backgroundColor={"#8734c7"} />
            <Animated.View style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 10,
                marginTop: 20,
                maxWidth: screen * 12,
                transform: [{
                    translateX: x.interpolate({
                        inputRange: [0, screen / 13],
                        outputRange: [100 / 12, 0]
                    })
                }]
            }}
            >
                <View style={{ width: 393 / 3.4 }}>
                    <Text style={{ textAlign: "center", color: "black", fontWeight: "700" }}>Janeiro</Text>
                </View>
                <View style={{ width: 393 / 3.4 }}>
                    <Text style={{ textAlign: "center", color: "black", fontWeight: "700" }}>Fevereiro</Text>
                </View>
                <View style={{ width: 393 / 3.4 }}>
                    <Text style={{ textAlign: "center", color: "black", fontWeight: "700" }}>Março</Text>
                </View>
                <View style={{ width: 393 / 3.4 }}>
                    <Text style={{ textAlign: "center", color: "black", fontWeight: "700" }}>Abril</Text>
                </View>
                <View style={{ width: 393 / 3.4 }}>
                    <Text style={{ textAlign: "center", color: "black", fontWeight: "700" }}>Maio</Text>
                </View>
                <View style={{ width: 393 / 3.4 }}>
                    <Text style={{ textAlign: "center", color: "black", fontWeight: "700" }}>Junho</Text>
                </View>
                <View style={{ width: 393 / 3.4 }}>
                    <Text style={{ textAlign: "center", color: "black", fontWeight: "700" }}>Julho</Text>
                </View>
                <View style={{ width: 393 / 3.4 }}>
                    <Text style={{ textAlign: "center", color: "black", fontWeight: "700" }}>Agosto</Text>
                </View>
                <View style={{ width: 393 / 3.4 }}>
                    <Text style={{ textAlign: "center", color: "black", fontWeight: "700" }}>Setembro</Text>
                </View>
                <View style={{ width: 393 / 3.4 }}>
                    <Text style={{ textAlign: "center", color: "black", fontWeight: "700" }}>Outubro</Text>
                </View>
                <View style={{ width: 393 / 3.4 }}>
                    <Text style={{ textAlign: "center", color: "black", fontWeight: "700" }}>Novembro</Text>
                </View>
                <View style={{ width: 393 / 3.4 }}>
                    <Text style={{ textAlign: "center", color: "black", fontWeight: "700" }}>Dezembro</Text>
                </View>
            </Animated.View>
            <Animated.View style={[styledComponent.scrollIncicator,
            {
                transform: [{
                    translateX: x.interpolate({
                        inputRange: [0, screen / 31],
                        outputRange: [0, screen / 1720]
                    })
                }]
            }]} />

            <Animated.ScrollView
                scrollEventThrottle={16}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x } } }], {
                    useNativeDriver: true,
                })}
            >
                <View style={{ display: "flex", flexDirection: "row" }}>
                    {Container()}
                </View>
            </Animated.ScrollView>
            <StatusBar
                backgroundColor={"#191a1c"}
                barStyle="dark-content"
            />
        </SafeAreaView>
    )
}

const styledComponent = StyleSheet.create({
    scrollIncicator: {
        backgroundColor: "#8734c7",
        height: 4,
        width: screen / 3.4,
        borderRadius: 20,
        left: screen / 46
    }
})



