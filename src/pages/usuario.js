import {StyleSheet, Text,View,Image, Button, TouchableOpacity } from 'react-native'
import { seguirUser } from './functions/seguirUser'
import { deixarSeguirUser } from './functions/deixarSeguirUser'
import { seguindoUser } from './functions/seguindoUser'
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/auth'
import { useState } from 'react'
import { useEffect } from 'react'
import { Alert } from 'react-native'


export default function MostrarUsuario({route, navigate}) {
  const {usuario} = route.params
  const {user, setUser} = useContext(AuthContext)
  const {login} = route.params
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [jaSegue, setJaSegue] = useState(false)
  {/*const {picture} = route.params;*/}

  async function seguindo(){
    const response = await seguindoUser(user.token, login, setLoading, setError, setSuccess)
    console.log(response.data)
    response.data.forEach(element => {
      if(element.follower_login === user.user){
        setJaSegue(true)
      }
    });

  }
  
  useEffect(() => {
    seguindo()
  }, [jaSegue])


  async function seguir(){
    if(jaSegue){
      const response = await deixarSeguirUser(user.token, login, setLoading, setError, setSuccess)
      if(response){
        setJaSegue(false)
      }

    }
    else{
      const response = await seguirUser(user.token, login, setLoading, setError, setSuccess)
      if(response){
        setJaSegue(true)
      }
    }

  }
  return (
    <View style={styles.container}>
     
      <View style={styles.viewsuperior}>

        <Image  style={{width:90, height:90, borderRadius:40}}/>
        <View>
          <TouchableOpacity onPress={seguir} style={styles.button}>
            <Text style={styles.textobotao}>{jaSegue? 'Unfollow':'Follow'}</Text>
          </TouchableOpacity>
        </View>
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
    gap: 200,


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
  

})