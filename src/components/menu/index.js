import * as React from 'react';
import { createDrawerNavigator, drawerContent, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colecoes from '../../view/colecoes';
import Cardpage from '../../view/cardpage';



const Drawer = createDrawerNavigator();

export default function Menu() {
    return (
        <Drawer.Navigator

            initialRouteName="Minhas Coleções"
            screenOptions={{
                drawerInactiveTintColor: '#ffffff',
                drawerActiveTintColor: '#ffffff',
                drawerStyle: {
                    backgroundColor: '#43405e',
                    width: 250,

                }
            }}
            drawerContent={props=>{
                return(
                    <DrawerContentScrollView {...props}>
                        <Profile/>
                        <DrawerItemList {...props}/>
                        <DrawerItem
                            icon={()=> <Icon name="chevron-back" size={20} color ="#ffffff" />}
                            label = "Logout"
                            labelStyle= {{color:"#ffffff"}}
                            onPress={()=> props.navigation.popToTop('Login')}/>
                    </DrawerContentScrollView>

                )
            }}
        >
            <Drawer.Screen name="Minhas Coleções" component={Colecoes}
                options={{
                    drawerIcon: ({color}) => 
                    <Icon 
                        name="options"
                        size={20}
                        color ="#ffffff" />,
                    title: 'Minhas Coleções',
                    headerTintColor: '#ffffff',
                    headerStyle: { backgroundColor: '#43405e' },                
                }}
            />
        </Drawer.Navigator>
    )
}

function Profile() {
    return (
        <TouchableOpacity>
            <View style={styles.containerI}>
                <View style={styles.frame}>
                    <Image source={require("../../../assets/img/profile.png")} style={styles.pic} />
                </View>
                <View style={styles.espacoI} >
                    <Text>nome no perfil</Text>
                </View>
                <View style={styles.linha} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerI: {
        height: 190,
        alignItems: 'center',
        paddingTop: '7%',
        flex:  1,
    },
    espacoI:{
        paddingTop: '4%',
    },

    pic:{
        height: 100,
        width: 100,
    },

    linha:{
        marginTop: '8%',
        height: 1,
        width: '80%',
        backgroundColor: 'white',
    },

    frame:{
        borderRadius: 50,
        borderColor: 'blue',
    }

})