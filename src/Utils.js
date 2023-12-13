import { ActivityIndicator, View } from "react-native"
import { Colors } from "./Constants/Colors"

export const Loader=()=>{
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator color={Colors.primary} size={'large'} />
        </View>
    )
}