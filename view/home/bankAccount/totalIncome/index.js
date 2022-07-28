import { Dimensions, ScrollView, StatusBar, Text, View, Animated, SafeAreaView, StyleSheet } from "react-native";
import NavegateTopScreen from "../../../../components/topScreenNavegate";
import BottonLine from "../../../../components/bottonLine";
import { useState } from "react";

const screen = Dimensions.get("window").width;

export default function TotalIncome() {

    const [x] = useState(new Animated.Value(0))

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
                    <View style={{ width: screen, padding: 20 }}>
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
                    <View style={{ width: screen, padding: 20 }}>
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
                    <View style={{ width: screen, padding: 20 }}>
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
                    <View style={{ width: screen, padding: 20 }}>
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
                    <View style={{ width: screen, padding: 20 }}>
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
                    <View style={{ width: screen, padding: 20 }}>
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
                    <View style={{ width: screen, padding: 20 }}>
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
                    <View style={{ width: screen, padding: 20 }}>
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
                    <View style={{ width: screen, padding: 20 }}>
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
                    <View style={{ width: screen, padding: 20 }}>
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
                    <View style={{ width: screen, padding: 20 }}>
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



