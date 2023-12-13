import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../Screens/Home/HomeScreen"
import ProfileScreen from "../Screens/Profile/ProfileScreen"
const Stack=createNativeStackNavigator()
const Main=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="FirstScreen" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="SecondScreen" component={ProfileScreen} options={{headerShown:false}} />
        </Stack.Navigator>
    )
    
}
export default Main