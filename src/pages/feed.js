import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Tweet } from '../../components/Tweet';

export default function Contatos({ navigation }) {

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View >
            <StatusBar style="auto" />
            <TouchableOpacity onPress={() => navigation.navigate("MostrarUsuario", {"usuario":"Pedro", "picture":"https://pbs.twimg.com/profile_images/1695063177996713985/InPVE-hP_400x400.jpg"})}>
              <Tweet textoum="Pedro" textodois="Muito bom dia, antes de falar sobre a etapa 3 da Vuelta,  e essa transferência bombástica de Julian Alaphilippe para a Tudor? O rumor era forte, mas um bicampeão mundial deixar o WorldTour para um projeto da segunda divisão..." picture="https://pbs.twimg.com/profile_images/1695063177996713985/InPVE-hP_400x400.jpg"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("MostrarUsuario", {"usuario":"Terrible Maps", "picture":"https://pbs.twimg.com/profile_images/695741339326160900/CalT3T7Y_200x200.jpg"})}>
              <Tweet textoum="Terrible Maps" textodois="I don't speak Latin, unfortunately, but I'm going to just guess that this is a terrible map" picture="https://pbs.twimg.com/profile_images/695741339326160900/CalT3T7Y_200x200.jpg"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("MostrarUsuario", {"usuario":"LOUD", "picture":"https://pbs.twimg.com/profile_images/1820916374950002689/KmoWpVhO_200x200.jpg"})}>
              <Tweet textoum="LOUD" textodois="Botamos 4 jogadores da LOUD VALORANT num mapa de Lethal Company e fomos surpreendidos em quão desesperado o Cauanzin é em jogos de suspense" picture="https://pbs.twimg.com/profile_images/1820916374950002689/KmoWpVhO_200x200.jpg"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("MostrarUsuario", {"usuario":"Time Brasil", "picture":"https://pbs.twimg.com/profile_images/1798778033366880256/9azdm_Qz_400x400.jpg"})}>
              <Tweet textoum="Time Brasil" textodois="Botamos 4 jogadores da LOUD VALORANT num mapa de Lethal Company e fomos surpreendidos em quão desesperado o Cauanzin é em jogos de suspense" picture="https://pbs.twimg.com/profile_images/1798778033366880256/9azdm_Qz_400x400.jpg"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("MostrarUsuario", {"usuario":"Dólar Bipolar", "picture":"https://pbs.twimg.com/profile_images/1438613648591794184/UUAWezY8_400x400.jpg"})}>
              <Tweet textoum="Dólar Bipolar" textodois="Dólar subiu ☹️ - R$ 5,41 às 16:20
Variação 📉 -1,15% (R$ 0,06)" picture="https://pbs.twimg.com/profile_images/1438613648591794184/UUAWezY8_400x400.jpg"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("MostrarUsuario", {"usuario":"Movistar", "picture":"https://pbs.twimg.com/profile_images/1822876948428689409/kQfpg8vq_400x400.jpg"})}>
              <Tweet textoum="Movistar" textodois="🇧🇷🙏🏻 Vinícius Rangel pone punto y final a su etapa con Movistar Team y regresa a Brasil, tras cinco años compitiendo en Europa

Carta abierta del ciclista de Cabo Frio, en su despedida de la escuadra 
@Telefonica
 → http://movistarteam.com/gracias-vini

#RodamosJuntos, siempre 🫂💙" picture="https://pbs.twimg.com/profile_images/1822876948428689409/kQfpg8vq_400x400.jpg"/>
            </TouchableOpacity>
  
 
          </View>
        </ScrollView>
        <View style={styles.button_view}>
            <TouchableOpacity onPress={() => navigation.navigate("Postar")}>
              <View style={styles.button}>
                <Text style={styles.button_label}>{'Postar'}</Text>
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
