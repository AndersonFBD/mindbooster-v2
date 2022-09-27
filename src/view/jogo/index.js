import * as React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import {  } from "react-native-gesture-handler";


export default function Jogar(){
    return(
        <View style={styles.container}>
            <View style={styles.bloco}>
                <Text>Cartão - / -</Text>
            </View>
            <View style={styles.cartão}>
                
                    <Text style={{color: '#000', fontSize:30}}>Cartão</Text>
                
            </View>
           <TouchableOpacity style={styles.areabtn}
           onPress = {()=>{alert('em construção!')}}>
               
                        <Text> VIRAR </Text>
                    </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', 
        alignItems:'center',
        flexDirection: 'column',
        backgroundColor: '#423F5D',
       
    },
    bloco: {
        backgroundColor: 'transparent',
        alignItems:'center',
        justifyContent: 'center',
        marginVertical: '10%',
        height: "10%",
        width: '80%',
        color: '#000',
        marginBottom:10,
        
    },

    cartão: {
        backgroundColor: '#fff',
        borderRadius:10,
        height: "50%",
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
        marginVertical:10,
    },

    bloco2: {
        backgroundColor: '#fff',
        height: "8%",
        width: '80%',
        color: '#000',
        marginBottom:10,
        
    },
    areabtn: {
        flex: 1,
        marginVertical: 20,
        backgroundColor: '#6A61A1',
        maxHeight: "10%",
        width: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    }
})