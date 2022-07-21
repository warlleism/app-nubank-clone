import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function Block(props) {

    const navigation = useNavigation()

    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate(props.route)} style={{ backgroundColor: props.backgroundColor? props.backgroundColor : "#ececf5", borderRadius: 10 }}>
                <View style={props.styleContainer}>
                    <Image source={props.firstImg} style={{ width: 30, height: 30 }} />
                    <View style={props.secondContainer}>
                        <Text style={props.firstTextStyle}>{props.firstText}</Text>
                        <Text style={props.secondTextStyle}>{props.secondText}</Text>
                    </View>
                    <Icon name={props.icon} size={16} style={{ color: '#000000d1' }} />
                </View>
            </TouchableOpacity>
        </>
    )
}
