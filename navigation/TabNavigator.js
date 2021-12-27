import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from "react-native-responsive-fontsize";
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab=createMaterialBottomTabNavigator();

const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStyle}
        screenOptions={({route})=>({
          tabBarIcon:({focused,color,size})=>{
            let iconName;
            if(route.name==='Feed'){
              iconName=focused?'book':'book-outline'
            }else if(route.name==='CreatePost'){
              iconName=focused?'create':'create-outline'
            }
            return <Ionicons name={iconName}size={size}color={color} style={styles.icons}/>
          }
        })}
          tabBarOptions={{
            activeTintColor:"tomato",
            inActiveTintColor:"grey",
          }}
      >
        <Tab.Screen name="Feed" component={Feed}/>
        <Tab.Screen name="CreatePost" component={CreatePost}/>
      </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});


export default BottomTabNavigator;

