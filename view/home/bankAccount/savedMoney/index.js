import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import NavegateTopScreen from "../../../../components/topScreenNavegate";
import Icon from "react-native-vector-icons/AntDesign";
import BottonLine from "../../../../components/bottonLine";
import Block from "../../../../components/block";
import Investir from "../../../../icons/investir.png"
import Money from "../../../../icons/money.png"
import AppButton from "../../../../components/button";
import { useNavigation } from "@react-navigation/native";

export default function SavedMoney() {

    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <NavegateTopScreen route={"Account"} icon={"close"} rightIcon={"questioncircleo"} />
            <View style={{ padding: 20, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "94%" }}>
                <View>
                    <View>
                        <Text style={{ fontSize: 14, fontWeight: "600" }}>Total guardado</Text>
                        <Text style={{ fontSize: 24, fontWeight: "500" }}>R$ 0,00</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Account")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 40 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Image source={Money} style={{ width: 40, height: 38, marginRight: 20 }} />
                            <Text style={{ width: 120 }}>Disponível a qualquer momento</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
                            <Text style={{ fontSize: 17, color: "#000000d1" }}>R$ 0,00</Text>
                            <Icon name="right" size={16} style={{ color: '#000000d1', marginLeft: 10 }} />
                        </View>
                    </TouchableOpacity>
                    <BottonLine />
                </View>
                <View>
                    <Block
                        route={"Account"}
                        firstImg={Investir}
                        icon={"right"}
                        firstText={"Explore outras opções de"}
                        secondText={"investimentos a partir de R$1"}
                        secondTextStyle={{ color: "#530889" }}
                        styleContainer={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: 25
                        }} />
                    <BottonLine />
                    <AppButton titulo={"Guardar"} marginBotton={20} background={"#530889"} color={"#ffff"} weight={"700"} pVertical={16} />
                </View>
            </View>
        </SafeAreaView>
    )
}