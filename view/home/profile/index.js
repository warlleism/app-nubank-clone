import NavegateTopScreen from "../../../components/topScreenNavegate";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Image, SafeAreaView } from "react-native";
import BottonLine from "../../../components/bottonLine"
import Icon from "react-native-vector-icons/AntDesign";
import Investir from "../../../icons/investir.png"
import MeAjuda from "../../../icons/meAjuda.png"
import Perfil from "../../../icons/perfil.png"
import Rendimentos from "../../../icons/rendimentos.png"
import Configurar from "../../../icons/configurar.png"
import Seguranca from "../../../icons/seguranca.png"
import Pix from "../../../icons/pix.png"
import ContaPJ from "../../../icons/contaPJ.png"
import Notificacao from "../../../icons/Notificacao.png"
import ConfigurarCartao from "../../../icons/configurarCartao.png"
import ConfigurarInvestimento from "../../../icons/configurarInvestimento.png"
import Sobre from "../../../icons/Sobre.png"
import Sair from "../../../icons/Sair.png"

export default function Profile() {
    return (
        <SafeAreaView>
            <ScrollView style={{ display: "flex", flexDirection: "column", backgroundColor: "#712F79" }}>
                <NavegateTopScreen route={"Home"} icon={"close"} color={"#ffff"} backgroundColor={"#712F79"} />
                <View style={{ padding: 20, backgroundColor: "#712F79" }}>
                    <Icon name="user" size={23} style={{ display: "flex", textAlign: "center", width: "13%", color: '#fff', backgroundColor: '#a031df', borderRadius: 23, padding: 10 }} />
                    <Text style={{ marginTop: 30, fontWeight: "700", color: "#ffff" }}>Agência 0001 . Conta 4125268-0</Text>
                    <Text style={{ fontWeight: "700", color: "#ffff" }}>Banco 0260 . Nu Pagamentos S.A - Instituição de Pagamento</Text>
                </View>
                <View style={{backgroundColor: "#ffff"}}>
                    <TouchableOpacity onPress={() => console.log("teste")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={MeAjuda} style={{ width: 35, height: 35 }} />
                            <Text style={{ fontWeight: "600", marginLeft: 20 }}>Me ajude</Text>
                        </View>
                        <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                    </TouchableOpacity>
                    <BottonLine marginTop={-1} marginBotton={1} />
                    <TouchableOpacity onPress={() => console.log("teste")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={Perfil} style={{ width: 35, height: 35 }} />
                            <Text style={{ fontWeight: "600", marginLeft: 20 }}>Editar dados do Perfil</Text>
                        </View>
                        <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                    </TouchableOpacity>
                    <BottonLine marginTop={-1} marginBotton={1} />
                    <TouchableOpacity onPress={() => console.log("teste")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={Rendimentos} style={{ width: 35, height: 35 }} />
                            <Text style={{ fontWeight: "600", marginLeft: 20 }}>Informe de rendimentos</Text>
                        </View>
                        <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                    </TouchableOpacity>
                    <BottonLine marginTop={-1} marginBotton={1} />
                    <TouchableOpacity onPress={() => console.log("teste")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={Configurar} style={{ width: 35, height: 35 }} />
                            <Text style={{ fontWeight: "600", marginLeft: 20 }}>Configurar app</Text>
                        </View>
                        <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                    </TouchableOpacity>
                    <BottonLine marginTop={-1} marginBotton={1} />
                    <TouchableOpacity onPress={() => console.log("teste")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={Seguranca} style={{ width: 35, height: 35 }} />
                            <Text style={{ fontWeight: "600", marginLeft: 20 }}>Segurança</Text>
                        </View>
                        <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                    </TouchableOpacity>
                    <BottonLine marginTop={-1} marginBotton={1} />
                    <TouchableOpacity onPress={() => console.log("teste")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={Pix} style={{ width: 35, height: 35 }} />
                            <Text style={{ fontWeight: "600", marginLeft: 20 }}>Configurar chaves Pix</Text>
                        </View>
                        <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                    </TouchableOpacity>
                    <BottonLine marginTop={-1} marginBotton={1} />
                    <TouchableOpacity onPress={() => console.log("teste")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={ContaPJ} style={{ width: 35, height: 35 }} />
                            <Text style={{ fontWeight: "600", marginLeft: 20 }}>Pedir conta PJ</Text>
                        </View>
                        <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                    </TouchableOpacity>
                    <BottonLine marginTop={-1} marginBotton={1} />
                    <TouchableOpacity onPress={() => console.log("teste")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={Notificacao} style={{ width: 35, height: 35 }} />
                            <Text style={{ fontWeight: "600", marginLeft: 20 }}>Notificações</Text>
                        </View>
                        <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                    </TouchableOpacity>
                    <BottonLine marginTop={-1} marginBotton={1} />
                    <TouchableOpacity onPress={() => console.log("teste")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={ConfigurarCartao} style={{ width: 35, height: 35 }} />
                            <Text style={{ fontWeight: "600", marginLeft: 20 }}>Configurar cartão</Text>
                        </View>
                        <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                    </TouchableOpacity>
                    <BottonLine marginTop={-1} marginBotton={1} />
                    <TouchableOpacity onPress={() => console.log("teste")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={ConfigurarInvestimento} style={{ width: 35, height: 35 }} />
                            <Text style={{ fontWeight: "600", marginLeft: 20 }}>Configurar perfil de investimentos</Text>
                        </View>
                        <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                    </TouchableOpacity>
                    <BottonLine marginTop={-1} marginBotton={1} />
                    <TouchableOpacity onPress={() => console.log("teste")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={Sobre} style={{ width: 35, height: 35 }} />
                            <Text style={{ fontWeight: "600", marginLeft: 20 }}>Sobre</Text>
                        </View>
                        <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                    </TouchableOpacity>
                    <BottonLine marginTop={-1} marginBotton={1} />
                    <TouchableOpacity onPress={() => console.log("teste")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={Sair} style={{ width: 35, height: 35 }} />
                            <Text style={{ fontWeight: "600", marginLeft: 20 }}>Sair do aplicativo</Text>
                        </View>
                        <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                    </TouchableOpacity>
                    <BottonLine marginTop={-1} marginBotton={1} />
                </View>
            </ScrollView>

            <StatusBar backgroundColor="#712F79"  />
        </SafeAreaView>
    )
}
