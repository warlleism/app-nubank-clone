
import { useState } from "react";
import { Animated, Dimensions, Text, TouchableOpacity, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import Icon from "react-native-vector-icons/AntDesign";
import NavegateTopScreen from "../../../components/topScreenNavegate"


export default function Transfer(props) {

  const [valor, setValor] = useState("00,00")

  const Height = Dimensions.get("window").height
  const Width = Dimensions.get("window").width

  function Animacao() {
    Animated.timing(
      props.posicao,
      {
        toValue: 400,
        duration: 600,
        useNativeDriver: true
      }
    ).start()
  }


  return (
    <Animated.View style={{ position: "absolute", backgroundColor: "#f2f2f2", height: Height, width: Width, transform: [{ translateY: props.posicao }] }}>
      <NavegateTopScreen route={"Home"} icon={"close"} rightIcon={"qrcode"} display={"none"} />

      <View style={{ width: "100%", paddingHorizontal: 10, paddingVertical: 13, display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#f2f2f2" }}>
        <TouchableOpacity onPress={() => Animacao()} >
          <Icon name={"close"} size={23} style={{ color: "black" ? "black" : '#000000d1', padding: 10 }} />
        </TouchableOpacity>
      </View>

      <View style={{ padding: 20, position: "relative" }}>

        <Text style={{ fontSize: 32, width: 300, marginBottom: 10, fontWeight: "500" }}>Qual é o valor da <Text style={{ color: "#a031df", fontWeight: "800" }}>transferência?</Text></Text>
        <Text>Saldo disponível em conta <Text style={{ fontSize: 17, fontWeight: "600", color: "#a031df" }}>R$ 1829,80</Text></Text>
        <TextInputMask
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
    </Animated.View>
  )
}

