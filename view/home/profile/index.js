import NavegateTopScreen from "../../../components/topScreenNavegate";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Image, SafeAreaView } from "react-native";
import BottonLine from "../../../components/bottonLine"
import Icon from "react-native-vector-icons/AntDesign";
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

    const data = [
        {
            img: MeAjuda,
            dsc: "Me ajude"
        },
        {
            img: Perfil,
            dsc: "Editar dados do Perfil"
        },
        {
            img: Rendimentos,
            dsc: "informar rendimentos"
        },
        {
            img: Configurar,
            dsc: "Configurar app"
        },
        {
            img: Seguranca,
            dsc: "Segurança"
        },
        {
            img: Pix,
            dsc: "Configurar chaves Pix"
        },
        {
            img: ContaPJ,
            dsc: "Pedir conta PJ"
        },
        {
            img: Notificacao,
            dsc: "Notificações"
        },
        {
            img: ConfigurarCartao,
            dsc: "Configurar Cartão"
        },
        {
            img: ConfigurarInvestimento,
            dsc: "Configurar perfil de investimentos"
        },
        {
            img: Sobre,
            dsc: "Sobre"
        },
        {
            img: Sair,
            dsc: "Sair do aplicativo"
        },
    ]

    return (
        <SafeAreaView>
            <ScrollView style={{ display: "flex", flexDirection: "column", backgroundColor: "#712F79" }}>
                <NavegateTopScreen route={"Home"} icon={"close"} color={"#ffff"} backgroundColor={"#712F79"} />
                <View style={{ padding: 20, backgroundColor: "#712F79" }}>
                    <Icon name="user" size={23} style={{ display: "flex", textAlign: "center", width: "13%", color: '#fff', backgroundColor: '#a031df', borderRadius: 23, padding: 10 }} />
                    <Text style={{ marginTop: 30, fontWeight: "700", color: "#ffff" }}>Agência 0001 . Conta 4125268-0</Text>
                    <Text style={{ fontWeight: "700", color: "#ffff" }}>Banco 0260 . Nu Pagamentos S.A - Instituição de Pagamento</Text>
                </View>
                <View style={{ backgroundColor: "#ffff" }}>
                    {
                        data.map((e) => {
                            return (
                                <>
                                    <TouchableOpacity onPress={() => console.log("teste")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }} key={e.dsc}>
                                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                            <Image source={e.img} style={{ width: 35, height: 35 }} />
                                            <Text style={{ fontWeight: "600", marginLeft: 20 }}>{e.dsc}</Text>
                                        </View>
                                        <Icon name="right" size={16} style={{ color: '#000000d1' }} />
                                    </TouchableOpacity>
                                    <BottonLine marginTop={-1} marginBotton={1} />
                                </>
                            )
                        })
                    }
                </View>
            </ScrollView>

            <StatusBar backgroundColor="#712F79" />
        </SafeAreaView>
    )
}
