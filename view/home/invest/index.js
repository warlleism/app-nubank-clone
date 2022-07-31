import { Dimensions, Image, Pressable, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import NavegateTopScreen from "../../../components/topScreenNavegate";
import Imagem from "../../../images/invest.png"

const dimensions = Dimensions.get("window")

export default function Invest(props) {
  return (
    <SafeAreaView>
      <NavegateTopScreen route={"Home"} icon={"close"} display={props.showCloseTogle ? props.showCloseTogle : ""} />
      <View style={{ padding: 20, width: dimensions.width, height: dimensions.height, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <View style={{ alignItems: "flex-start" }}>
          <Image source={Imagem} style={{ width: 140, height: 160, marginBottom: 20 }} />
          <Text style={{ fontWeight: "700", fontSize: 25, marginBottom: 10 }}>Confirme seus dados</Text>
          <Text style={{ fontSize: 15, marginBottom: 10, fontWeight: "300", }}>Para continuar no mundo dos investimentos, precisamos confirmar se os seus dados estão atualizados. É repidinho!</Text>
        </View>
        <TouchableOpacity onPress={(() => console.log("teste"))} style={{ alignSelf: "center", alignItems: "center", width: "99%", marginBottom: 60, borderRadius: 50, backgroundColor: "#8734c7", padding: 15 }}>
          <Text style={{ color: "#ffff", fontWeight: "600", fontSize: 16 }}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}