import {StyleSheet} from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from './src/pages/feed';
import Login from './src/pages/login';
import Cadastrar from './src/pages/cadastro';
import Postar from './src/pages/postar';
import Alterar from './src/pages/alterar';
import MostrarUsuario from './src/pages/usuario';
import AuthProvider from './src/contexts/auth';
import Deletar from './src/pages/deletar';
import Pesquisar from './src/pages/pesquisar';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
    <AuthProvider>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{title:"Login"}}/>
        <Stack.Screen name='Feed' component={Feed} options={{title:"Feed"}}/>
        <Stack.Screen name='Cadastrar' component={Cadastrar} options={{title:"Cadastrar"}}/>
        <Stack.Screen name='Postar' component={Postar} options={{title:"Postar"}}/>
        <Stack.Screen name='Alterar' component={Alterar} options={{title:"Alterar"}}/>
        <Stack.Screen name='MostrarUsuario' component={MostrarUsuario} options={{title:"Usuario"}}/>
        <Stack.Screen name='Deletar' component={Deletar} options={{title:"Deletar"}}/>
        <Stack.Screen name='Pesquisar' component={Pesquisar} options={{title:"Pesquisar"}}/>
      </Stack.Navigator>
    </AuthProvider>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#fff',

  },
  scroll: {
      marginHorizontal: 20,
  },

});
