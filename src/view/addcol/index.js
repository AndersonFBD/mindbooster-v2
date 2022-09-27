import { useLinkProps } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { collection, initializeFirestore, addDoc } from 'firebase/firestore';
import app from '../../services/firebaseConnect';



export default function Addcol(props) {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');

    const db = initializeFirestore(app, { experimentalForceLongPolling: true })
    const colecaoCollection = collection(db, 'colecao');

    const addColecao = () => {
        const docColecao = {
            nome: nome,
            descricao: descricao,
        }

        addDoc(colecaoCollection, docColecao).then((docRef) => {
            console.log("Documento salvo:" + docRef.id);
        }).catch((erro) => {
            console.log("Erro: " + erro);
        })
    }

    return (

        <View style={styles.container}>
            <View style={styles.titulocol}>
                <Text style={styles.textod}>Preencha aqui os dados referente à coleção a ser criada</Text>
            </View>
            <View style={styles.bloco}>
                <Text style={styles.rotulo}>Nome da coleção: </Text>
                <TextInput
                    color={'#000'}
                    onChangeText={setNome}
                    value={nome}
                />
            </View>
            <View style={styles.bloco2}>
                <Text style={styles.rotulo}>Descrição: </Text>
                <TextInput
                    color={'#000'}
                    numberOfLines={3}
                    onChangeText={setDescricao}
                    value={descricao}
                />
            </View>
            <View style={styles.bloco3}>
                <Text style={styles.rotulo}>Imagem: </Text>
                <TouchableOpacity style={styles.iconeadd}>
                        <Icon name={"add-outline"} size={70} color="#cccccc" />
                </TouchableOpacity>
            </View>

            <View style={styles.areabtn}>
                <TouchableOpacity style={styles.botao}
                    onPress={() => {
                        props.navigation.pop(1);
                        addColecao();
                    }

                    }>
                    <Text>SALVAR ALTERAÇÕES</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.areabtn}>
                <TouchableOpacity
                    onPress={() => { props.navigation.pop(1) }}
                    style={styles.botao2}>

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

    titulocol: {
        flex: 0,
        width: '80%',
        marginVertical: 20,
    },

    textod: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
    },

    bloco: {
        backgroundColor: '#fff',
        height: "8%",
        width: '80%',
        color: '#000',
        marginBottom: 10,

    },
    bloco2: {
        backgroundColor: '#fff',
        height: "16%",
        width: '80%',
        color: '#000',
        marginBottom: 10,

    },
    bloco3: {
        backgroundColor: '#fff',
        height: "24%",
        width: '80%',
        color: '#000',
        marginBottom: 10,

    },
    iconeadd: {
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
    },
    rotulo: {
        color: '#6A61A1',
        fontSize: 10,
        fontWeight: 'bold',
        paddingLeft: 10,
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

    }
})