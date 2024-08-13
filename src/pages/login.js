import {Button, StyleSheet, Text, TextInput, View, Image} from 'react-native';
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
            <Button title='Logar' onPress={() => navigation.navigate("Contatos")}></Button>
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


  }
});