import {StyleSheet} from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contatos from './src/pages/contatos';
import AddContatos from './src/pages/addcontato';
import Login from './src/pages/login';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='login' component={Login} options={{title:"Login"}}/>
      <Stack.Screen name='Contatos' component={Contatos} options={{title:"Contatos"}}/>
      <Stack.Screen name='addContatos' component={AddContatos} options={{title:"Adicionar"}}/>
      
    </Stack.Navigator>
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
