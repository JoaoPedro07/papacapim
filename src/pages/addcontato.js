import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Contact } from '../../components/CaixaTexto';

export default function AddContatos({ navigation }) {

  return (
    <View style={styles.container}> 
        <Text style={styles.texto}>Nome</Text>
        <View style={styles.input}>
            <TextInput></TextInput>
        </View>
        <Text style={styles.texto}>Telefone</Text>
        <View style={styles.input}>
            <TextInput></TextInput>
        </View>
        <Button title='Salvar'></Button>
    </View>

  );
}

const styles = StyleSheet.create({
  texto:{
    fontSize: 16,
  },
  container:{
    padding: 10,
  },
  input: {
    borderColor: '#333',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
  }

});
