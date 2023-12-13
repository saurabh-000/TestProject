import React, { useState } from "react"
import { useFocusEffect } from "@react-navigation/native"
import { FlatList, Image, StyleSheet, Switch, Text, ToastAndroid, View } from "react-native"
import { POST } from "../../../APIs"
import { APPURL } from "../../../APIs/AppUrl"
import { Colors } from "../../../Constants/Colors"
import { Loader } from "../../../Utils"
import NetInfo from "@react-native-community/netinfo";
import Fonts from "../../../Constants/Fonts"
const ApplicationsComponent=()=>{
    const [loading,setLoading]=useState(false)
    const [appList,setAppList]=useState([])
    useFocusEffect(
        React.useCallback(()=>{
            
            
            const unsubscribe = NetInfo.addEventListener(state => {
                console.log("Connection type", state.type);
                console.log("Is connected?", state.isConnected);
                 if(state.isConnected){
                    callAPPList(378)
                }else{
                 ToastAndroid.show("Please connect to internet",ToastAndroid.LONG)
                }
              });
              
              
            return ()=> unsubscribe()
        },[])
    )

    const callAPPList=(kidId)=>{
        setLoading(true)
        POST(APPURL.APP_LIST.replace('<kid_id>',kidId)).then(response=>{
            console.log(response)
            if(response && response?.success){
                let modifiedList=response?.data?.app_list.map((item,index)=>{
                    return {...item,is_toggle_on:true}
                })
                console.log("modifiedList",modifiedList)
                setAppList(modifiedList)
            }else{
                ToastAndroid.show("Something went wrong!!",ToastAndroid.LONG)                
            }
        }).catch((e)=>{
            console.log(e)
            ToastAndroid.show("Something went wrong!!",ToastAndroid.LONG)
        })
        .finally(()=>setLoading(false))
    }
    const toggleSwitch = (itemId) => {
        const updatedData = appList.map(item =>
            item.app_id === itemId ? { ...item, is_toggle_on: !item.is_toggle_on } : item
          );
          setAppList(updatedData)
    }


    const _renderApps=({item})=>{
        return(
            <View style={styles.itemContainer}>
                <View style={styles.left}>
                <Image source={{uri:item?.app_icon}} height={50} width={50}  resizeMode='contain'  />
                <Text numberOfLines={1} style={styles.appName}>{item?.app_name}</Text>
                </View>
                <View style={styles.right}>
                <Switch
                    trackColor={{false: Colors.trackDisableColor, true: Colors.trackEnableColor}}
                    thumbColor={item?.is_toggle_on ? Colors.primary : Colors.thumbEnableColor}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>toggleSwitch(item?.app_id)}
                    value={item?.is_toggle_on}
                />
                </View>
                
            </View>
        )
    }

    return(
        <>
            <View style={styles.container}>
            {loading && <Loader/>}
             <FlatList
             data={appList}
             renderItem={_renderApps}
             showsVerticalScrollIndicator={false}
             />   
            </View>
        </>
        
    )
}
const styles=StyleSheet.create({
    container:{paddingHorizontal:10,backgroundColor:'white',flex:1},
    itemContainer:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:10,marginVertical:15},
    left:{flexDirection:'row',alignItems:'center',flex:8,},
    appName:{marginHorizontal:10,fontSize:16,fontFamily:Fonts.RobotoMedium,color:Colors.black},
    right:{flex:4}
})
export default ApplicationsComponent