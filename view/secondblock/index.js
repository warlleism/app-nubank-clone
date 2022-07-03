import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AppButton from "../../components/button";
import Icon from "react-native-vector-icons/AntDesign";

export default function secondBlock() {
    return (
        <>
            <View style={{ width: '100%', display: "flex", flexDirection: "column", alignItems: "center" }}>
                <View style={{ width: '100%', height: 2, backgroundColor: '#ececf5' }}></View>
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
                    <View>
                        <Icon name="right" size={14} style={{ color: 'black' }} />
                    </View>
                </View>
                <View style={{ width: '100%', height: 2, backgroundColor: '#ececf5' }}></View>
                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                    <View>
                        <Text style={{ marginTop: 5, fontSize: 17, fontWeight: '500' }}>Empréstimo</Text>
                        <Text style={{ fontSize: 13, marginTop: 15, fontWeight: '500', color: '#151515c7' }}>Crie um aviso para saber quando um empréstimo fica disponível</Text>
                    </View>
                    <View>
                        <Icon name="right" size={14} style={{ color: 'black' }} />
                    </View>
                </View>
                <View style={{ width: '100%', height: 2, backgroundColor: '#ececf5' }}></View>
                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                    <View>
                        <Text style={{ marginTop: 5, fontSize: 17, fontWeight: '500' }}>Investimentos</Text>
                        <Text style={{ fontSize: 13, marginTop: 15, fontWeight: '500', color: '#151515c7' }}>O jeito Nu de investir: sem asteriscos, linguagem fácil e a partir de R$1. Saiba mais.</Text>
                        <TouchableOpacity onPress={console.log('teste')}><Text style={styleContent.content}>Meu Pedacinho do Nubank</Text></TouchableOpacity>
                        <TouchableOpacity onPress={console.log('teste')}><Text style={styleContent.content}>Consultar saldo para transferência</Text></TouchableOpacity>
                    </View>
                    <View>
                        <Icon name="right" size={14} style={{ color: 'black' }} />
                    </View>
                </View>

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
    }
})


