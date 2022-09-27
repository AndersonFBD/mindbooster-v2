import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConnect';
import Login from '../login';

export default function Cadastro(props) {
        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');
        const [senha2, setSenha2] = useState('');

        async function createUser(navigation){
            await createUserWithEmailAndPassword(auth, email, senha, senha2)
            .then(value => {
                if (senha === senha2) {
                console.log('cadastro realizado com sucesso! \n' + value.user.uid);
                props.navigation.navigate('Login');    
                }
                else {
                    alert('senhas não coincidem')
                }
            })
            .catch(error => console.log(error));
        }
        
        return (

        <>
        <View style={styleslogin.containertitulo}>
                    <View>
                        <Image source={require('../../../assets/img/mindbooster.png')}
                            style={styleslogin.imagem}
                        />
                    </View>
                    <View>
                        <Text style={styleslogin.Titulo}>Mind Booster</Text>
                    </View>
                </View>
            <View style={styleslogin.container}>
                <View>
                    <Text style={styleslogin.Texto}>Preencha os dados do cadastro</Text>
                </View>
                <View style={styleslogin.input}>
                    {/* <Text style={styleslogin.caixa, styleslogin.titulocaixa}>Email</Text> */}
                    <TextInput
                        keyboardType='email-address'
                        placeholder="insira seu email"
                        placeholderTextColor={'#888'}
                        color={'#000'}
                        value={email}
                        onChangeText={value=> setEmail(value)}
                    />
                </View>
                <View style={styleslogin.input}>
                    <View style={styleslogin.senha}>
                        <TextInput
                            secureTextEntry
                            placeholder="insira a senha"
                            placeholderTextColor={'#555'}
                            color={'#000'}
                            value={senha}
                            onChangeText={value=> setSenha(value)}
                            style={styleslogin.campo}
                        /><Icon name="eye" 
                        size={30} 
                        color="#000"/>
                    </View>
                </View>
                <View style={styleslogin.input}>
                    <View style={styleslogin.senha}>
                        <TextInput
                            secureTextEntry
                            placeholder="repita a senha"
                            placeholderTextColor={'#555'}
                            color={'#000'}
                            value={senha2}
                            onChangeText={value=> setSenha2(value)}
                            style={styleslogin.campo} />
                        <Icon name="eye" size={30} justifyContent={'center'} color="#000" />
                    </View>
                </View>
                <View style={styleslogin.areabtn}>
                    <View style={styleslogin.botao}>
                        <Button
                            color="#6A61A1"
                            title="Cadastrar"
                            onPress={() => createUser()}
                        />
                    </View>
                </View>
            </View>
        </>
    )
}


const styleslogin = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        paddingRight: 45,
        // paddingTop: 20,
        backgroundColor: "#423F5D",
        padding: '8%',

    },
    containertitulo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: "#423F5D",
    },
    imagem: {
        alignSelf: 'center',
        width: 64,
        height: 64,
    },

    Titulo: {
        fontFamily: 'Pacifico-Regular',
        fontSize: 24,
        alignSelf: 'center',
        color: 'white',
        paddingTop: 5,
    },

    Texto: {
        fontSize: 28,
        alignSelf: 'center',
        color: 'white',
        textAlign: 'center',
    },

    input: {
        flex: 0,
        overflow: 'hidden',
        flexDirection: 'column',
        backgroundColor: "#FFF",
        marginTop: 30,
        marginLeft: 20,
        paddingRight: 5,
    },


    areabtn: {
        flex: 1,
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },

    botao: {
        overflow: 'hidden',
        // paddingBottom: 20,
        left: 15,
        // right: 10,
        alignSelf: 'center',
        width: '95%',

    },
    titulocaixa: {
        color: 'purple',
        paddingTop: 5,
        paddingLeft: 5,
        width: '40%',
    },

    senha: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    campo: {
        width: '85%',
    },

    textForget: {
        color: 'white',
        textAlign: 'right',
    },
})