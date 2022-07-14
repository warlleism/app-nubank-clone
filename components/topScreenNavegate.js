
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity, View, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NavegateTopScreen(props) {
    const navigation = useNavigation()
    return (
        <>
            <StatusBar backgroundColor={"#a7a7a7"} />
            <View style={{ width: "100%", padding: 15,  display: "flex", flexDirection: "row", justifyContent: "space-between"  }}>
                <TouchableOpacity onPress={() => navigation.navigate(props.route)}>
                    <Icon name="left" size={20} style={{ color: '#000000d1' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(props.route)}>
                    <Icon name="questioncircleo" size={20} style={{ color: '#000000d1' }} />
                </TouchableOpacity>
            </View>
        </>
    )
}