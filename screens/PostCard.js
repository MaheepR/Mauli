import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


export default class PostCard extends Component {
  render() {
      return (
        <View style={styles.container}>
            <View style={styles.cardContainer}> 
                <View style={styles.authorContainer}>
                    <View style={styles.authorImageContainer}>
                        <Image>
                            source={require("../assets/profile_img.png")}
                            style={styles.profileImage}
                        </Image>
                    </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                </View>
                <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>
                        {this.props.post.caption}
                    </Text>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
                        <Text style={styles.likeText}>12k</Text>
                    </View>
                </View>
            </View>
        </View>
      );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardContainer: {
    margiTop:-20,
    marginBottom:20,
    marginLeft:20,
    marginRight:20,
    backgroundColor:"#2f345d",
    borderRadius:20,
    height:undefined,
    padding:10,
  },
  authorContainer:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
  },
  titleContainer:{
    flexDirection:"row"
  },
  titleTextContainer:{
    flex:1,
  },
  storyTitleText:{
    fontSize:25,
    color:"white",
  },
  authorNameText:{
    fontSize:18,
    color:"white",
  },
  captionText:{
    fontSize:13,
    color:"white",
  },
 captionContainer:{
    marginTop:5,
  },
  actionContainer:{
    marginTop:10,
    justifyContent:"center",
    alignItems:"center"
  },
  likeButton:{
    backgroundColor:"#eb3948",
    borderRadius:30,
    width:160,
    height:40,
    flexDirection:"row"
  },
  likeText:{
    color:"white",
    fontSize:25,
    marginLeft:25,
    marginTop:6,
  }
});
