import {Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { saveUser } from "./functions/saveUser";
import { useState } from 'react';
import Modal from "../../components/modal";
import { AuthContext } from '../contexts/auth';
import React, { useContext } from 'react';
import { deleteUser } from './functions/deleteUser';



export default function Cadastrar({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const {user, setUser} = useContext(AuthContext);

  function save(data){
      console.log("deletar")
      deleteUser(user.token, user.id, setLoading, setError, setSuccess);

  }
  function closeModal(){
    setSuccess(false);
    navigation.navigate("Login");
  }
  return ( 
      <View>
        <Button title='Deletar conta' onPress={save}></Button>
        {success && (
          
              <Modal
                open ={true}
                close ={() => closeModal()}
                message={"Usuário deletado com sucesso"}
              />
             
        )}
        {error && (
                      
              <Modal
                 open ={true}
                 close ={!error}
                 message={"Ocorreu um erro ao deletar o usuário"}
              />
        )}
    </View>

  );
} 



const styles = StyleSheet.create({
  texto:{
    fontSize: 16,
  },
  container:{
    padding: 10,
  },
  input: {
    borderColor: '#333',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
  }

});
