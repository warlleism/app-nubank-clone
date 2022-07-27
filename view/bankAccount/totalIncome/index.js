import { Dimensions, ScrollView, StatusBar, Text, View } from "react-native";
import NavegateTopScreen from "../../../components/topScreenNavegate";
import BottonLine from "../../../components/bottonLine";
import { useRef, useState } from "react";

export default function TotalIncome() {

    const screen = Dimensions.get("screen").width;
    const scrollRef = useRef()
    const [dimensions, setDimensions] = useState({ screen });


    return (
        <>
            <NavegateTopScreen route={"Account"} icon={"close"} rightIcon={"questioncircleo"} />
            <ScrollView
                ref={scrollRef}
                scrollEventThrottle={16}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ backgroundColor: "green", maxHeight: 50 }}
            >
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={{ paddingHorizontal: 20 }}>Janeiro</Text>
                    <Text style={{ paddingHorizontal: 20 }}>Fevereiro</Text>
                    <Text style={{ paddingHorizontal: 20 }}>Março</Text>
                    <Text style={{ paddingHorizontal: 20 }}>Abril</Text>
                    <Text style={{ paddingHorizontal: 20 }}>Meio</Text>
                    <Text style={{ paddingHorizontal: 20 }}>Junho</Text>
                    <Text style={{ paddingHorizontal: 20 }}>Julho</Text>
                    <Text style={{ paddingHorizontal: 20 }}>Agosto</Text>
                    <Text style={{ paddingHorizontal: 20 }}>Teste</Text>
                    <Text style={{ paddingHorizontal: 20 }}>Teste</Text>
                    <Text style={{ paddingHorizontal: 20 }}>Teste</Text>
                    <Text style={{ paddingHorizontal: 20 }}>Teste</Text>
                </View>
            </ScrollView>

            <ScrollView
                scrollEventThrottle={16}
                horizontal={true}
                pagingEnabled={true}

                onMomentumScrollBegin={() =>
                    scrollRef.current.scrollTo({
                        x: dimensions.screen,
                        y: 0,
                        animated: true
                    })}
            >
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <View style={{ width: 412, padding: 20 }}>
                        <Text>Saldo em 31 de janeiro de 2022</Text>
                        <Text style={{ fontSize: 19, fontWeight: "300", marginTop: 20 }}>Seu dinheiro rendeu</Text>
                        <Text style={{ color: "green" }}>R$ 0,00</Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Redimentos brutos</Text>
                            <Text>+ R$ 1,14</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Imposto de Renda</Text>
                            <Text>- R$ 0,07</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>IOF</Text>
                            <Text>- R$ 0,84</Text>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Saldo entre Entradas e Saídas</Text>
                            <Text>é <Text style={{ fontWeight: "bold" }}>R$ 0,00</Text></Text>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Entradas</Text>
                                <Text>+ R$ 0,80</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Saídas</Text>
                                <Text>- R$ 0,00</Text>
                            </View>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Disponível + Dinheiro Guardado</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300", marginTop: 30 }}>Saldo de R$ 0,22</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300" }}>rendendo <Text style={{ color: "green" }}>9,15% ao ano</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: 412, padding: 20 }}>
                        <Text>Saldo em 31 de janeiro de 2022</Text>
                        <Text style={{ fontSize: 19, fontWeight: "300", marginTop: 20 }}>Seu dinheiro rendeu</Text>
                        <Text style={{ color: "green" }}>R$ 0,00</Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Redimentos brutos</Text>
                            <Text>+ R$ 1,14</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Imposto de Renda</Text>
                            <Text>- R$ 0,07</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>IOF</Text>
                            <Text>- R$ 0,84</Text>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Saldo entre Entradas e Saídas</Text>
                            <Text>é <Text style={{ fontWeight: "bold" }}>R$ 0,00</Text></Text>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Entradas</Text>
                                <Text>+ R$ 0,80</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Saídas</Text>
                                <Text>- R$ 0,00</Text>
                            </View>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Disponível + Dinheiro Guardado</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300", marginTop: 30 }}>Saldo de R$ 0,22</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300" }}>rendendo <Text style={{ color: "green" }}>9,15% ao ano</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: 412, padding: 20 }}>
                        <Text>Saldo em 31 de janeiro de 2022</Text>
                        <Text style={{ fontSize: 19, fontWeight: "300", marginTop: 20 }}>Seu dinheiro rendeu</Text>
                        <Text style={{ color: "green" }}>R$ 0,00</Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Redimentos brutos</Text>
                            <Text>+ R$ 1,14</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Imposto de Renda</Text>
                            <Text>- R$ 0,07</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>IOF</Text>
                            <Text>- R$ 0,84</Text>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Saldo entre Entradas e Saídas</Text>
                            <Text>é <Text style={{ fontWeight: "bold" }}>R$ 0,00</Text></Text>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Entradas</Text>
                                <Text>+ R$ 0,80</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Saídas</Text>
                                <Text>- R$ 0,00</Text>
                            </View>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Disponível + Dinheiro Guardado</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300", marginTop: 30 }}>Saldo de R$ 0,22</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300" }}>rendendo <Text style={{ color: "green" }}>9,15% ao ano</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: 412, padding: 20 }}>
                        <Text>Saldo em 31 de janeiro de 2022</Text>
                        <Text style={{ fontSize: 19, fontWeight: "300", marginTop: 20 }}>Seu dinheiro rendeu</Text>
                        <Text style={{ color: "green" }}>R$ 0,00</Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Redimentos brutos</Text>
                            <Text>+ R$ 1,14</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Imposto de Renda</Text>
                            <Text>- R$ 0,07</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>IOF</Text>
                            <Text>- R$ 0,84</Text>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Saldo entre Entradas e Saídas</Text>
                            <Text>é <Text style={{ fontWeight: "bold" }}>R$ 0,00</Text></Text>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Entradas</Text>
                                <Text>+ R$ 0,80</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Saídas</Text>
                                <Text>- R$ 0,00</Text>
                            </View>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Disponível + Dinheiro Guardado</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300", marginTop: 30 }}>Saldo de R$ 0,22</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300" }}>rendendo <Text style={{ color: "green" }}>9,15% ao ano</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: 412, padding: 20 }}>
                        <Text>Saldo em 31 de janeiro de 2022</Text>
                        <Text style={{ fontSize: 19, fontWeight: "300", marginTop: 20 }}>Seu dinheiro rendeu</Text>
                        <Text style={{ color: "green" }}>R$ 0,00</Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Redimentos brutos</Text>
                            <Text>+ R$ 1,14</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Imposto de Renda</Text>
                            <Text>- R$ 0,07</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>IOF</Text>
                            <Text>- R$ 0,84</Text>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Saldo entre Entradas e Saídas</Text>
                            <Text>é <Text style={{ fontWeight: "bold" }}>R$ 0,00</Text></Text>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Entradas</Text>
                                <Text>+ R$ 0,80</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Saídas</Text>
                                <Text>- R$ 0,00</Text>
                            </View>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Disponível + Dinheiro Guardado</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300", marginTop: 30 }}>Saldo de R$ 0,22</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300" }}>rendendo <Text style={{ color: "green" }}>9,15% ao ano</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: 412, padding: 20 }}>
                        <Text>Saldo em 31 de janeiro de 2022</Text>
                        <Text style={{ fontSize: 19, fontWeight: "300", marginTop: 20 }}>Seu dinheiro rendeu</Text>
                        <Text style={{ color: "green" }}>R$ 0,00</Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Redimentos brutos</Text>
                            <Text>+ R$ 1,14</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Imposto de Renda</Text>
                            <Text>- R$ 0,07</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>IOF</Text>
                            <Text>- R$ 0,84</Text>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Saldo entre Entradas e Saídas</Text>
                            <Text>é <Text style={{ fontWeight: "bold" }}>R$ 0,00</Text></Text>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Entradas</Text>
                                <Text>+ R$ 0,80</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Saídas</Text>
                                <Text>- R$ 0,00</Text>
                            </View>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Disponível + Dinheiro Guardado</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300", marginTop: 30 }}>Saldo de R$ 0,22</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300" }}>rendendo <Text style={{ color: "green" }}>9,15% ao ano</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: 412, padding: 20 }}>
                        <Text>Saldo em 31 de janeiro de 2022</Text>
                        <Text style={{ fontSize: 19, fontWeight: "300", marginTop: 20 }}>Seu dinheiro rendeu</Text>
                        <Text style={{ color: "green" }}>R$ 0,00</Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Redimentos brutos</Text>
                            <Text>+ R$ 1,14</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Imposto de Renda</Text>
                            <Text>- R$ 0,07</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>IOF</Text>
                            <Text>- R$ 0,84</Text>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Saldo entre Entradas e Saídas</Text>
                            <Text>é <Text style={{ fontWeight: "bold" }}>R$ 0,00</Text></Text>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Entradas</Text>
                                <Text>+ R$ 0,80</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Saídas</Text>
                                <Text>- R$ 0,00</Text>
                            </View>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Disponível + Dinheiro Guardado</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300", marginTop: 30 }}>Saldo de R$ 0,22</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300" }}>rendendo <Text style={{ color: "green" }}>9,15% ao ano</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: 412, padding: 20 }}>
                        <Text>Saldo em 31 de janeiro de 2022</Text>
                        <Text style={{ fontSize: 19, fontWeight: "300", marginTop: 20 }}>Seu dinheiro rendeu</Text>
                        <Text style={{ color: "green" }}>R$ 0,00</Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Redimentos brutos</Text>
                            <Text>+ R$ 1,14</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Imposto de Renda</Text>
                            <Text>- R$ 0,07</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>IOF</Text>
                            <Text>- R$ 0,84</Text>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Saldo entre Entradas e Saídas</Text>
                            <Text>é <Text style={{ fontWeight: "bold" }}>R$ 0,00</Text></Text>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Entradas</Text>
                                <Text>+ R$ 0,80</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Saídas</Text>
                                <Text>- R$ 0,00</Text>
                            </View>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Disponível + Dinheiro Guardado</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300", marginTop: 30 }}>Saldo de R$ 0,22</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300" }}>rendendo <Text style={{ color: "green" }}>9,15% ao ano</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: 412, padding: 20 }}>
                        <Text>Saldo em 31 de janeiro de 2022</Text>
                        <Text style={{ fontSize: 19, fontWeight: "300", marginTop: 20 }}>Seu dinheiro rendeu</Text>
                        <Text style={{ color: "green" }}>R$ 0,00</Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Redimentos brutos</Text>
                            <Text>+ R$ 1,14</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Imposto de Renda</Text>
                            <Text>- R$ 0,07</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>IOF</Text>
                            <Text>- R$ 0,84</Text>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Saldo entre Entradas e Saídas</Text>
                            <Text>é <Text style={{ fontWeight: "bold" }}>R$ 0,00</Text></Text>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Entradas</Text>
                                <Text>+ R$ 0,80</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Saídas</Text>
                                <Text>- R$ 0,00</Text>
                            </View>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Disponível + Dinheiro Guardado</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300", marginTop: 30 }}>Saldo de R$ 0,22</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300" }}>rendendo <Text style={{ color: "green" }}>9,15% ao ano</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: 412, padding: 20 }}>
                        <Text>Saldo em 31 de janeiro de 2022</Text>
                        <Text style={{ fontSize: 19, fontWeight: "300", marginTop: 20 }}>Seu dinheiro rendeu</Text>
                        <Text style={{ color: "green" }}>R$ 0,00</Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Redimentos brutos</Text>
                            <Text>+ R$ 1,14</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Imposto de Renda</Text>
                            <Text>- R$ 0,07</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>IOF</Text>
                            <Text>- R$ 0,84</Text>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Saldo entre Entradas e Saídas</Text>
                            <Text>é <Text style={{ fontWeight: "bold" }}>R$ 0,00</Text></Text>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Entradas</Text>
                                <Text>+ R$ 0,80</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Saídas</Text>
                                <Text>- R$ 0,00</Text>
                            </View>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Disponível + Dinheiro Guardado</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300", marginTop: 30 }}>Saldo de R$ 0,22</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300" }}>rendendo <Text style={{ color: "green" }}>9,15% ao ano</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: 412, padding: 20 }}>
                        <Text>Saldo em 31 de janeiro de 2022</Text>
                        <Text style={{ fontSize: 19, fontWeight: "300", marginTop: 20 }}>Seu dinheiro rendeu</Text>
                        <Text style={{ color: "green" }}>R$ 0,00</Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Redimentos brutos</Text>
                            <Text>+ R$ 1,14</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>Imposto de Renda</Text>
                            <Text>- R$ 0,07</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                            <Text>IOF</Text>
                            <Text>- R$ 0,84</Text>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Saldo entre Entradas e Saídas</Text>
                            <Text>é <Text style={{ fontWeight: "bold" }}>R$ 0,00</Text></Text>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Entradas</Text>
                                <Text>+ R$ 0,80</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 17 }}>
                                <Text>Saídas</Text>
                                <Text>- R$ 0,00</Text>
                            </View>
                        </View>
                        <BottonLine />
                        <View>
                            <Text>Disponível + Dinheiro Guardado</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300", marginTop: 30 }}>Saldo de R$ 0,22</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300" }}>rendendo <Text style={{ color: "green" }}>9,15% ao ano</Text></Text>
                        </View>
                    </View>

                </View>

            </ScrollView>

            <StatusBar
                backgroundColor={"#191a1c"}
                barStyle="dark-content"
            />
        </>
    )
}

const { width, height } = Dimensions.get("window")


