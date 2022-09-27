import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default function NewCard() {
    return (
        <View style={styles.container}>
            <View style={styles.bloco}>
                <Text style={styles.rotulo}>Frente</Text>
                <View>
                    <TextInput
                        color={"#000"}
                        placeholder= "Frente"
                        placeholderTextColor={'#ddd'}
                        textAlign={'center'}
                    />
                </View>
            </View>
            <View style={styles.bloco}>
                <Text style={styles.rotulo}>Verso</Text>
                <View style={{alignItems: 'center'}}>
                    <TextInput
                        color={"#000"}
                        placeholder= "Verso"
                        placeholderTextColor={'#ddd'}
                        textAlign={'center'}
                        size={18}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
    bloco: {
        height: "50%",
        color: '#000',

    },
})