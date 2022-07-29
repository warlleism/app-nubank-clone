
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NavegateTopScreen(props) {
    const navigation = useNavigation()
    return (
        <>
            <View style={{ width: "100%",  display: props.display ? props.display : "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: props.backgroundColor }}>
                <TouchableOpacity onPress={() => navigation.navigate(props.route)} >
                    <Icon name={props.icon} size={23} style={{ color: props.color ? props.color : '#000000d1', padding: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(props.route)}>
                    <Icon name={props.rightIcon} size={23} style={{ color: props.color ? props.color : '#000000d1', padding: 10 }} />
                </TouchableOpacity>
            </View>
        </>
    )
}