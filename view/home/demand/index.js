import NavegateTopScreen from "../../../components/topScreenNavegate"
import { useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import Icon from "react-native-vector-icons/AntDesign";

export default function Demand(props) {
    const [valor, setValor] = useState("0,00")
    const Height = Dimensions.get("window").height
    const Width = Dimensions.get("window").width

    return (
        <>
            <View style={{ backgroundColor: "#f2f2f2", height: Height, width: Width }}>
                <NavegateTopScreen route={"Home"} icon={"close"} display={props.showCloseTogle ? props.showCloseTogle : ""} />
                <View style={{ padding: 20, position: "relative" }}>
                    <Text style={{ fontSize: 32, width: 300, marginBottom: 10, fontWeight: "500" }}>Qual é o valor da <Text style={{ color: "#a031df", fontWeight: "800" }}>receber?</Text></Text>
                    <TextInputMask
                        autoFocus={true}
                        type={'money'}
                        value={valor}
                        options={{
                            precision: 2,
                            separator: ',',
                            delimiter: '.',
                            unit: 'R$',
                            suffixUnit: ''
                        }}
                        selectionColor={"red"}
                        keyboardType={"number-pad"}
                        onChangeText={(text) => setValor(text)}
                        style={{ borderBottomColor: "black", borderBottomWidth: 1, padding: 10, fontSize: 40, marginTop: 20 }}
                    />
                    <Text style={{ marginTop: 30, fontSize: 12, fontWeight: "600", color: "#a031df" }}>Não espesificar um valor ></Text>
                </View>
                <TouchableOpacity disabled={valor == "0,00" ? true : false} onPress={() => navigation.navigate('Operator')} style={{
                    position: "absolute",
                    bottom: 1,
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end"
                }}>
                </TouchableOpacity>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                    <Text style={valor == "R$0,00" || valor == "0,00" ? [styleContent.button, { backgroundColor: "#4a48486b" }] : [styleContent.button, { backgroundColor: "#a010df" }]}>
                        <Icon name="arrowright" size={22} color={"#ffff"} />
                    </Text>
                </View>
            </View>
        </>
    )
}

const styleContent = StyleSheet.create({

    button: {
        borderRadius: 200 / 2,
        padding: 10,
        backgroundColor: "#a010df",
        textAlign: "center",
        marginRight: 20,
        marginBottom: 30,
        width: 40
    },
    input: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        padding: 10,
        fontSize: 30,
        marginTop: 20,
    }
})



