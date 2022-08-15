import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NavegateTopScreen from "../../../components/topScreenNavegate"
import NuSocio from "../../../images/nuSocio.png"


export default function PieceNubank() {
    return (
        <SafeAreaView>
            <NavegateTopScreen route={"Home"} icon={"left"} rightIcon={"questioncircleo"} />
            <View style={{ marginTop: 60, padding: 20 }}>
                <Image source={NuSocio} style={{ height: 120, width: 300 }} />
                <Text>Cada pedacinho (BDR) está valendo: </Text>
                <Text>Cada pedacinho (BDR) está valendo: </Text>
            </View>

        </SafeAreaView>
    )

}

const style = StyleSheet.create({

})

