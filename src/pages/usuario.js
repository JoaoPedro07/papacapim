import {StyleSheet, Text,View,Image, Button, TouchableOpacity } from 'react-native';
import { seguirUser } from './functions/seguirUser';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth';
import { useState } from 'react';


export default function MostrarUsuario({route, navigate}) {
  const {usuario} = route.params;
  const {user, setUser} = useContext(AuthContext);
  const {login} = route.params;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  {/*const {picture} = route.params;*/}

  

  async function seguir(){
    const response = await seguirUser(user.token, login, setLoading, setError, setSuccess)
    console.log(response)
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewsuperior}>
        {/*<Image source ={{uri:picture}} style={{width:90, height:90, borderRadius:40}}/>*/}
        <TouchableOpacity onPress={seguir} style={styles.button}>
          <Text style={styles.textobotao}>seguir</Text>
        </TouchableOpacity>
        {success && Alert.alert("Seguindo", "Você agora está seguindo este usuário.")}
        {error && Alert.alert("Erro", "Ocorreu algum erro ao tentar seguir")}
      </View>

      <View style={styles.caixaTituloTexto}>
          <View>
              <Text style={styles.user}>{usuario}</Text>
          </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      padding: 10,
      flexDirection: "column",

  },
  viewsuperior:{
    gap: 218,


    flexDirection: "row",

  },
  caixaTituloTexto: {
      width: 340,

      justifyContent: "center",     
  },
  user: {
      fontWeight: "bold" ,
      margin: 2,
      fontSize: 18,
  },
  texto:{
      
      padding: 4,


      textAlign: 'justify',
      fontSize: 18,
  },
  button:{
    backgroundColor: "white",
    borderRadius: 9,
    alignSelf: 'flex-end',

  },
  textobotao:{
    margin: 5,
    fontSize: 18,
  }

});