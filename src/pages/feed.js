import { StatusBar } from 'expo-status-bar'
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Tweet } from '../../components/Tweet'
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/auth'
import { buscarPostagem } from './functions/buscarPostagens'
import { useEffect } from 'react'
import { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function Contatos({ navigation }) {
  const {user, setUser} = useContext(AuthContext)
  const [postagem, setPostagens] = useState([])
  const [pagina, setPagina] = useState(0)
  const [loading, setLoading] = useState(false)

  async function buscar() {
    setLoading(true)
    postagens = await buscarPostagem(user.token, pagina)
    setPostagens(prevArray => [...prevArray, ...postagens])
    setPagina(pagina+1)
    setLoading(false)
      

  }
  useEffect(() => {
    buscar()
  }, [])

  function FooterList({load}){
    if(!load) return null
    return(
      <View>
        <ActivityIndicator size={25} color='#121212'/>
      </View>
    )
  }
  return (
    
      <View style={styles.container} >
          <View >
            
            {postagem != null &&
              <FlatList
              data={postagem}
              onEndReached={buscar}
              onEndReachedThreshold={0.6}
              ListFooterComponent={<FooterList load={loading} />}
              keyExtractor={(item, index) => index.toString()}  // Usando keyExtractor para gerar chaves
              renderItem={({ item, index }) => (
                <TouchableOpacity 
                  onPress={() => navigation.navigate("MostrarPost", {
                    "login": item.user_login, 
                    "message": item.message,
                    "id": item.id,
                    "image": "https://p7.hiclipart.com/preview/722/101/213/computer-icons-user-profile-circle-abstract.jpg",
                  })}
                >
                  <Tweet 
                    textoum={item.user_login} 
                    textodois={item.message} 
                    picture="https://p7.hiclipart.com/preview/722/101/213/computer-icons-user-profile-circle-abstract.jpg" 
                  />
                </TouchableOpacity>
              )}
            />
          }
            <StatusBar style="auto" />
          </View>

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

      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#fff',


  },
  scroll: {
      marginHorizontal: 6,
  },
  button_view:{
    position: "absolute",
    top: 700,
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
