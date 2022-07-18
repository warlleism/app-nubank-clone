
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity, View, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NavegateTopScreen(props) {
    const navigation = useNavigation()
    return (
        <>
            <StatusBar backgroundColor={"#a7a7a7"} />
            <View style={{ width: "100%", padding: 15,  display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => navigation.navigate(props.route)}>
                    <Icon name={props.icon} size={23} style={{ color: '#000000d1', padding: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(props.route)}>
                    <Icon name={props.rightIcon} size={23} style={{ color: '#000000d1', padding: 10 }} />
                </TouchableOpacity>
            </View>
        </>
    )
}