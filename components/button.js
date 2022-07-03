import { TouchableOpacity, Text } from "react-native";

const AppButton = (props) =>
(
    <TouchableOpacity onPress={console.log(props.evento)}>
        <Text style={{
            paddingVertical: 6,
            paddingHorizontal: 14,
            textAlign: "center",
            fontSize: 14,
            borderColor: '#fff',
            color: props.color,
            borderRadius: 100,
            fontWeight: '400',
            marginRight:props.marginR,
            backgroundColor: props.background
        }}>{props.titulo}</Text>
    </TouchableOpacity>
);



export default AppButton;