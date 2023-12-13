import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Colors } from "../Constants/Colors"
import Fonts from "../Constants/Fonts"

const CustomTab=({activeTab,onPressActiveTab,tab1Name,tab2Name})=>{
    return(
        <View style={styles.tabContainer}>
                    <View style={styles.tabItemContainer}>
                        <TouchableOpacity onPress={()=>onPressActiveTab(0)} style={[{borderBottomWidth:activeTab===0?2:0},styles.tabItem]}>
                        <Text style={styles.tabText}>{tab1Name}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tabItemContainer}>
                        <TouchableOpacity onPress={()=>onPressActiveTab(1)} style={[{borderBottomWidth:activeTab===1?2:0},styles.tabItem]}>
                            <Text style={styles.tabText}>{tab2Name}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
    )
}
const styles=StyleSheet.create({
    tabContainer:{flexDirection:'row',backgroundColor:Colors.primary,justifyContent:'space-around',alignItems:'center'},
    tabItemContainer:{justifyContent:'center',alignItems:'center'},
    tabItem:{borderBottomColor:Colors.white,paddingHorizontal:20,width:120,justifyContent:'center',alignItems:'center'},
    tabText:{color:Colors.white,marginVertical:10,fontFamily:Fonts.RobotoRegular}
})
export default CustomTab