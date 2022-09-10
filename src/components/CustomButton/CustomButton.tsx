import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor}) =>{
    return (
        <Pressable
          onPress={onPress}
          style={[
            styles.container,
            styles[`container_${type}`],
            bgColor ? {backgroundColor: bgColor} : {}
            ]}>
            <Text style={[
                styles.text,
                 styles[`text_${type}`],
                 fgColor ? {color: fgColor} : {}
                 ]}
                 >
                    {text}
                 </Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    container: {

        width: '100%',
        padding: 14,
        paddingTop: 10,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
    },

    container_PRIMARY: {
        backgroundColor: '#003366',

    },

    container_TERTIARY: {
        marginTop: 4,
        marginBottom: 4,
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
        marginBottom: 2
    },

    text_TERTIARY : { 
        color: 'gray'
    }
});

export default CustomButton;