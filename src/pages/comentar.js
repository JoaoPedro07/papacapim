import {Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from "react";
import { comentar } from './functions/comentar';
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/auth'
import { Alert } from 'react-native';

export default function Comentar({ navigation, route }) {
  const [texto, setTexto] = useState('');
  const {id} = route.params
  const {user, setUser} = useContext(AuthContext)
  async function comentario() {
      resposta = await comentar(user.token, id, texto)
      if(resposta){
        Alert.alert("Sucesso", "seu comentário foi publicado")
        navigation.navigate("Feed")
      }
  }
  return (
    <View style={styles.container}> 
        <Text style={styles.texto}>Escreva o seu comentário no campo</Text>
        <View style={styles.input}>
            <TextInput placeholder='Escreva aqui' onChangeText={setTexto}/>
        </View>

        <TouchableOpacity onPress={comentario}>
            <View style={styles.button}>
                <Text style={styles.button_label}>{'Comentar'}</Text>
            </View>
        </TouchableOpacity>
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
      height: 100,
    },
  
    button:{
      alignSelf: 'flex-end',
      margin: 5,
      backgroundColor: 'blue',
      alignItems: 'center',
      borderRadius: 6,
  
  
    },
    button_label:{
      fontSize: 18,
      margin: 4,
      color: 'white',
  
    
    },
  });