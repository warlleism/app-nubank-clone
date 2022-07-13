import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import AppButton from "../../components/button";
import Icon from "react-native-vector-icons/AntDesign";
import Tesseract from '../../icones/tesseract.png'
import Cartao from '../../icones/cartao.png'
import Crypto from '../../icones/crypto.png'
import Coracao from '../../icones/coracaopiscando.gif'
import Img1 from '../../imagens/nuimg1.png'
import Img2 from '../../imagens/nuimg2.png'
import Img3 from '../../imagens/nuimg3.png'

export default function secondBlock({navigation}) {


    return (
        <>
            <View style={{ width: '100%', display: "flex", flexDirection: "column", alignItems: "center" }}>
                <View style={styleContent.line}></View>
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
                <View style={styleContent.line}></View>
                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                    <View>
                        <Text style={{ marginTop: 5, fontSize: 17, fontWeight: '500' }}>Empréstimo</Text>
                        <Text style={{ fontSize: 13, marginTop: 15, fontWeight: '500', color: '#151515c7' }}>Crie um aviso para saber quando um empréstimo fica disponível</Text>
                    </View>
                    <TouchableOpacity onPress={console.log('teste')}>
                        <Icon name="right" size={14} style={{ color: 'black' }} />
                    </TouchableOpacity>
                </View>
                <View style={styleContent.line}></View>
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
                <View style={styleContent.line}></View>
                <View width={'100%'} padding={20}>
                    <Image source={Crypto} style={{ width: 30, height: 30 }} />
                    <Text style={{ fontSize: 20, marginTop: 15 }}>Cripto</Text>
                    <Text style={{ fontSize: 13, marginTop: 15, fontWeight: '500', color: '#151515c7' }}>Compre para você cuidar do que importa</Text>
                </View>
                <View style={styleContent.line}></View>
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
                <View style={styleContent.line}></View>
                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                    <View style={{ width: '100%' }}>
                        <Text style={{ marginTop: 5, fontSize: 17, fontWeight: '500' }}>Shopping</Text>
                        <Text style={{ fontSize: 13, marginTop: 15, fontWeight: '500', color: '#151515c7' }}>Vantagens exclusivas das nossas marcas preferidas</Text>
                    </View>
                    <TouchableOpacity onPress={console.log('teste')}>
                        <Icon name="right" size={14} style={{ color: 'black' }} />
                    </TouchableOpacity>
                </View>
                <View style={styleContent.line}></View>

                <ScrollView scrollEventThrottle={16}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ padding: 20 }}>
                            <Text style={{ marginBottom: 20, fontSize: 17, fontWeight: '500' }}>Descubra mais</Text>
                            <View style={{ display: "flex", flexDirection: "row" }}>

                                <TouchableOpacity style={{ width: 200, backgroundColor: '#ececf5' }}>
                                    <Image style={styleContent.imagem} source={Img1} />
                                    <View padding={15}>
                                        <Text>Conta PJ</Text>
                                        <Text>A gente te ajuda a gerenciar seuas finanças de um jeito fácil ...</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: 200, marginLeft: 10, backgroundColor: '#ececf5' }}>
                                    <Image style={styleContent.imagem} source={Img3} />
                                    <View padding={15}>
                                        <Text>Conta PJ</Text>
                                        <Text>A gente te ajuda a gerenciar seuas finanças de um jeito fácil ...</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: 200, marginLeft: 10, backgroundColor: '#ececf5' }}>
                                    <Image style={styleContent.imagem} source={Img2} />
                                    <View padding={15}>
                                        <Text>Conta PJ</Text>
                                        <Text>A gente te ajuda a gerenciar seuas finanças de um jeito fácil ...</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: 200, marginLeft: 10, backgroundColor: '#ececf5' }}>
                                    <Image style={styleContent.imagem} source={Img2} />
                                    <View padding={15}>
                                        <Text>Conta PJ</Text>
                                        <Text>A gente te ajuda a gerenciar seuas finanças de um jeito fácil ...</Text>
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
    line: {
        width: '100%',
        height: 2,
        backgroundColor: '#ececf5'
    },
    imagem: {
        width: "100%",
        height: 100,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    }
})


