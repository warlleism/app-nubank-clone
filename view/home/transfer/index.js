
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import NavegateTopScreen from "../../../components/topScreenNavegate"


export default function Transfer() {
    const navigation = useNavigation()

    const [valor, setValor] = useState("0.00")
    const tratado = valor.replace(".", ",")

    return (
        <>
            <NavegateTopScreen route={"Home"} icon={"close"} rightIcon={"qrcode"} />
            <View style={{ padding: 20, position: "relative" }}>
                <Text style={{ fontSize: 32, width: 300, marginBottom: 10, fontWeight: "600" }}>Qual é o valor da transferência?</Text>
                <Text>Saldo disponível em conta <Text style={{ fontSize: 17, fontWeight: "600" }}>R$ 1829,80</Text></Text>
                <TextInput
                    autoFocus={true}
                    selectionColor={"#a031df"}
                    keyboardType={"number-pad"}
                    onChangeText={(e) => setValor(e)}
                    style={{ borderBottomColor: "black", borderBottomWidth: 1, padding: 10, paddingLeft: 50, fontSize: 40, marginTop: 20 }} />
                <Text style={styleDolar.dolar}>R$</Text>
            </View>
        </>
    )
}

const styleDolar = StyleSheet.create({
    dolar: {
        position: "absolute",
        bottom: 30,
        left: 20,
        fontSize: 40
    }

})