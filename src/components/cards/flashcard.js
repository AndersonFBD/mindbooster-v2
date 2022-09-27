import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";



export default function Flashcard(props) {
    return (
        <View style={styles.containerfc}>
            <View>
                <View>
                    {/* <label style={styles.texto}>Frente</label> */}
                </View>
                <View style={styles.areatexto}>
                    {props.children}
                </View>
            </View>
            <View style={styles.areabotoes}>
                <Image source={require("../../../assets/img/edit.png")} />
                <Image source={require("../../../assets/img/delete.png")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerfc: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 15,
        maxHeight: "100%",
        width: '90%',
        paddingVertical: 15,
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
    }

})