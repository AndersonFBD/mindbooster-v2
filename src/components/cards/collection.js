import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import Cardpage from "../../view/cardpage";
 

export default function Collection(props) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.clicavel}>
                <View>
                    <Image source={require("../../../assets/img/ball.png")} style={styles.imagem} />
                </View>
                <View style={styles.areatexto}>
                    {props.children}
                </View>
            </TouchableOpacity>
            <View style={styles.areabotoes}>
                <TouchableOpacity onPress={()=> {alert('clicou no botão editar')}}>
                    <Image source={require("../../../assets/img/edit.png")} style={styles.btncards} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {Alert.alert(
                    'deseja mesmo excluir?',
                    "Remover coleção?",[
                        {
                            text: "não",

                        },
                        {
                            text: "sim",
                            onPress: () => console.log("Excluído")
                        }
                    ]
                    )
                    }}> 
                    <Image source={require("../../../assets/img/delete.png")} style={styles.btncards} />
                </TouchableOpacity>
               
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    containercol: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 20,
        maxHeight: "100%",
        maxWidth: '90%',
        paddingTop: 5,
        paddingBottom: 10,
        marginBottom: 10,
        marginTop: 5,
        marginLeft: 15,
        justifyContent: "space-evenly",
        alignItems: "flex-start",
    },

    clicavel: {
        flex: 0.8, 
        flexDirection:"row", 
        justifyContent: "space-around", 
        alignItems: "center",
    },
    
    imagem: {
        width: 50,
        height: 50,

    },
    areatexto: {
        flex: 1,
        alignItems: "flex-start",
        paddingLeft: 30,

    },

    areabotoes: {
        height: '100%',
        flexDirection: "column",
        justifyContent: 'space-evenly',
    },

    btncards: {
        height: 30,
        width: 30,
    }
})