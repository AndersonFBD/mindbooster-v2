/* aplicativo de flashcards
 * Aluno: Anderson Felipe de Barros Dias
 * RA: 1429850*/

//Bibliotecas
import React from 'react';

//telas navegáveis
import Login from './src/view/login';
import Menu from './src/components/menu';
import Cadastro from './src/view/cadastro';
import Cardpage from './src/view/cardpage';
import Addcol from './src/view/addcol';
import Addcartoes from './src/view/addcartoes';
import Jogar from './src/view/jogo';
import Editcol from './src/view/editcol';
import Editcartoes from './src/view/editcartoes';

//navegação
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importações do Redux
import { Provider } from 'react-redux';
import { store } from './src/store';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      {/* <Provider store={store}> */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
            <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
            <Stack.Screen name="Coleção" component={Cardpage} options={({route}) =>({headerShown: false })} />
            <Stack.Screen name="Jogar" component={Jogar} options={{ headerShown: false }} />
            <Stack.Screen name="Nova Coleção" component={Addcol} options={{ headerShown: false }} />
            <Stack.Screen name="Novo Card" component={Addcartoes} options={({route}) =>({headerShown: false })} />
            <Stack.Screen name="Editar Coleção" component={Editcol} options={({route}) => ({ id_col : route.params?.id_colecao, headerShown: false })} />
            <Stack.Screen name="Editar Cartões" component={Editcartoes} options={({route}) => ({ id_card : route.params?.id_card, headerShown: false })} />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </Provider> */}

    </>
  );
};



export default App;
