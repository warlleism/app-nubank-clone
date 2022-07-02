import { View, Text, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function corpoTopo() {
    return (
        <>
            <View style={{ width: '100%', display: "flex", flexDirection: "column" }}>

                <View style={styleContainerCorpoTop.containerCorpoTop}>
                    <View>
                        <View><Text style={styleContainerCorpoTop.textoContent}>Conta</Text></View>
                        <View><Text style={styleContainerCorpoTop.textoContent}>R$ 0,00</Text></View>
                    </View>
                    <View>
                        <Icon name="right" size={14} style={{ color: 'black' }} />
                    </View>
                </View>

                <ScrollView scrollEventThrottle={16}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ display: "flex", flexDirection: "row", marginTop: 40 }}>
                        <View style={styleContainerCorpoTop.viewContentIcon}>
                            <Icon name="downcircleo" size={24} style={styleContainerCorpoTop.iconContentIcon} />
                            <Text style={styleContainerCorpoTop.textoContentIcons}>Área Pix</Text>
                        </View>
                        <View style={styleContainerCorpoTop.viewContentIcon}>
                            <Icon name="downcircleo" size={24} style={styleContainerCorpoTop.iconContentIcon} />
                            <Text style={styleContainerCorpoTop.textoContentIcons}>Pagar</Text>
                        </View>
                        <View style={styleContainerCorpoTop.viewContentIcon}>
                            <Icon name="downcircleo" size={24} style={styleContainerCorpoTop.iconContentIcon} />
                            <Text style={styleContainerCorpoTop.textoContentIcons}>Transferir</Text>
                        </View>
                        <View style={styleContainerCorpoTop.viewContentIcon}>
                            <Icon name="downcircleo" size={24} style={styleContainerCorpoTop.iconContentIcon} />
                            <Text style={styleContainerCorpoTop.textoContentIcons}>Depositar</Text>
                        </View>
                        <View style={styleContainerCorpoTop.viewContentIcon}>
                            <Icon name="downcircleo" size={24} style={styleContainerCorpoTop.iconContentIcon} />
                            <Text style={{ fontSize: 18, width: 100, textAlign: "center", marginTop: 5 }}>Recarga de celular</Text>
                        </View>
                        <View style={styleContainerCorpoTop.viewContentIcon}>
                            <Icon name="downcircleo" size={24} style={styleContainerCorpoTop.iconContentIcon} />
                            <Text style={styleContainerCorpoTop.textoContentIcons}>Cobrar</Text>
                        </View>
                        <View style={styleContainerCorpoTop.viewContentIcon}>
                            <Icon name="downcircleo" size={24} style={styleContainerCorpoTop.iconContentIcon} />
                            <Text style={styleContainerCorpoTop.textoContentIcons}>Doação</Text>
                        </View>
                        <View style={styleContainerCorpoTop.viewContentIcon}>
                            <Icon name="downcircleo" size={24} style={styleContainerCorpoTop.iconContentIcon} />
                            <Text style={{ fontSize: 18, width: 100, textAlign: "center", marginTop: 5 }}>Tranferir internac.</Text>
                        </View>
                        <View style={styleContainerCorpoTop.viewContentIcon}>
                            <Icon name="downcircleo" size={24} style={styleContainerCorpoTop.iconContentIcon} />
                            <Text style={styleContainerCorpoTop.textoContentIcons}>Investir</Text>
                        </View>
                    </ScrollView>
                </ScrollView>

            </View>
        </>
    )
}

const styleContainerCorpoTop = StyleSheet.create({
    containerCorpoTop: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20
    },
    textoContent: {
        fontSize: 18,
    },
    viewContentIcon: {
        display: "flex",
        alignItems: "center",
        marginLeft: 8,
        marginRight: 8,
        width: 100
    },
    iconContentIcon:{
        color: 'black',
         backgroundColor:'#e2dde4',
           padding: 20, 
          borderRadius: 100
    },
    textoContentIcons: {
        fontSize: 18,
        marginTop: 5
    }

})

