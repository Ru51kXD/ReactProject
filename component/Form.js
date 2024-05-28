import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import AddHandler from '../App';
export default function Form({ AddHandler }){

    const [text,setValue] = useState('')

    function OnChange(text){
        setValue(text)
    }
    
  return(
    <View>
        <TextInput 
        style={styles.input} 
        onChangeText={OnChange}
        placeholder="Впишите таск"
        />
        <TouchableOpacity style={styles.addtask} onPress={() => AddHandler(text)}>
                <Text style={styles.buttonText}>Добавить таск</Text>
            </TouchableOpacity>
    </View>
    
    );
}

const styles = StyleSheet.create({
    input:{
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%',
    },
    addtask: {
        backgroundColor: '#6200EE',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 10,
        marginVertical: 5,
        marginHorizontal: '20%',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});