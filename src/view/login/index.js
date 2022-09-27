import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConnect';
// import { useDispatch } from 'react-redux';
// import { LoginUsuario } from '../../slices/idUsuarioSlice';

// export const guardaUsuario = () => {
//     const dispatch = useDispatch();

//     function handleLogin(){
//         dispatch(LoginUsuario(id, mail));
//     }
// }

export default function Login(props) {
        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');

        
        function logar(navigation){
            signInWithEmailAndPassword(auth, email, senha)
            .then(value => {
                // handleLogin(); 
                console.log('login sucedido! \n' +"Bem-vindo usuario:" +value.user.uid);
                  
                props.navigation.navigate('Menu'); 
            })
            .catch(error => console.log(error));
        }

        return (

        <>
            <View style={styleslogin.container}>
                <View>
                    <Image source={require('../../../assets/img/mindbooster.png')}
                        style={styleslogin.imagem} 
                       />
                </View>
                <View>
                    <Text style={styleslogin.Titulo}>Mind Booster</Text>
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
                            style={styleslogin.campo}
                            value={senha}
                            onChangeText={value=> setSenha(value)}
                        /><Icon name="eye" size={30} justifyContent={'center'} color="#000"/>
                    </View>
                </View>
                <View>
                    <Text style={styleslogin.textForget} onPress={() => props.navigation.navigate('')}>Esqueci a senha</Text>
                </View>
                <View style={styleslogin.areabtn}>
                    <View style={styleslogin.botao}>
                        <Button
                            color="#6A61A1"
                            title="Entrar"
                            onPress={() => {
                                logar();
                                
                            }}
                        />
                    </View>

                    <View style={styleslogin.botao}>
                        <Button
                            color="#b58d97"
                            title="Cadastre-se"
                            onPress={() => { props.navigation.navigate('Cadastro') }}
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
        padding:'8%',

    },
    imagem: {
        alignSelf: 'center',
        width: 64,
        height: 64,
    },

    Titulo: {
        fontFamily: 'Pacifico-Regular',
        fontSize: 36,
        alignSelf: 'center',
        color: 'white',
        paddingLeft:20,

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
        justifyContent: 'space-around',
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