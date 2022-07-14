import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import NavegateTopScreen from "../../components/topScreenNavegate";
import Pig from "../../icones/pig.png"
import Pagar from "../../icones/barcode.png"
import Transferir from "../../icones/transferir.png"
import Depositar from "../../icones/depositar.png"
import Cobrar from "../../icones/cobrar.png"
import emprestimos from "../../icones/emprestino.png"
import Investir from "../../icones/investir.png"
import Extrato from "../../icones/extrato.png"


export default function Conta() {

    const navigation = useNavigation()

    return (
        <>
            <NavegateTopScreen route={"Home"} />
            <View style={{ padding: 20 }}>

                <View>
                    <Text>Saldo disponível</Text>
                    <Text>R$ 1829,80</Text>
                </View>

                <View style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>

                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ display: "flex", flexDirection: "row", marginBottom: 20, justifyContent: "space-between" }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                            <View>
                                <Image source={Pig} style={{ width: 24, height: 22, marginRight: 20 }} />
                            </View>
                            <View>
                                <Text>Dinheiro guardado</Text>
                                <Text>R$ 0,00</Text>
                            </View>
                        </View>
                        <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                            <View>
                                <Image source={Investir} style={{ width: 24, height: 22, marginRight: 20 }} />
                            </View>
                            <View>
                                <Text>Dinheiro guardado</Text>
                                <Text>R$ 0,00</Text>
                            </View>
                        </View>
                        <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                    </TouchableOpacity>

                    <ScrollView scrollEventThrottle={16}>
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
        </>
    )

}



const firstStyleContainer = StyleSheet.create({

    viewContentIcon: {
        display: "flex",
        alignItems: "center",
        width: 90,
    },

})




