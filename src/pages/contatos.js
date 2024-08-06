import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Contact } from '../../components/CaixaTexto';
export default function Contatos({ navigation }) {

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View >
            <StatusBar style="auto" />
            <Contact textoum="Pedro" textodois="IFBA" cat="2"/>
            <Contact textoum="Julio" textodois="UNIFAN" cat="2"></Contact>
            <Contact textoum="Mateus" textodois="UEFS" cat="1"></Contact>
            <Contact textoum="Clara" textodois="UFRB" cat="1"></Contact>
            <Contact textoum="João" textodois="IFBA" cat="1"></Contact>
            <Contact textoum="William" textodois="UFES" cat="2"></Contact>
            <Contact textoum="Guilherme" textodois="UFPEL" cat="2"></Contact>
            <Contact textoum="Esdras" textodois="UFRJ" cat="1"></Contact>
            <Contact textoum="Bia" textodois="UFBA" cat="1"></Contact>
            <Contact textoum="Vini" textodois="UFRB" cat="2"></Contact> 
 
          </View>
        </ScrollView>
        <View style={styles.button}>
            <Button title='Adicionar' onPress={() => navigation.navigate("addContatos")}></Button>
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
      marginHorizontal: 20,
  },
  button:{
    padding: 10,
  }

});
