import { TouchableOpacity, Text } from "react-native";

const AppButton = (props) =>
(
    <TouchableOpacity onPress={console.log(props.evento)}>
        <Text style={{
            paddingVertical: props.pVertical ? props.pVertical : 6,
            paddingHorizontal: props.pHorizontal ? props.pHorizontal : 14,
            textAlign: "center",
            fontSize: props.fontSize ? props.fontSize : 14,
            borderColor: '#fff',
            color: props.color,
            borderRadius: props.radius ? props.radius : 100,
            fontWeight: props.weight ? props.weight : '400',
            marginRight: props.marginR,
            backgroundColor: props.background,
            marginBottom: props.marginBotton
        }}>{props.titulo}</Text>
    </TouchableOpacity>
);



export default AppButton;