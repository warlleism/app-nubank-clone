
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import NavegateTopScreen from "../../../components/topScreenNavegate"


export default function Transfer() {
    const navigation = useNavigation()

    const [defaultValor, setDefaultValor] = useState("R$ 0,00")

    return (
        <>
            <NavegateTopScreen route={"Home"} icon={"close"} rightIcon={"qrcode"} />
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 40, width: 300, marginBottom: 10 }}>Qual é o valor da transferência?</Text>
                <Text>Saldo disponível em conta <Text>R$ 1829,80</Text></Text>
                <TextInput
                    selectionColor={"#a031df"}
                    keyboardType={"number-pad"}
                    defaultValue={defaultValor}
                    onChangeText={(e) => setValor(e)}
                    style={{ borderBottomColor: "black", borderBottomWidth: 1, padding: 10, fontSize: 40, marginTop: 20 }} />


                <Text>{defaultValor}</Text>

            </View>
        </>
    )
}