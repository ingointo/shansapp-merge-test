import React from "react";
import { StyleSheet,Text,TouchableOpacity,View } from "react-native";

export  default function ContactItem({item}){
    console.log(item)
    return(
        <TouchableOpacity >
            <View style={styles.item}>
                <Text style={styles.text}>{item.name} </Text>
            </View>
        </TouchableOpacity>
    );
}


const styles=StyleSheet.create({

    item:{
        flexDirection:'row',
        padding:16,
        marginTop:16,
        borderWidth:1,
        borderStyle:'dotted',
        borderRadius:10,
    },

    text:{
        marginLeft: 10,
        fontSize:20,
    },



});