import { StatusBar, View, TextInput, ScrollView, Text, TouchableOpacity} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { buscarUser } from "./functions/buscarUser"
import React, { useState, useEffect } from 'react';
import { AuthContext } from "../contexts/auth"
import { useContext } from "react"
import { Alert } from "react-native";


export default function Pesquisar({navigation}){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [users, setUsers] = useState(null);
    const [searchWord, setSearchWord] = useState('')
    const {user, setUser} = useContext(AuthContext);

    async function busca() {
        try {
          console.log("função")
          const usersData = await buscarUser(searchWord, user.token, setLoading, setError, setSuccess);
          return usersData;
        } catch (error) {
          console.error('Erro ao buscar usuários:', error);
        }
      }
    
    const fetchUsers = async () => {
            const usersData = await busca();
            setUsers(usersData); 
          };
    
    useEffect(() => {
        fetchUsers()
    }, [searchWord])

    if(users != null){
        return (
            <View style={{flex: 1, alignItems:'center', marginTop:30}}>
                <StatusBar barStyle='light-content'/>
                <TextInput 
                placeholder='pesquisar'
                onChangeText={setSearchWord}
                style={{width:350,height:40, borderColor:'black', borderWidth:0.6}}
                />
            
                <SafeAreaView>
                    <ScrollView>
                        {searchWord != '' && users.filter((val) => {
                            if(searchWord == ""){
                                return val
                            } else if(val.name.includes(searchWord)){
                                return val
                            }
                        } ).map((item, index) => (
                            <TouchableOpacity style={{width:350,height:40, backgroundColor:'#f7f7f7', justifyContent:'center', margin:2, borderColor:'black', borderWidth:0.2}} key={index} onPress={() => navigation.navigate("MostrarUsuario", {"usuario":item.name, "login":item.login})}>
                                <Text style={{}} key={index}>{item.name}</Text>
                            </TouchableOpacity>

                        ))}
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }

}
