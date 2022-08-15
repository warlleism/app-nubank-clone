
import { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import NavegateTopScreen from "../../../components/topScreenNavegate"
import Icon from "react-native-vector-icons/AntDesign";


export default function Transfer(props) {

  const [valor, setValor] = useState("0,00")
  const { width } = Dimensions.get("window")
  const { height } = Dimensions.get("window")

  return (
    <SafeAreaView>
      <NavegateTopScreen route={"Home"} icon={"close"} rightIcon={"qrcode"} display={props.showCloseTogle ? props.showCloseTogle : ""} />
      <View style={{ backgroundColor: "#f2f2f2", height: "90%", width: width, position: "relative", marginTop: 60 }}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 32, width: 300, marginBottom: 10, fontWeight: "500" }}>Qual é o valor da <Text style={{ color: "#a031df", fontWeight: "800" }}>transferência?</Text></Text>
          <Text>Saldo disponível em conta <Text style={{ fontSize: 17, fontWeight: "600", color: "#a031df" }}>R$ 1829,80</Text></Text>
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
            selectionColor={"#a031df"}
            keyboardType={"number-pad"}
            onChangeText={(text) => setValor(text)}
            style={{ borderBottomColor: "black", borderBottomWidth: 1, padding: 10, fontSize: 40, marginTop: 20 }}
          />
        </View>
        <TouchableOpacity disabled={valor == "0,00" ? true : false} onPress={() => console.log("teste")} style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", alignItems: "flex-end", marginLeft: -20 }}>
          <Text style={valor == "R$0,00" || valor == "0,00" ? [styleContent.button, { backgroundColor: "#4a48486b" }] : [styleContent.button, { backgroundColor: "#a010df" }]}>
            <Icon name="arrowright" size={22} color={"#ffff"} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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

