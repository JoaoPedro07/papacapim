import { ScrollView, StyleSheet, Text, TextInput, View, Image} from "react-native";

export function Tweet(props){
    return (
        <View style={styles.container}>
            <Image source ={{uri:props.picture}} style={{width:40, height:40, borderRadius:20}}/>
            <View style={styles.caixaTituloTexto}>
                <View>
                    <Text style={styles.user}>{props.textoum}</Text>
                </View>
                <Text style={styles.texto}>{props.textodois}</Text>
                
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{

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
    }

});


