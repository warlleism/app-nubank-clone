
import { useState } from "react";
import { Animated, Dimensions, Text, TouchableOpacity, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import Icon from "react-native-vector-icons/AntDesign";
import NavegateTopScreen from "../../../components/topScreenNavegate"


export default function Transfer(props) {

  const [valor, setValor] = useState("00,00")
  const Height = Dimensions.get("window").height
  const Width = Dimensions.get("window").width

  return (
    <>
      <View style={{ backgroundColor: "#f2f2f2", height: Height, width: Width }}>
        <NavegateTopScreen route={"Home"} icon={"close"} rightIcon={"qrcode"} display={props.showCloseTogle} />
        <View style={{ padding: 20, position: "relative" }}>
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
      </View>
    </>
  )
}

