import {Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView} from 'react-native';
import { buscarComentarios } from './functions/buscarComent';
import { AuthContext } from '../contexts/auth'
import React, { useContext } from 'react'
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function MostrarPost({route}){
    const {user, setUser} = useContext(AuthContext)
    const {login, message, id} = route.params
    async function comentarios(){
        coments = await buscarComentarios(user.token, id)
        coments = coments.slice(0).reverse()
        console.log(coments)
    }
    
    useEffect(() => {
        comentarios()
      }, [])
    return (
        <View style={styles.container}>
          <View style={styles.caixaTituloTexto}>
              <View>
                  <Text style={styles.user}>{login}</Text>
              </View>
          </View>
          <View>
            <Text style={styles.texto}>{message}</Text>
          </View>
           <SafeAreaView>
                <ScrollView>
                    {console.log("comentários:", coments)}
                    {coments != null &&
                        coments.map((item, index) => {
                            return(
                            <View style={{marginBottom:15}}key={index}>
                                <View style={styles.caixaTituloTexto}>
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
          marginLeft: 10,
          justifyContent: "center",     
      },
      user: {
          fontWeight: "bold" ,
          margin: 2,
          fontSize: 18,
      },
      texto:{
          marginLeft: 40,
          padding: 4,
    
    
          
          fontSize: 18,
      },
      
    
})