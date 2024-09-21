import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import imagem from '../../src/passaro.png';
import {useForm, Controller} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { authUser } from './functions/authUser';
import { useEffect, useState } from 'react';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth';
import { Alert } from 'react-native';
import LoadingComponent from '../../components/loading';
import { Button } from 'react-native-paper';

export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const {user, setUser} = useContext(AuthContext);
  

  const schema = yup.object({
    login: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo Obrigatório"),

  })
  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm({resolver:yupResolver(schema)})

  async function save(data){
    setLoading(true)
    const response  = await authUser(data, setLoading, setError, setSuccess);
    if(response != false){
      setUser({id:response.id, user:response.user_login, token:response.token})
      navigation.navigate("Feed");
    }
    else{
      Alert.alert("Erro", "Usuário e/ou senha incorretos")
    }

  }

  return (
    
    <View style={styles.container}> 
        <View style={styles.divlogin}>
            <Image source ={imagem} style={{width:250, height:250,}}/>
            <Text style={styles.texto}>Usuário</Text>
            <View style={styles.input}>
              <Controller 
              name="login" 
              control={control} 
              render={({field: {onChange, value}}) => (
                <TextInput 
                name="login" 
                placeholder='usuário' 
                onChangeText={(value) => onChange(value)}/>
              )}/>

            </View>
            {errors?.login && <Text style={{color:"red"}}>{errors?.login?.message}</Text> }

            <Text style={styles.texto}>Senha</Text>
            <View style={styles.input}>
              <Controller 
              name="password" 
              control={control} 
              render={({field: {onChange, value}}) => (
                <TextInput 
                name="password" 
                secureTextEntry={true}
                placeholder='senha' 
                onChangeText={(value) => onChange(value)}/>
              )}/>

            </View>
            {errors?.password && <Text style={{color:"red"}}>{errors?.password?.message}</Text> }


            <Button loading={loading} mode='contained-tonal' buttonColor='blue' textColor='white' onPress={handleSubmit(save)}>Logar</Button>

            <TouchableOpacity onPress={() => navigation.navigate("Cadastrar")}>
              <View style={styles.button_cadastro}>
                <Text style={styles.button_label_cadastro}>{'Cadastrar-se'}</Text>
              </View>
            </TouchableOpacity>
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
  button_cadastro:{
    alignItems: 'center',

  },
  button_label_cadastro:{
    fontSize: 16,
    margin: 4,
    color: 'blue',

  },
});
