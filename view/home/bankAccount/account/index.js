import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, SafeAreaView } from "react-native";
import { useRef, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import NavegateTopScreen from "../../../../components/topScreenNavegate";
import Pig from "../../../../icons/pig.png"
import Pagar from "../../../../icons/barcode.png"
import Transferir from "../../../../icons/transferir.png"
import Depositar from "../../../../icons/depositar.png"
import Cobrar from "../../../../icons/cobrar.png"
import emprestimos from "../../../../icons/emprestino.png"
import Investir from "../../../../icons/investir.png"
import Extrato from "../../../../icons/extrato.png"
import Compra from "../../../../icons/compra.png"
import BottonLine from "../../../../components/bottonLine";

export default function Account() {

    const navigation = useNavigation()
    const [input, setInput] = useState(true)
    const scrollRef = useRef();

    return (
        <SafeAreaView>
            <NavegateTopScreen route={"Home"} icon={"left"} rightIcon={"questioncircleo"} />
            <ScrollView
                ref={scrollRef}
                showsVerticalScrollIndicator={false}
                decelerationRate="normal"
                style={{marginBottom: 40, marginTop: 60}}
                >
                <View>
                    <View style={{ padding: 20 }}>
                        <View>
                            <Text style={{ color: "#000000d1" }}>Saldo disponível</Text>
                            <Text style={{ fontSize: 28, fontWeight: "600" }}>R$ 1829,80</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", marginTop: 30 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('SavedMoney')} style={{ display: "flex", flexDirection: "row", marginBottom: 20, justifyContent: "space-between" }}>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                                    <View>
                                        <Image source={Pig} style={{ width: 40, height: 38, marginRight: 20 }} />
                                    </View>
                                    <View>
                                        <Text>Dinheiro guardado</Text>
                                        <Text>R$ 0,00</Text>
                                    </View>
                                </View>
                                <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('TotalIncome')} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                                    <View>
                                        <Image source={Investir} style={{ width: 40, height: 38, marginRight: 20 }} />
                                    </View>
                                    <View>
                                        <Text>Redimento total da conta</Text>
                                        <Text><Text style={{ color: "#095814", fontWeight: "600" }}>+R$ 0,17</Text> este mês</Text>
                                    </View>
                                </View>
                                <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                            </TouchableOpacity>
                            <ScrollView scrollEventThrottle={16} style={{ padding: 0 }}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ display: "flex", flexDirection: "row", marginTop: 40 }}>
                                    <View style={firstStyleContainer.viewContentIcon}>
                                        <TouchableOpacity onPress={console.log('teste')} style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                            <Image source={Depositar} style={{ width: 35, height: 35 }} />
                                        </TouchableOpacity>
                                        <Text style={firstStyleContainer.textoContentIcons}>Depositar</Text>
                                    </View>
                                    <View style={firstStyleContainer.viewContentIcon}>
                                        <TouchableOpacity onPress={console.log('teste')} style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                            <Image source={Pagar} style={{ width: 30, height: 15, marginTop: 8 }} />
                                        </TouchableOpacity>
                                        <Text style={firstStyleContainer.textoContentIcons}>Pagar</Text>
                                    </View>
                                    <View style={firstStyleContainer.viewContentIcon}>
                                        <TouchableOpacity onPress={console.log('teste')} style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                            <Image source={Transferir} style={{ width: 33, height: 30 }} />
                                        </TouchableOpacity>
                                        <Text style={firstStyleContainer.textoContentIcons}>Transferir</Text>
                                    </View>
                                    <View style={firstStyleContainer.viewContentIcon}>
                                        <TouchableOpacity onPress={console.log('teste')} style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                            <Image source={emprestimos} style={{ width: 42, height: 36 }} />
                                        </TouchableOpacity>
                                        <Text style={firstStyleContainer.textoContentIcons}>Empréstimos</Text>
                                    </View>
                                    <View style={firstStyleContainer.viewContentIcon}>
                                        <TouchableOpacity onPress={console.log('teste')} style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                            <Image source={Extrato} style={{ width: 38, height: 37 }} />
                                        </TouchableOpacity>
                                        <Text style={firstStyleContainer.textoContentIcons}>Pedir Extrato</Text>
                                    </View>
                                    <View style={firstStyleContainer.viewContentIcon}>
                                        <TouchableOpacity onPress={console.log('teste')} style={{ alignItems: "center", height: 60, width: 60, backgroundColor: '#ececf5', padding: 14, borderRadius: 100 }}>
                                            <Image source={Cobrar} style={{ width: 42, height: 39 }} />
                                        </TouchableOpacity>
                                        <Text style={firstStyleContainer.textoContentIcons}>Cobrar</Text>
                                    </View>
                                </ScrollView>
                            </ScrollView>
                        </View>
                    </View>
                    <BottonLine />
                    <View style={{ padding: 20 }}>
                        <Text style={{ fontSize: 20, marginBottom: 20 }}>Historico</Text>
                        <View>
                            <View style={{ position: "relative" }}>
                                {input && (<><Icon
                                    name="search1"
                                    size={17}
                                    style={{ color: 'black', position: "absolute", top: 14, left: 8 }}
                                /></>
                                )}
                                <TextInput
                                    style={{ backgroundColor: "#c2c2c38c", padding: 8, borderRadius: 20 }}
                                    placeholder="      Buscar"
                                    onFocus={() => setInput(!input)}
                                    onEndEditing={() => setInput(!input)}
                                    onPressIn={() =>
                                        scrollRef.current.scrollTo({
                                            x: 0,
                                            y: 450,
                                            animated: true
                                        })}
                                />
                            </View>
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
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const firstStyleContainer = StyleSheet.create({

    viewContentIcon: {
        display: "flex",
        alignItems: "center",
        width: 90,
    },

})






