import {Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from "react";

export default function Postar({ navigation }) {
  const [texto, setTexto] = useState('');
  return (
    <View style={styles.container}> 
        <Text style={styles.texto}>Escreva o que está pensando</Text>
        <View style={styles.input}>
            <TextInput placeholder='Escreva aqui' onChangeText={setTexto}/>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
            <View style={styles.button}>
                <Text style={styles.button_label}>{'Postar'}</Text>
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