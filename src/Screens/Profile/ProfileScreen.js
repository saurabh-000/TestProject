import React, {useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../Constants/Colors";
import ApplicationsComponent from "./Components/ApplicationsComponent";
import SettingsComponent from "./Components/SettingsComponent";
import CustomTab from "../../ResusableComponent/CustomTab";
import Fonts from "../../Constants/Fonts";
const ProfileScreen=({navigation})=>{
    const [activeTab,setActiveTab]=useState(0)

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.profileSectioncontainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backButton}>
                    <Image source={require('../../Assets/left-arrow.png')} style={styles.backIcon}  resizeMode="contain"/>
                </TouchableOpacity>
                <View style={styles.profileContainer}>
                    <View style={styles.profileImagecontainer}>
                        <Image source={require('../../Assets/child_avatar.png')} style={styles.profileImage}/>
                    </View>
                    <Text style={styles.name}>Suvojit</Text>
                    <View style={styles.appStatusContainer}>
                        <Text style={styles.appStatusText}>Connected</Text>
                        <Image source={require('../../Assets/check.png')} style={styles.appStatusIcon}/>
                    </View>
                </View>

            </View>
            <View style={styles.TabContainer}>
                <CustomTab activeTab={activeTab} onPressActiveTab={(val)=>setActiveTab(val)} tab1Name={'Applications'} tab2Name={'Settings'}/>
            </View>
            <View style={styles.TabViewContainer}>
            {
                activeTab===0
                ?
                <ApplicationsComponent/>
                :
                <SettingsComponent/>
            }
            </View>
            
        </SafeAreaView>
        
    )
}
const styles=StyleSheet.create({
    container:{flex:1},
    backButton:{position:'absolute',left:20,top:20},
    backIcon:{width:15,height:15},
    profileContainer:{justifyContent:'center',alignItems:'center'},
    profileSectioncontainer:{backgroundColor:Colors.primary,alignItems:'center',padding:15},
    profileImagecontainer:{width:100,height:100,borderRadius:600,backgroundColor:Colors.white,justifyContent:'center',alignItems:'center'},
    profileImage:{height:70,width:70,borderRadius:200},
    name:{fontSize:30,marginVertical:10,color:'white',fontFamily:Fonts.RobotoRegular},
    appStatusContainer:{flexDirection:'row',backgroundColor:Colors.white,justifyContent:'space-evenly',alignItems:'center',paddingVertical:7,paddingHorizontal:15,borderRadius:30},
    appStatusText:{color:Colors.black,fontWeight:'bold',marginHorizontal:5,fontFamily:Fonts.RobotoRegular},
    appStatusIcon:{width:20,height:20,marginHorizontal:5},
    TabContainer:{backgroundColor:Colors.white},
    TabViewContainer:{flex:1}
})
export default ProfileScreen