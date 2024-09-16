import {Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";


export default function Cadastrar({ navigation }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const schema = yup.object({
    name: yup.string().required("Campo obrigatório"),
    telefone: yup.string().required("Campo obrigatório").min(11, "Mínimo 11 caracteres"),
    password: yup.string().required("Campo obrigatório").min(6, "Mínimo 6 caracteres"),
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

  const save = (data) => {
    console.log(data)
  }
  return ( 
    <View style={styles.container}> 
        <Text style={styles.texto}>Usuário</Text>
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

        <Text style={styles.texto}>Telefone</Text>
        <View style={styles.input}>
          <Controller 
          name="telefone" 
          control={control} 
          render={({field: {onChange, value}}) => (
            <TextInput 
            keyboardType="numeric" 
            name="telefone" 
            placeholder='telefone' 
            onChangeText={(value) => onChange(value)}/>
          )}/>
        
        </View>
        {errors?.telefone && <Text style={{color:"red"}}>{errors?.telefone?.message}</Text> }

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