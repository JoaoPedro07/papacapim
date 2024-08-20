import {StyleSheet, Text,View,Image, Button, TouchableOpacity } from 'react-native';


export default function MostrarUsuario({route, navigate}) {
  const {usuario} = route.params;
  const {picture} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.viewsuperior}>
        <Image source ={{uri:picture}} style={{width:90, height:90, borderRadius:40}}/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textobotao}>seguir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.caixaTituloTexto}>
          <View>
              <Text style={styles.user}>{usuario}</Text>
          </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      padding: 10,
      flexDirection: "column",

  },
  viewsuperior:{
    gap: 218,


    flexDirection: "row",

  },
  caixaTituloTexto: {
      width: 340,

      justifyContent: "center",     
  },
  user: {
      fontWeight: "bold" ,
      margin: 2,
      fontSize: 18,
  },
  texto:{
      
      padding: 4,


      textAlign: 'justify',
      fontSize: 18,
  },
  button:{
    backgroundColor: "white",
    borderRadius: 9,
    alignSelf: 'flex-end',

  },
  textobotao:{
    margin: 5,
    fontSize: 18,
  }

});