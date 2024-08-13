import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Contact } from '../../components/CaixaTexto';
import { useState } from "react";
import { Alert } from 'react-native';

export default function AddContatos({ navigation }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  function alerta(){
    Alert.alert(`${nome} tem o telefone ${telefone}`)
  }
  return (
    <View style={styles.container}> 
        <Text style={styles.texto}>Nome</Text>
        <View style={styles.input}>
            <TextInput placeholder='nome' onChangeText={setNome}/>
        </View>
        <Text style={styles.texto}>Telefone</Text>
        <View style={styles.input}>
            <TextInput keyboardType='numeric' placeholder='telefone' onChangeText={setTelefone}></TextInput>
        </View>
        <Button title='Salvar' onPress={() => navigation.navigate("Contatos")}></Button>
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
