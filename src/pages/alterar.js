import {Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from "react";


export default function Alterar({ navigation }) {
  const [nome, setNome] = useState('Pedro');
  const [telefone, setTelefone] = useState('81290505');
  const [senha, setSenha] = useState('pedroEDR');
  return (
    <View style={styles.container}> 
        <Text style={styles.texto}>Usuário</Text>
        <View style={styles.input}>
            <TextInput value={nome} placeholder='nome' onChangeText={setNome}/>
        </View>
        <Text style={styles.texto}>Telefone</Text>
        <View style={styles.input}>
            <TextInput value={telefone} keyboardType='numeric' placeholder='telefone' onChangeText={setTelefone}></TextInput>
        </View>
        <Text style={styles.texto}>Senha</Text>
        <View style={styles.input}>
            <TextInput value={senha} placeholder='senha' onChangeText={setSenha}></TextInput>
        </View>
        <Button title='Cadastrar' onPress={() => navigation.navigate("Feed")}></Button>
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