import {View, StatusBar, ActivityIndicator} from "react-native";

export default function LoadingComponent() {
    return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <StatusBar style="auto" />

            <ActivityIndicator size={40} />
        </View>
    )
}