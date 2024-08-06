import { ScrollView, StyleSheet, Text, TextInput, View, Image} from "react-native";
 
export function Contact(props){
    const uri = "https://reactnative.dev/docs/assets/p_cat"+props.cat+".png";
    return (
        <View style={styles.caixatexto}>
            <Image source ={{uri:uri}} style={{width:100, height:100}}/>
            <View style={styles.view}>
                <Text style={styles.textum}>{props.textoum}</Text>
                <Text style={styles.textdois}>{props.textodois}</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    caixatexto:{
        flexDirection: "row",

    },
    view: {
        justifyContent: "center",     
    },
    textum: {
        fontWeight: "bold" ,
        margin: 2,
        fontSize: 18,
    },
    textdois:{
        margin: 2,
        fontSize: 18,
    }

});


