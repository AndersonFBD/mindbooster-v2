import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Collection from '../../components/cards/collection';
// import data from '../../../assets/listas/data.json';
import app from '../../services/firebaseConnect';
import Cardpage from '../cardpage/index';
import { initializeFirestore, collection, query, onSnapshot, doc, deleteDoc } from 'firebase/firestore';


export default function Colecoes(props) {
    const [col_list, setCol_list] = useState();

    const db = initializeFirestore(app, { experimentalForceLongPolling: true });
    const colecaoCollection = collection(db, 'colecao');

    useEffect(() => {
        const queue = query(colecaoCollection);
        const unsubscribe = onSnapshot(queue, (snapshot) => {
            const colecao = []
            snapshot.forEach((doc) => {
                colecao.push({
                    id: doc.id, ...doc.data()
                });

            })
            setCol_list(colecao);

        })
    }, [])

    const deletar = (id) => {
        Alert.alert(
            "você tem certeza que deseja excluir esta coleção?",
            "",
            [{
                text: "sim",
                onPress: () => deleteDoc(doc(db, "colecao", id)),
            },
            {
                text: "cancelar",
                onPress: () => { },
            }]
        )
    }


//modal da coleção
    const item_col = ({ item }) => {
        return (
            <View style={styles.containercol}>
                <TouchableOpacity style={styles.clicavel} onPress={() => props.navigation.navigate('Coleção')}>
                    <View>
                        <Image source={require("../../../assets/img/paper.png")} style={styles.imagem} />
                    </View>
                    <View >
                        <Text style={styles.areatexto}>{item.nome}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.areabotoes}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Editar Coleção', { id_colecao: item.id })}>
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


            <FlatList data={col_list} renderItem={item_col}
                keyExtractor={colecao => colecao.id}

            />


            <View>
                <TouchableOpacity
                    style={styles.addbtn}
                    onPress={() => { props.navigation.navigate('Nova Coleção') }}>
                    <Icon name={"add-outline"} size={70} color="#ffffff" />
                </TouchableOpacity>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#423F5D',
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

    texto: {
        color: '#20b2aa',
        fontWeight: 'bold',
        fontSize: 26,
    },
    containercol: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 12,
        maxHeight: "100%",
        maxWidth: '90%',
        paddingVertical: 15,
        marginBottom: 10,
        marginTop: 15,
        marginLeft: 15,
        justifyContent: 'space-evenly',
        alignItems: "center",
    },

    clicavel: {
        flex: 0.6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    imagem: {
        width: 45,
        height: 45,

    },
    areatexto: {
        justifyContent: "flex-start",
        color: "#20b2aa",
        fontWeight: "bold",
        fontSize: 26,

    },

    areabotoes: {
        height: '100%',
        flexDirection: "column",
        justifyContent: 'space-between',
    },

    btncards: {
        height: 30,
        width: 30,
    }
})