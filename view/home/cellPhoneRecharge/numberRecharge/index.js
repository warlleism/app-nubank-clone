import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";
import NavegateTopScreen from "../../../../components/topScreenNavegate"
import Icon from "react-native-vector-icons/AntDesign";



export default function CellPhoneRecharge() {

    const [numero, setNumero] = useState('')
    const navigation = useNavigation();

    return (
        <View style={styleContent.main}>
            <View style={{ position: "relative" }}>
                <NavegateTopScreen route={"Home"} icon={"close"} />
                <View style={{ width: "100%", top: -47, display: "flex", alignItems: "center" }}>
                    <View style={{ backgroundColor: "#4a4848db", width: 160, height: 3, borderRadius: 50 }}>
                        <View style={{ backgroundColor: "#a031df", width: 50, height: 3, borderRadius: 50 }}>
                        </View>
                    </View>
                </View>
                <View style={{ padding: 20, position: "relative" }}>
                    <Text style={{ fontSize: 32, width: "100%", marginBottom: 10, fontWeight: "500" }}>Qual <Text style={{ color: "#a031df" }}>número </Text>você quer recarregar?</Text>
                    <TextInputMask
                        autoFocus={true}
                        selectionColor={"#a031df"}
                        keyboardType={"number-pad"}
                        type={'cel-phone'}
                        style={styleContent.input}
                        placeholder={"(DDD) + Número"}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={numero}
                        onChangeText={text => { setNumero(text) }}
                    />
                </View>
            </View>
            <TouchableOpacity disabled={numero.length <= 14 ? true : false} onPress={() => navigation.navigate('Operator')} style={{ width: "100%", display: "flex", alignItems: "flex-end", marginBottom: 20, marginLeft: -20 }}>
                <Text style={numero.length <= 14 ? styleContent.buttonDesable : styleContent.button}>
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
        borderBottomColor: "black",
        borderBottomWidth: 1,
        padding: 10,
        fontSize: 30,
        marginTop: 20,
    }
})

