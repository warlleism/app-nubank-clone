import { View } from "react-native"

export default function bottonLine(props) {
    return (
        <>
            <View style={{ marginBottom: props.marginBotton ? props.marginBotton : 20, marginTop: props.marginTop ? props.marginTop : 20, width: '100%', height: 1, backgroundColor: '#35353740' }}></View>
        </>
    )
}

