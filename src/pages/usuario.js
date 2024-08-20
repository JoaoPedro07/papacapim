import {Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';


export default function MostrarUsuario({route, navigate}) {
  const {usuario} = route.params;
  return (
    <View style={styles.container}> 
        <Text style={styles.texto}>Usuário</Text>
        <View style={styles.input}>
            <TextInput placeholder='nome' value={usuario}/>
        </View>

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