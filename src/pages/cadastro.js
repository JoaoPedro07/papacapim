import {Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";
import api from "../../services/api"



export default function Cadastrar({ navigation }) {
  const schema = yup.object({
    name: yup.string().required("Campo obrigatório"),
    login: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório").min(6, "Mínimo 6 caracteres"),
    confirm_password: yup.string().required("Campo obrigatório").min(6, "Mínimo 6 caracteres"),
  })
  const {  
    handleSubmit, 
    register, 
    control, 
    setValue, 
    formState: { errors },
  } = useForm({
    resolver:yupResolver(schema),
  });

  async function save(data){
    if(data.password == data.confirm_password){
      const log = await api
      .post("/users",{
          "user": {
            "login": data.login,
            "name": data.name,
            "password": data.password,
            "password_confirmation": data.password_confirm,
          }
      })
        .catch((err) => {
          if(err = 422){
            console.log("Usuário já existe")
          }
          else{
            console.log("ops! ocorreu um erro: " + err);
          }

        });
    }

  }
  return ( 
    <View style={styles.container}> 
        <Text style={styles.texto}>Nome</Text>
        <View style={styles.input}>
          <Controller 
          name="name" 
          control={control} 
          render={({field: {onChange, value}}) => (
            <TextInput 
            name="name" 
            placeholder='nome' 
            onChangeText={(value) => onChange(value)}/>
          )}/>
        
        </View>
        {errors?.name && <Text style={{color:"red"}}>{errors?.name?.message}</Text> }

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


        <Text style={styles.texto}>Senha</Text>
        <View style={styles.input}>
          <Controller 
          name="confirm_password" 
          control={control} 
          render={({field: {onChange, value}}) => (
            <TextInput 
            name="confirm_password" 
            secureTextEntry={true}
            placeholder='confirmar senha' 
            onChangeText={(value) => onChange(value)}/>
          )}/>
        
        </View>
        {errors?.confirm_password && <Text style={{color:"red"}}>{errors?.confirm_password?.message}</Text> }

        <Button title='Cadastrar' onPress={handleSubmit(save)}></Button>
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
