import { Image, Text, TouchableOpacity, View, StatusBar } from "react-native";
import NavegateTopScreen from "../../../components/topScreenNavegate"
import Img3 from '../../../images/nuimg3.png'

export default function Cripto() {
    return (
        <>
            <NavegateTopScreen route={"Home"} icon={"left"} rightIcon={"questioncircleo"} />
            <View padding={20}>
                <View>
                    <Text style={{fontSize: 26, fontWeight: "600"}}>Com apenas R$1 você já pode começar</Text>
                    <TouchableOpacity onPress={() => console.log("teste")} style={{marginTop: 30, width: "55%", borderRadius: 200, paddingHorizontal: 20, paddingVertical: 10, backgroundColor: "#600e83" }}>
                        <Text style={{ textAlign: "center", fontWeight: "700", color: "#ffff" }}>Comprar criptomoedas</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => console.log("teste")} style={{backgroundColor: "#00000010", marginTop: 50, borderRadius:10}}>
                    <Image source={Img3} style={{ width: "100%", height: 140, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                    <View style={{padding: 20, width: 230}}>
                        <Text style={{fontSize: 18, fontWeight: "600"}}>Chegou agora?</Text>
                        <Text style={{fontWeight: "300"}}>Separamos algumas informações para te ajudar com os primeiros passos.</Text>
                        <View style={{ width: "60%", borderRadius: 200, paddingHorizontal: 20, paddingVertical: 10, backgroundColor: "#600e83", marginBottom: 10, marginTop: 15 }}>
                            <Text style={{ textAlign: "center", fontWeight: "700", color: "#ffff" }}>Saiba Mais</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <StatusBar backgroundColor={"#f2f2f2"} barStyle="dark-content" />
        </>
    )
}