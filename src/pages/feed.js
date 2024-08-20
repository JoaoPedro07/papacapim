import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Tweet } from '../../components/Tweet';

export default function Contatos({ navigation }) {

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View >
            <StatusBar style="auto" />
            <Tweet img="../../src/passaro.png"textoum="Pedro" textodois="Muito bom dia, antes de falar sobre a etapa 3 da Vuelta,  e essa transferência bombástica de Julian Alaphilippe para a Tudor? O rumor era forte, mas um bicampeão mundial deixar o WorldTour para um projeto da segunda divisão..." cat="2"/>
            <Tweet textoum="Julio" textodois="UNIFAN" cat="2"></Tweet>
            <Tweet textoum="Mateus" textodois="UEFS" cat="1"></Tweet>
            <Tweet textoum="Clara" textodois="UFRB" cat="1"></Tweet>
            <Tweet textoum="João" textodois="IFBA" cat="1"></Tweet>
            <Tweet textoum="William" textodois="UFES" cat="2"></Tweet>
            <Tweet textoum="Guilherme" textodois="UFPEL" cat="2"></Tweet>
            <Tweet textoum="Esdras" textodois="UFRJ" cat="1"></Tweet>
            <Tweet textoum="Bia" textodois="UFBA" cat="1"></Tweet>
            <Tweet textoum="Vini" textodois="UFRB" cat="2"></Tweet> 
 
          </View>
        </ScrollView>
        <View style={styles.button}>
            <Button title='Postar' onPress={() => navigation.navigate("Postar")}></Button>
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
  button:{
    padding: 10,
  }

});
