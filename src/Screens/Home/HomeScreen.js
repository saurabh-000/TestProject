import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Colors } from "../../Constants/Colors";
import Fonts from "../../Constants/Fonts";
const HomeScreen=()=>{
    const navigation=useNavigation()
    return(
        <View style={styles.container}>
            <Text style={styles.screenName}>Home screen</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('SecondScreen')} style={styles.button}>
                <Text style={styles.buttonText}>Go to Profile screen</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.white
    },
    screenName:{
        color:Colors.black,
        fontFamily:Fonts.RobotoRegular
    },
    button:{
        paddingHorizontal:30,
        paddingVertical:20,
        backgroundColor:Colors.primary,
        borderRadius:10,
        marginVertical:20
    },
    buttonText:{
        color:Colors.white,
        fontFamily:Fonts.RobotoRegular
    }
})
export default HomeScreen