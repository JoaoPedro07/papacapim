import {Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import { buscarComentarios } from './functions/buscarComent';
import { AuthContext } from '../contexts/auth'
import React, { useContext } from 'react'
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { excluirPost } from './functions/excluirPost';

export default function MostrarPost({navigation, route}){
    const {user, setUser} = useContext(AuthContext)
    const {login, message, id} = route.params
    const [loading, setLoading] = useState(false)
    const [coments, setComents] = useState()
    console.log("login:", login, "user.login:", user.user)

    async function comentarios(){
        var coments = await buscarComentarios(user.token, id, setLoading)
        var coments = coments.slice(0).reverse()
        console.log("coments:", coments)
        setComents(coments)
    }
    
    async function excluirPubli(id) {
        response = excluirPost(user.token, id)
        if(response){
            Alert.alert("Exclusão", "Esta publicação foi excluida com êxito")
            navigation.navigate("Feed")
        }
    }
    useEffect(() => {
        comentarios()
      }, [])
    return (
        
        <View style={styles.container}>

          <View style={styles.caixaTituloTexto}>
                 <View>
                    <Image source={{uri:"https://p7.hiclipart.com/preview/722/101/213/computer-icons-user-profile-circle-abstract.jpg"}}  style={{ width: 50, height: 50 }}/>
                </View>
              <View>
                  <Text style={styles.user}>{login}</Text>
              </View>
          </View>
          <View>
            <Text style={styles.texto}>{message}</Text>
          </View>
           <SafeAreaView>
                <ScrollView style={{borderWidth:1, borderColor:'cyan'}}>
                    <Text>Comentários</Text>
                    {coments != undefined  &&
                        coments.map((item, index) => {
                            return(
                            <View style={{marginBottom:15}}key={index}>
                                <View style={styles.caixaTituloTexto}>
                                    <View>
                                        <Image source={{uri:"https://p7.hiclipart.com/preview/722/101/213/computer-icons-user-profile-circle-abstract.jpg"}}  style={{ width: 30, height: 30 }}/>
                                    </View>
                                    <View>
                                        <Text style={styles.user}>{item.user_login}</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.texto}>{item.message}</Text>
                                </View>
                            </View>
                        )})

                        
                    }
                </ScrollView>
           </SafeAreaView>
           {(login === user.user) && 
            <View style={styles.button_delete_view}>
                <TouchableOpacity onPress={() => excluirPubli(id)}>
                    <View style={styles.button_postar}>
                        <Text style={styles.button_label}>{'Excluir post'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
           }
           <View style={styles.button_view}>
                <TouchableOpacity onPress={() => navigation.navigate("Comentar", {"id":id})}>
                    <View style={styles.button_postar}>
                        <Text style={styles.button_label}>{'Responder'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container:{
          flex: 1,
          padding: 10,
    
          flexDirection: "column",
    
      },
      caixaTituloTexto: {
          width: 340,
          flexDirection: 'row',
          marginLeft: 10,
         
      },
      user: {
          fontWeight: "bold" ,
          margin: 2,
          fontSize: 18,
      },
      texto:{
          marginLeft: 4,
          padding: 4,
    
    
          
          fontSize: 18,
      },
      button_label:{
  
        fontSize: 18,
        margin: 4,
        color: 'white',
      },
      button_postar:{
        margin: 5,
        backgroundColor: 'blue',
        alignItems: 'center',
        borderStyle:'solid',
        borderWidth: 1,
        borderRadius: 5,
      },
      button_view:{
        position: "absolute",
        top: 700,
        left: 260,
        padding: 10,
        flexDirection: "row",
        height: 70,
      },
      button_delete_view:{
        position: "absolute",
        top: 700,
        left: 150,
        padding: 10,
        flexDirection: "row",
        height: 70,
      },
    
})