import {Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from "react";
import { Alert } from 'react-native';

export default function Cadastrar({ navigation }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  function alerta(){
    Alert.alert(`${nome} tem o telefone ${telefone}`)
  }
  return (
    <View style={styles.container}> 
        <Text style={styles.texto}>Usuário</Text>
        <View style={styles.input}>
            <TextInput placeholder='nome' onChangeText={setNome}/>
        </View>
        <Text style={styles.texto}>Telefone</Text>
        <View style={styles.input}>
            <TextInput keyboardType='numeric' placeholder='telefone' onChangeText={setTelefone}></TextInput>
        </View>
        <Text style={styles.texto}>Senha</Text>
        <View style={styles.input}>
            <TextInput placeholder='senha' onChangeText={setSenha}></TextInput>
        </View>
        <Button title='Cadastrar' onPress={() => navigation.navigate("Login")}></Button>
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