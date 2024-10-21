import { StatusBar } from 'expo-status-bar'
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Tweet } from '../../components/Tweet'
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/auth'
import { buscarPostagem } from './functions/buscarPostagens'
import { useEffect } from 'react'
import { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';

export default function Contatos({ navigation }) {
  const {user, setUser} = useContext(AuthContext)
  const [postagem, setPostagens] = useState([])
  const [pagina, setPagina] = useState(0)

  async function buscar() {
      postagens = await buscarPostagem(user.token, pagina)
      setPostagens(prevArray => [...prevArray, ...postagens])
      if(pagina != 5){
        setPagina(pagina+1)
      }

  }
  useEffect(() => {
    buscar()
  }, [pagina])

  return (
    
      <SafeAreaView style={styles.container} >
        <ScrollView style={styles.scroll} >
          <View >
            <StatusBar style="auto" />
            {postagens != '' && postagem.map((item, index) => (
              <TouchableOpacity onPress={() => navigation.navigate("MostrarUsuario", {"login":item.user_login, "picture":"https://pbs.twimg.com/profile_images/1695063177996713985/InPVE-hP_400x400.jpg"})}>
                <Tweet textoum={item.user_login} textodois={item.message} picture="https://p7.hiclipart.com/preview/722/101/213/computer-icons-user-profile-circle-abstract.jpg"/>
              </TouchableOpacity>
            ))}


          </View>
        </ScrollView>
        <View style={styles.button_view}>

            <TouchableOpacity onPress={() => navigation.navigate("Deletar")}>
              <View style={styles.button}>
                <Text style={styles.button_label}>{'Deletar'}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Alterar")}>
              <View style={styles.button}>
                <Text style={styles.button_label}>{'Alterar perfil'}</Text>
              </View>
            </TouchableOpacity>

            
            <TouchableOpacity onPress={() => navigation.navigate("Pesquisar")}>
              <View style={styles.button}>
                <Text style={styles.button_label}>{'Pesquisar'}</Text>
              </View>
            </TouchableOpacity>
             
            <TouchableOpacity onPress={() => navigation.navigate("Postar")}>
              <View style={styles.button_postar}>
                <Text style={styles.button_label}>{'+'}</Text>
              </View>
            </TouchableOpacity>

        </View>

      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    flex: 1,
    backgroundColor: '#fff',


  },
  scroll: {
      marginHorizontal: 6,
  },
  button_view:{
    padding: 10,
    flexDirection: "row",
    height: 70,
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
  button_postar:{
    width: 40,
    margin: 5,
    backgroundColor: 'blue',
    alignItems: 'center',
    borderStyle:'solid',
    borderWidth: 1,
    borderRadius: 999,
  },

});
