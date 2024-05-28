import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function ListItem({ element, DeleteHandler }){


  return(
    <TouchableOpacity onPress={() => DeleteHandler(element.key)}>
        <Text style={styles.text}>{element.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    text:{
        padding:20,
        textAlign: 'center',
        borderRadius:20,
        backgroundColor: 'orange',
        borderWidth:1,
        marginTop:20,
        width:'60%',
        marginLeft:'20%',
    }

});