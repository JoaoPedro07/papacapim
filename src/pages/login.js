import {Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import imagem from '../../src/passaro.png'

export default function Login({ navigation }) {
  return (
    <View style={styles.container}> 
        <View style={styles.divlogin}>
            <Image source ={imagem} style={{width:250, height:250,}}/>
            <Text style={styles.texto}>Usuário</Text>
            <View style={styles.input}>
                <TextInput placeholder='usuário'/>
            </View>
            <Text style={styles.texto}>Senha</Text>
            <View style={styles.input}>
                <TextInput keyboardType='visible-password' placeholder='telefone'></TextInput>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Contatos")}>
              <View style={styles.button}>
                <Text style={styles.button_label}>{'Logar'}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Contatos")}>
              <View style={styles.button_cadastro}>
                <Text style={styles.button_label_cadastro}>{'Cadastrar-se'}</Text>
              </View>
            </TouchableOpacity>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  texto:{
    fontSize: 16,
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: '#333',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
  },
  divlogin:{
    width: 250,


  },
  button:{
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
  button_cadastro:{
    alignItems: 'center',

  },
  button_label_cadastro:{
    fontSize: 16,
    margin: 4,
    color: 'blue',

  },
});