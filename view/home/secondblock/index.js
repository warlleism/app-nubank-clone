import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import AppButton from "../../../components/button";
import Icon from "react-native-vector-icons/AntDesign";
import Tesseract from '../../../icons/tesseract.png'
import Cartao from '../../../icons/cartao.png'
import Crypto from '../../../icons/crypto.png'
import Coracao from '../../../icons/coracaopiscando.png'
import Img1 from '../../../images/nuimg1.png'
import Img2 from '../../../images/nuimg2.png'
import Img3 from '../../../images/nuimg3.png'
import BottonLine from "../../../components/bottonLine";

export default function secondBlock() {
    return (
        <>
            <View style={{ width: '100%', display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#ffff" }}>
                <BottonLine />
                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                    <View>
                        <Text style={{ marginTop: 5, fontSize: 17, fontWeight: '500' }}>Cartão de crédito</Text>
                        <Text style={{ fontSize: 13, marginTop: 15, fontWeight: '500', color: '#151515c7' }}>Fatura fechada</Text>
                        <Text style={{ marginTop: 5, fontWeight: '500' }}>R$ 262,86</Text>
                        <Text style={{ fontSize: 13, marginTop: 5, fontWeight: '500', color: '#151515c7' }}>Vencimento dia 27</Text>
                        <View style={{ display: "flex", flexDirection: "row", marginTop: 15 }}>
                            <AppButton marginR={6} background={'#d40a0a'} color={'#fff'} titulo={'Pagar fatura'} evento={'testess'} />
                            <AppButton background={'#ececf5'} color={'black'} titulo={'Parcelar'} evento={'testess'} />
                        </View>
                    </View>
                    <TouchableOpacity onPress={console.log("Teste")}>
                        <Icon name="right" size={14} style={{ color: 'black' }} />
                    </TouchableOpacity>
                </View>
                <BottonLine />
                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                    <View>
                        <Text style={{ marginTop: 5, fontSize: 17, fontWeight: '500' }}>Empréstimo</Text>
                        <Text style={{ fontSize: 13, marginTop: 15, fontWeight: '500', color: '#151515c7' }}>Crie um aviso para saber quando um empréstimo fica disponível</Text>
                    </View>
                    <TouchableOpacity onPress={console.log('teste')}>
                        <Icon name="right" size={14} style={{ color: 'black' }} />
                    </TouchableOpacity>
                </View>
                <BottonLine />
                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                    <View>
                        <Text style={{ marginTop: 5, fontSize: 17, fontWeight: '500' }}>Investimentos</Text>
                        <Text style={{ fontSize: 13, marginTop: 15, fontWeight: '500', color: '#151515c7' }}>O jeito Nu de investir: sem asteriscos, linguagem fácil e a partir de R$1. Saiba mais.</Text>
                        <TouchableOpacity onPress={console.log('teste')}><Text style={styleContent.content}><Image source={Tesseract} style={{ width: 27, height: 18 }} />     Meu Pedacinho do Nubank</Text></TouchableOpacity>
                        <TouchableOpacity onPress={console.log('teste')}><Text style={styleContent.content}><Image source={Cartao} style={{ width: 27, height: 18 }} />     Consultar saldo para transferência</Text></TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={console.log('teste')}>
                        <Icon name="right" size={14} style={{ color: 'black' }} />
                    </TouchableOpacity>
                </View>
                <BottonLine />
                <View width={'100%'} padding={20}>
                    <Image source={Crypto} style={{ width: 30, height: 30 }} />
                    <Text style={{ fontSize: 20, marginTop: 15 }}>Cripto</Text>
                    <Text style={{ fontSize: 13, marginTop: 15, fontWeight: '500', color: '#151515c7' }}>Compre para você cuidar do que importa</Text>
                </View>
                <BottonLine />
                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                    <View style={{ width: '100%' }}>
                        <Text style={{ marginTop: 5, fontSize: 17, fontWeight: '500' }}>Seguros</Text>
                        <Text style={{ fontSize: 13, marginTop: 15, fontWeight: '500', color: '#151515c7' }}>Proteção para você cuidar do que importa</Text>
                        <TouchableOpacity onPress={console.log('teste')}><Text style={styleContent.content}><Image source={Coracao} style={{ width: 23, height: 23 }} />     Seguro vida                                              <Text style={{ color: '#a031df' }}>Conhecer</Text></Text></TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={console.log('teste')}>
                        <Icon name="right" size={14} style={{ color: 'black' }} />
                    </TouchableOpacity>
                </View>
                <BottonLine />
                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                    <View style={{ width: '100%' }}>
                        <Text style={{ marginTop: 5, fontSize: 17, fontWeight: '500' }}>Shopping</Text>
                        <Text style={{ fontSize: 13, marginTop: 15, fontWeight: '500', color: '#151515c7' }}>Vantagens exclusivas das nossas marcas preferidas</Text>
                    </View>
                    <TouchableOpacity onPress={console.log('teste')}>
                        <Icon name="right" size={14} style={{ color: 'black' }} />
                    </TouchableOpacity>
                </View>
                <BottonLine />

                <ScrollView scrollEventThrottle={16}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ padding: 20 }}>
                            <Text style={{ marginBottom: 20, fontSize: 17, fontWeight: '500' }}>Descubra mais</Text>
                            <View style={{ display: "flex", flexDirection: "row" }}>

                                <TouchableOpacity style={{ width: 200, backgroundColor: '#ececf5' }}>
                                    <Image style={styleContent.imagem} source={Img1} />
                                    <View padding={15}>
                                        <Text style={{ fontWeight: "500" }}>Conta PJ</Text>
                                        <Text style={{ color: "#151515c7", width: "100%", height: 60 }}>A gente te ajuda a gerenciar seuas finanças de um jeito fácil ...</Text>
                                        <Text style={styleContent.button}>Pedir conta PJ</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: 200, marginLeft: 10, backgroundColor: '#ececf5' }}>
                                    <Image style={styleContent.imagem} source={Img3} />
                                    <View padding={15}>
                                        <Text style={{ fontWeight: "500" }}>Indique seus amigos</Text>
                                        <Text style={{ color: "#151515c7", width: "100%", height: 60 }}>Mostre aos seus amigos como é fácil ter uma vida sem ...</Text>
                                        <Text style={styleContent.button}>Indicar amigos</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: 200, marginLeft: 10, backgroundColor: '#ececf5' }}>
                                    <Image style={styleContent.imagem} source={Img2} />
                                    <View padding={15}>
                                        <Text style={{ fontWeight: "500" }}>WhatsAppJ</Text>
                                        <Text style={{ color: "#151515c7", width: "100%", height: 60 }}>Pagamentos seguros, rápidos e sem tarifa. A experiência ...</Text>
                                        <Text style={styleContent.button}>Quero conhecer</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: 200, marginLeft: 10, backgroundColor: '#ececf5' }}>
                                    <Image style={styleContent.imagem} source={Img2} />
                                    <View padding={15}>
                                        <Text style={{ fontWeight: "500" }}>Parcele comprar no app</Text>
                                        <Text style={{ color: "#151515c7", width: "100%", height: 60 }}>Divida comprar feitas à vista no crédito em até 12x</Text>
                                        <Text style={styleContent.button}>Conhecer</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ScrollView>
                </ScrollView>

            </View>
        </>
    )
}

const styleContent = StyleSheet.create({
    content: {
        fontSize: 13,
        marginTop: 15,
        fontWeight: '500',
        color: 'black',
        backgroundColor: '#ececf5',
        padding: 15,
        borderRadius: 7
    },
    imagem: {
        width: "100%",
        height: 100,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    button: {
        marginTop: 15,
        textAlign: "center",
        width: "73%",
        color: "#ffff",
        fontWeight: "800",
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: "#7502a3",
        borderRadius: 40
    }
})


