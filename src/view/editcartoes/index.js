import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
// import NewCard from '../../components/cards/newCard';
import { collection, initializeFirestore, doc, updateDoc,query, onSnapshot } from 'firebase/firestore';
import app from '../../services/firebaseConnect';


export default function Editcartoes(props){
    const [frente, setFrente] = useState('');
    const [verso, setVerso] = useState('');

    const db = initializeFirestore(app, { experimentalForceLongPolling: true })
    const cartaoCollection = collection(db, 'flashcard');

    const [idCard, setidCard] = useState(props.route.params.id_card);

    useEffect(() => {
        const queue = query(cartaoCollection);
        const unsubscribe = onSnapshot(queue, (snapshot) => {
            const cards = []
            snapshot.forEach((doc) => {
                cards.push({
                    id: doc.id,
                    ...doc.data()
                });
            })
        })
    },
    [])

    const editCartao = (id) => {
        const cardRef = doc(db, 'flashcard', id) 

        updateDoc(cardRef, {frente, verso})
    }


    return(
        <View style={styles.container}>
            <View style={styles.titulocard}>
                <Text style={styles.textod}>Preencha os dados da frente e do verso do cartão</Text>
            </View>
            <View style={styles.bloco}>
            <View style={styles.containernc}>
            <View style={styles.bloco2}>
                <Text style={styles.rotulo}>Frente</Text>
                <View>
                    <TextInput
                        color={"#000"}
                        placeholder= "Frente"
                        placeholderTextColor={'#ddd'}
                        textAlign={'center'}
                        size={30}
                        fontSize={24}
                        height={100}
                        onChangeText={setFrente}
                        value={frente}
                    />
                </View>
            </View>
            <View style={styles.bloco2}>
                <Text style={styles.rotulo}>Verso</Text>
                <View style={{alignItems: 'center'}}>
                    <TextInput
                        color={"#000"}
                        placeholder= "Verso"
                        placeholderTextColor={'#ddd'}
                        textAlign={'center'}
                        size={30}
                        fontSize={24}
                        height={100}
                        onChangeText={setVerso}
                        value={verso}
                    />
                </View>
            </View>
        </View>
            </View>
            <View style={styles.areabtn}> 
            <TouchableOpacity style={styles.botao}
            onPress = {()=>{editCartao(idCard); props.navigation.pop(1)}}>
                <Text>SALVAR ALTERAÇÕES</Text>
            </TouchableOpacity>
            </View>


            <View style={styles.areabtn}> 
            <TouchableOpacity style={styles.botao2}
            onPress = {()=>{props.navigation.pop(1)}}>
                <Text>CANCELAR</Text>
            </TouchableOpacity>
            </View>


        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'scroll',
        backgroundColor: '#423F5D',
        flexDirection: 'column',
        alignItems: 'center',  
        justifyContent: 'space-around',
   
    },
    titulocard: {
        flex: 0, 
        width:'80%', 
        marginVertical: 20,
    },
    textod:{
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
    },
    bloco: {
        backgroundColor: '#fff',
        borderRadius: 10, 
        height: "50%",
        width: '80%',
        color: '#000',
        marginBottom:10,       
    },
    areabtn: {
        backgroundColor: '#aaa',
        height: "7%",
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        bottom: 0,
    },  
    botao: {
        backgroundColor: '#6A61A1',
        width: '99%',
        height: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,

    },
    botao2: {
        backgroundColor: '#423F5D',
        width: '99%',
        height: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,

    },
    containernc: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    rotulo: {
        color: '#aea5e5',
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    bloco2: {
        height: "50%",
        color: '#000',

    },
})