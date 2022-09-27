import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, Image, Alert, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import app from '../../services/firebaseConnect';
import cards from '../../../assets/listas/cards.json';
import { initializeFirestore, collection, query, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { onChange } from 'react-native-reanimated';


export default function Cardpage(props) {
    
    

    // console.log(props.route.params) 

    // const [idColecao] = useState(props.route.params.idCol2) -> tentativa falha de capturar id da coleção para atribuir ao card
    

    const [card_list, setCard_list] = useState(); //armazenamento dos cartões salvos no firebase
    const [searchList, setSearchList] = useState() //base de dados para efetuar a busca
    const [StringBusca, setStringBusca] = useState('') //termo usado para filtrar a busca

    const db = initializeFirestore(app, { experimentalForceLongPolling: true });
    const flashcardCollection = collection(db, 'flashcard');

    useEffect(() => {
        const queue = query(flashcardCollection);
        const unsubscribe = onSnapshot(queue, (snapshot) => {
            const flashcard = []
            snapshot.forEach((doc) => {
                flashcard.push({
                    id: doc.id, ...doc.data()
                });

            })
            setCard_list(flashcard);

            if(StringBusca === ''){
                //retorna a lista completa se o campo estiver vazio
                //apresenta algumas falhas de animação quando um cartão for adicionado
                setSearchList(flashcard)
            }
            else{
                setSearchList(
                    card_list.filter(item => (
                    (item.frente.toLowerCase().indexOf(StringBusca.toLowerCase()) > -1)
                    ||
                    (item.verso.toLowerCase().indexOf(StringBusca.toLowerCase()) > -1)
                    ))
                );
            }
            
        })
    }, [StringBusca]) //recebe termo contido no campo de texto

//função do botão de deletar
    const deletar = (id) => {
        Alert.alert(
            "você tem certeza que deseja excluir este cartão?",
            "",
            [{
                text: "sim",
                onPress: () => deleteDoc(doc(db, "flashcard", id)),
            },
            {
                text: "cancelar",
                onPress: () => { },
            }]
        )
    }

    const item_flashcard = ({ item }) => {
        return (


            //modelo base do cartão

            <View style={styles.containerfc}>
                <View>
                    <View>
                        <Text style={styles.textotitulo}>Frente:</Text>
                    </View>
                    <View style={styles.areatexto}>
                        <Text style={styles.texto}>{item.frente}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.textotitulo}>Verso:</Text>
                    </View>
                    <View style={styles.areatexto}>
                        <Text style={styles.texto}>{item.verso}</Text>
                    </View>
                </View>
                {/* <View style={styles.areabotoes}>
                    <Image source={require("../../../assets/img/edit.png")} />
                    <Image source={require("../../../assets/img/delete.png")} />
                </View> */}
                <View style={styles.areabotoes}>
                    <TouchableOpacity style={styles.btnedit} onPress={() => props.navigation.navigate('Editar Cartões', { id_card: item.id })}>
                        <Image source={require("../../../assets/img/edit.png")} style={styles.btncards} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deletar(item.id)}>
                        <Image source={require("../../../assets/img/delete.png")} style={styles.btncards} />
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
    return (

        <View style={styles.container}>
            <View style={styles.bloco}>
                <Text style={styles.rotulo}>
                    Filtro: 
                </Text>
                <TextInput
                    color={'#000'}
                    value={StringBusca}
                    onChangeText={(t) => setStringBusca(t)}
                />
            </View>
            <View style={styles.btnjogar}>
                <Button title='Jogar!'
                    color={'#2e8b57'}
                    onPress={() => { props.navigation.navigate('Jogar') }}
                />
            </View>
            
{/* renderização da lista de cartões */}
            <View style={styles.listacard}>
            <FlatList data={searchList}
                renderItem={item_flashcard}
                keyExtractor={flashcard => flashcard.id}
            />
            </View>
            

            <View>
                <TouchableOpacity
                    style={styles.addbtn}
                    onPress={() => { props.navigation.navigate('Novo Card') }} >
                    <Icon name={"add-outline"} size={70} color="#ffffff" />
                </TouchableOpacity>
            </View>

        </View>
    )
}




//estilização
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#423F5D',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        maxWidth: '100%',

    },
    bloco: {
        backgroundColor: '#fff',
        height: "8%",
        width: '80%',
        color: '#000',
        marginBottom: 10,
        marginTop: 30,
        alignSelf: 'center',

    },
    rotulo: {
        color: '#6A61A1',
        fontSize: 10,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    addbtn: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: 70,
        height: 70,
        backgroundColor: '#6A61A1',
        borderRadius: 40,
        bottom: 30,
        right: 15,
    },

    input: {
        width: '90%',
        height: '90%',
        backgroundColor: "#fff",
        marginTop: 10,
        marginLeft: 20,
    },

    btnjogar: {
        flex: 0,
        width: '50%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
    },
    listacard:{
        flex: 1,
    },
    textotitulo: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 12,
        alignSelf: 'center'
    },
    texto: {
        color: '#20b2aa',
        fontWeight: 'bold',
        fontSize: 19,
        alignSelf: 'center'
        
    },
    containerfc: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 15,
        maxHeight: "100%",
        width: '90%',
        paddingVertical: 30,
        marginVertical: 10,
        marginLeft: 15,
        justifyContent: "space-around",
        alignItems: "center",
    },

    areatexto: {
        alignItems: "flex-start",

    },

    areabotoes: {
        flexDirection: "row",
        alignItems: "space-between",
    },
    btnedit: {
        height: 30,
    },
});