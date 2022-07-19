import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import NavegateTopScreen from "../../../../components/topScreenNavegate"
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export default function CellPhoneRecharge() {

    const [numero, setNumero] = useState('')
    const [numeroTratado, setNumeroTratado] = useState('')

    const phoneTratado = () => {
        numero.replace(/(\d{2})?(\d{1})?(\d{1})?(\d{1})?(\d{1})?(\d{1})?(\d{1})?(\d{1})?(\d{1})?(\d{1})?/,
            function (matchDaRegex, grupo1, grupo2, grupo3, grupo4, grupo5, grupo6, grupo7, grupo8, grupo9, grupo10) {
                setNumeroTratado(`${grupo1 ? `(${grupo1})` : ''}${grupo2 ? grupo2 : ' '}${grupo3 ? grupo3 : ' '}${grupo4 ? grupo4 : ' '}${grupo5 ? grupo5 : ' '}${grupo6 ? grupo6 : ' '}${grupo7 ? grupo7 : ' '}${grupo8 ? grupo8 : ' '}${grupo9 ? grupo9 : ' '}${grupo10 ? grupo10 : ' '}`)
            })
    }



    const navigation = useNavigation();

    useEffect(() => {
        phoneTratado()
    }, [numero])

    return (
        <View style={styleContent.main}>
            <View style={{ position: "relative" }}>
                <NavegateTopScreen route={"Home"} icon={"close"} />
                <View style={{ width: "100%", top: -37, display: "flex", alignItems: "center" }}>
                    <View style={{ backgroundColor: "#4a4848db", width: 160, height: 3, borderRadius: 50 }}>
                        <View style={{ backgroundColor: "#a031df", width: 50, height: 3, borderRadius: 50 }}>
                        </View>
                    </View>
                </View>
                <View style={{ padding: 20, position: "relative" }}>
                    <Text style={{ fontSize: 32, width: "100%", marginBottom: 10, fontWeight: "500" }}>Qual número você quer recarregar?</Text>
                    <TextInput
                        autoFocus={true}
                        selectionColor={"#a031df"}
                        keyboardType={"number-pad"}
                        placeholder={"(DDD) + Número"}
                        onChangeText={(e) => setNumero(e)}
                        style={styleContent.input} />
                </View>
                <Text style={{ fontSize: 32, position: "absolute", bottom: 29.1, left: 19, color: "black" }}>{numeroTratado}</Text>
            </View>
            <TouchableOpacity disabled={numero.length <= 10 ? true : false} onPress={() => navigation.navigate('Operator')} style={{ width: "100%", display: "flex", alignItems: "flex-end", marginBottom: 20, marginLeft: -20 }}>
                <Text style={numero.length <= 10 ? styleContent.buttonDesable : styleContent.button}>
                    <Icon name="arrowright" size={22} color={"#ffff"} />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styleContent = StyleSheet.create({
    main: {
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        height: "100%"
    },
    button: {
        borderRadius: 200 / 2,
        padding: 10,
        backgroundColor: "#a010df"
    },
    buttonDesable: {
        borderRadius: 200 / 2,
        padding: 10,
        backgroundColor: "#4a48486b"
    },
    input: {
        color: "transparent",
        letterSpacing: 2,
        paddingLeft: 15,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        padding: 10,
        fontSize: 30,
        marginTop: 20,
    }
})

