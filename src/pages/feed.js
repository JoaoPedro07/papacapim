import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Tweet } from '../../components/Tweet';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

export default function Contatos({ navigation }) {
  const {user} = useContext(AuthContext);
  return (
    
      <SafeAreaView style={styles.container}>
        {console.log(user)}
        <ScrollView style={styles.scroll}>
          <View >
            <StatusBar style="auto" />

            <TouchableOpacity onPress={() => navigation.navigate("MostrarUsuario", {"usuario":"Pedro", "picture":"https://pbs.twimg.com/profile_images/1695063177996713985/InPVE-hP_400x400.jpg"})}>
              <Tweet textoum="Pedro" textodois="Muito bom dia, antes de falar sobre a etapa 3 da Vuelta,  e essa transferência bombástica de Julian Alaphilippe para a Tudor? O rumor era forte, mas um bicampeão mundial deixar o WorldTour para um projeto da segunda divisão..." picture="https://pbs.twimg.com/profile_images/1695063177996713985/InPVE-hP_400x400.jpg"/>
            </TouchableOpacity>
 
          </View>
        </ScrollView>
        <View style={styles.button_view}>
            <TouchableOpacity onPress={() => navigation.navigate("Postar")}>
              <View style={styles.button}>
                <Text style={styles.button_label}>{'Postar'}</Text>
              </View>
            </TouchableOpacity>

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
    flexDirection: "row"
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

});
