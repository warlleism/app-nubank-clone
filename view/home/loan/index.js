import { Dimensions, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NavegateTopScreen from "../../../components/topScreenNavegate";
import Icon from "react-native-vector-icons/AntDesign";
import LoanImage from "../../../images/loan.png"
import BottonLine from "../../../components/bottonLine"

const dimensions = Dimensions.get("window")

export default function Loan(props) {
    return (
        <>
            <NavegateTopScreen route={"Home"} icon={"close"} display={props.showCloseTogle ? props.showCloseTogle : ""} />
            <SafeAreaView style={styles.conteinerEmprestimo}>
                <View>
                    <Image source={LoanImage} style={{ width: 170, height: 160 }} />
                    <Text style={{ fontWeight: "600", fontSize: 25, marginBottom: 10 }}>Sem valor disponível para te emprestar</Text>
                    <Text style={{ fontSize: 15, fontSize: 18, color: "#20202094" }}>Mas não se preocupe! Podemos te avisar quando um valor for liberado para você!</Text>
                    <BottonLine />
                    <Text style={{ alignSelf: "center", marginTop: 30, color: "#20202094" }}>Você não possui nenhum empréstimo ativo</Text>
                </View>
                <TouchableOpacity onPress={(() => console.log("teste"))} style={{ alignSelf: "center", alignItems: "center", width: "99%", borderRadius: 50, backgroundColor: "#8734c7", padding: 15 }}>
                    <Text style={{ color: "#ffff", fontWeight: "600", fontSize: 16 }}>Me avisa</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    conteinerEmprestimo: {
        padding: 20,
        marginTop: 60,
        height: dimensions.height - 90,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }
})