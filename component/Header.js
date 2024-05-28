import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Header(){


  return(
    <View style={styles.main}>
        <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    main:{
        justifyContent: 'flex-start',
        height: 100,
        backgroundColor: 'blue'
    }, 
    text:{
        top: 50,
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
    }

});