import { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CheckBox } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";
import NavegateTopScreen from "../../../../components/topScreenNavegate";
import Icon from "react-native-vector-icons/AntDesign";

export default function SelectOperator(props) {


    const ScreenHeight = Dimensions.get("window").height

    const ScreenWidth = Dimensions.get("window").width

    const navigation = useNavigation()

    const [button, setButton] = useState(false)

    const [check1, setCheck1] = useState({
        label: "Claro",
        status: false
    });
    const [check2, setCheck2] = useState({
        label: "Oi",
        status: false
    });
    const [check3, setCheck3] = useState({
        label: "TIM",
        status: false
    });
    const [check4, setCheck4] = useState({
        label: "Vivo",
        status: false
    });
    const [check5, setCheck5] = useState({
        label: "Correios",
        status: false
    });

    function setNewValue(dado) {

        switch (dado) {
            case "Claro":
                setButton(true)
                setCheck1({ status: true })
                setCheck2({ status: false })
                setCheck3({ status: false })
                setCheck4({ status: false })
                setCheck5({ status: false })
                break;
            case "Oi":
                setButton(true)
                setCheck1({ status: false })
                setCheck2({ status: true })
                setCheck3({ status: false })
                setCheck4({ status: false })
                setCheck5({ status: false })
                break;
            case "TIM":
                setButton(true)
                setCheck1({ status: false })
                setCheck2({ status: false })
                setCheck3({ status: true })
                setCheck4({ status: false })
                setCheck5({ status: false })
                break;
            case "Vivo":
                setButton(true)
                setCheck1({ status: false })
                setCheck2({ status: false })
                setCheck3({ status: false })
                setCheck4({ status: true })
                setCheck5({ status: false })
                break;
            case "Correios":
                setButton(true)
                setCheck1({ status: false })
                setCheck2({ status: false })
                setCheck3({ status: false })
                setCheck4({ status: false })
                setCheck5({ status: true })
                break;
        }
    }

    return (
        <SafeAreaView>
            <View style={{ position: "relative", height: ScreenHeight, width: ScreenWidth, backgroundColor: "#f2f2f2"}}>
                <NavegateTopScreen route={"Home"} icon={"close"} />
                <View style={{ width: "100%", top: -30, display: "flex", alignItems: "center" }}>
                    <View style={{ backgroundColor: "#4a4848db", width: 160, height: 3, borderRadius: 50 }}>
                        <View style={{ backgroundColor: "#a031df", width: 70, height: 3, borderRadius: 50 }}>
                        </View>
                    </View>
                </View>
                <View style={{ padding: 20, marginTop: -20 }}>
                    <Text style={{ fontSize: 25, fontWeight: "600" }}>Qual é a operadora?</Text>
                    <Text style={{ marginTop: 20, fontSize: 17 }}>{props.numero}</Text>
                </View>
                <View>
                    <CheckBox
                        disabledTitleStyle={{ color: "black" }}
                        containerStyle={{ backgroundColor: "transparent" }}
                        size={40}
                        checkedColor="#a031df"
                        title="Claro"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={check1.status}
                        onPress={() => setNewValue("Claro")}
                    />
                    <CheckBox
                        disabledTitleStyle={{ color: "black" }}
                        containerStyle={{ backgroundColor: "transparent" }}
                        size={40}
                        checkedColor="#a031df"
                        title="Oi"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={check2.status}
                        onPress={() => setNewValue("Oi")}
                    />
                    <CheckBox
                        disabledTitleStyle={{ color: "black" }}
                        containerStyle={{ backgroundColor: "transparent" }}
                        size={40}
                        checkedColor="#a031df"
                        title="TIM"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={check3.status}
                        onPress={() => setNewValue("TIM")}
                    />
                    <CheckBox
                        disabledTitleStyle={{ color: "black" }}
                        containerStyle={{ backgroundColor: "transparent" }}
                        size={40}
                        checkedColor="#a031df"
                        title="Vivo"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={check4.status}
                        onPress={() => setNewValue("Vivo")}
                    />
                    <CheckBox
                        disabledTitleStyle={{ color: "black" }}
                        containerStyle={{ backgroundColor: "transparent" }}
                        size={40}
                        checkedColor="#a031df"
                        title="Correios"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={check5.status}
                        onPress={() => setNewValue("Correios")}
                    />
                </View>
                <TouchableOpacity disabled={button == false ? true : false} onPress={() => navigation.navigate('Operator')} style={{ position: "absolute", bottom: 1, width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                    <Text style={button == false ? styleContent.buttonDesable : styleContent.button}>
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
        backgroundColor: "#a010df",
        textAlign: "center",
        marginRight: 20,
        marginBottom: 30
    },
    buttonDesable: {
        borderRadius: 200 / 2,
        padding: 10,
        backgroundColor: "#4a48486b",
        textAlign: "center",
        marginRight: 20,
        marginBottom: 30

    },
    input: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        padding: 10,
        fontSize: 30,
        marginTop: 20,
    }
})

