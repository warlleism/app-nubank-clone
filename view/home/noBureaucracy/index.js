import { ScrollView } from "react-native";
import { Dimensions, Image, StyleSheet, TouchableOpacity, View, SafeAreaView, Text } from "react-native";
import NavegateTopScreen from "../../../components/topScreenNavegate";
import Brasao1 from "../../../images/brasao1.png"
import Brasao2 from "../../../images/brasao2.png"
import Brasao3 from "../../../images/brasao3.png"
import Brasao4 from "../../../images/brasao4.png"

const width = Dimensions.get("window").width

const height = Dimensions.get("window").height

export default function NoBureaucracy(props) {
    return (
        <>
            <NavegateTopScreen route={"Home"} icon={"left"} display={props.showCloseTogle ? props.showCloseTogle : ""} />
            <ScrollView>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 27, fontWeight: "600" }}>Convide seus amigos para o Nubank</Text>
                    <Text style={{ fontSize: 16, fontWeight: "100" }}>Salve amigos e familiares da burocracia. para cada convite aceito, um novo brasão é liberado</Text>
                </View>

                <View style={{ marginBottom: 100, width: width }}>
                    <View style={{ display: "flex", flexDirection: "row", alignSelf: "center" }}>
                        <Image source={Brasao2} style={{ width: 190, height: 220 }} />
                        <Image source={Brasao2} style={{ width: 190,marginLeft: 14, height: 220 }} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignSelf: "center" }}>
                        <Image source={Brasao2} style={{ width: 190, height: 220 }} />
                        <Image source={Brasao2} style={{ width: 190,marginLeft: 14, height: 220 }} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignSelf: "center" }}>
                        <Image source={Brasao2} style={{ width: 190, height: 220 }} />
                        <Image source={Brasao2} style={{ width: 190,marginLeft: 14, height: 220 }} />
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => console.log("teste")} style={styles.containerButtonStyle}>
                <Text style={styles.buttonStyle}>Convidar amigos</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    containerButtonStyle: {
        position: "absolute",
        alignSelf: "center",
        bottom: 0,
        marginBottom: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonStyle: {
        backgroundColor: "#8734c7",
        fontSize: 16, color: "#ffff",
        fontWeight: "700",
        paddingHorizontal: 80,
        paddingVertical: 10,
        borderRadius: 20
    }
})