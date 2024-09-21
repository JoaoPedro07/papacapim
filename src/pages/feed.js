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
