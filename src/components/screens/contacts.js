import React, { useEffect } from "react";
import { StyleSheet,Text,View,StatusBar,FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import { FAB } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import axios from "axios";
import ContactItem from "../contactitem";



export default function Contacts({navigation}){

    const contacturl='http://137.184.67.138:3004/viewAllContacts';

    const [contacts,setContacts]=useState([])

    const[searchquery,setsearchquery]=useState('');

    const onChangeSearch=query=> setsearchquery(query);

    useEffect(()=>{
        axios.get( contacturl).then((res)=>{
            setContacts(res.data);
        }).catch(err=>console.log(err))
    
    },[])


    console.log("Contacts dashboard")
    console.log(contacts)





    return(
        
        <View>
            <StatusBar backgroundColor={"#ffa600"}/>

            <Searchbar
                placeholder="Search contacts"
                onChangeText={onChangeSearch}
                value={searchquery}
                style={{
                    borderRadius:0,
                    borderWidth:12,
                    borderColor:'#ffa600',
                }}
                
                
            />
            <Text>{searchquery}</Text>
            <FlatList
                data={contacts}
                keyExtractor={(item) => item._id} 
                renderItem={({ item }) => <ContactItem item={item} />}
            />

            <FAB
            style={styles.fab}
            icon={() => <MaterialIcons name="contact-page" size={24} color="white" />}
            onPress={() =>navigation.navigate('addcontacts') }
            />

        </View>
    );
}

const styles=StyleSheet.create({
    fab: {
        position: 'absolute',
        right: 28,
        bottom: -550,
        backgroundColor: '#ffa600',
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },


});
