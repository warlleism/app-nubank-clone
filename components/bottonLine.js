import { StyleSheet, View } from "react-native"

export default function bottonLine() {
    return (
        <>
            <View style={styleContent.line}></View>
        </>
    )
}

const styleContent = StyleSheet.create({
    line: {
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        height: 1,
        backgroundColor: '#35353740'
    }
})

