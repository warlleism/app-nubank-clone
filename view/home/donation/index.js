import { Dimensions, Image, Pressable, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import NavegateTopScreen from "../../../components/topScreenNavegate";
import Icon from "react-native-vector-icons/AntDesign";
import Imagem from "../../../images/Imagem.png"

const dimensions = Dimensions.get("window")

export default function Donation(props) {
    return (
        <>
            <NavegateTopScreen route={"Home"} icon={"close"}  display={props.showCloseTogle ? props.showCloseTogle : ""} />
            <SafeAreaView>
                <View style={{ marginTop: 60, padding: 20, width: dimensions.width, height: dimensions.height, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <View>
                        <Image source={Imagem} style={{ width: 100, height: 160 }} />
                        <Text style={{ fontWeight: "600", fontSize: 25, marginBottom: 10 }}>Doe usando seu cartão de crédito</Text>
                        <Text style={{ fontSize: 15, marginBottom: 10, fontWeight: "300" }}>Ajude a combater o coronavirus com apenas alguns cliques!</Text>
                        <Text style={{ fontSize: 15, marginBottom: 30, fontWeight: "300"  }}>Agora você pode fazer doações usando o cartão de crédito, direto no seu aplicativo. Basta escolher a instituição e o valor e confirmar sua doação.</Text>

                        <Pressable style={{ display: "flex", flexDirection: "row" }}>
                            <Text style={{ fontSize: 15, color: "#8734c7" }}>Saiba Mais   </Text>
                            <Icon name="arrowright" size={23} style={{ color: '#8734c7' }} />
                        </Pressable>
                    </View>
                    <TouchableOpacity onPress={(() => console.log("teste"))} style={{ alignSelf: "center", alignItems: "center", width: "99%", marginBottom: 70, borderRadius: 50, backgroundColor: "#8734c7", padding: 15 }}>
                        <Text style={{ color: "#ffff", fontWeight: "600", fontSize: 16 }}>Fazer doação</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}