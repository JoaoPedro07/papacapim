import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
// import { Contact } from './components/CaixaTexto';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contatos from './src/pages/contatos';
import AddContatos from './src/pages/addcontato';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Contatos' component={Contatos} options={{title:"Contatos"}}/>
      <Stack.Screen name="addContatos" component={AddContatos} options={{title:"Adicionar"}}/>
      
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
