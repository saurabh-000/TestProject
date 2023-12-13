import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Colors } from "../../../Constants/Colors"
import Fonts from "../../../Constants/Fonts"
const SettingsComponent=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.screenName}>
                Settings component
            </Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.white
    },
    screenName:{color:Colors.black,fontFamily:Fonts.RobotoRegular}
})
export default SettingsComponent