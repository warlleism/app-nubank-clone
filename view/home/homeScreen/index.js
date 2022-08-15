import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FirstBlock from "../firstBlock/index";
import SecondBlock from "../secondblock/index";
import Data from "../data.json"

export default function Home() {

    const navigation = useNavigation();
    const [showMoney, setShowMoney] = useState(true)

    //Lógica para mostrar ou não do valor monetário da conta
    const showMoneyFunction = () => {
        setShowMoney(!showMoney)
    }

    const initialData = {
        name: ""
    }

    const [data, setData] = useState(initialData)


    const getData = () => {
        Data.data.map((e) => {
            e.user.map(e => setData({
                name: e.name
            }))
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <SafeAreaView>
            <ScrollView scrollEventThrottle={16} style={{ backgroundColor: "#8734c7" }}>
                <View style={conainerTop.container}>
                    <View style={conainerTop.containerIcons}>
                        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                            <Icon name="user" size={23} style={{ color: '#fff', backgroundColor: '#a031df', borderRadius: 23, padding: 10, marginTop: -14 }} />
                        </TouchableOpacity>
                        <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '60%' }} >
                            <TouchableOpacity onPress={() => showMoneyFunction()}>
                                {showMoney ? <Icon name="eye" size={23} style={{ marginRight: '16%', color: '#fff' }} /> : <Icon name="eyeo" size={23} style={{ marginRight: '16%', color: '#fff' }} />}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => console.log('teste')}>
                                <Icon name="questioncircleo" size={23} style={{ marginRight: '16%', color: '#fff' }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => console.log('teste')}>
                                <Icon name="adduser" size={23} style={{ color: '#fff', marginRight: '16%' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: '#fff', marginTop: '-10%', marginLeft: '5%', fontSize: 20 }}>Olá, {data.name}</Text>
                    </View>
                </View>
                <FirstBlock showMoney={showMoney} />
                <SecondBlock />
            </ScrollView>
            <StatusBar backgroundColor={"#8734c7"} />
        </SafeAreaView>
    )
}

const conainerTop = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#8734c7',
        height: 130,
    },
    containerIcons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 13,
        padding: 20
    },

});

