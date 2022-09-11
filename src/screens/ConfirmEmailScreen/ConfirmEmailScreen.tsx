import React from 'react';
import { useState } from 'react';
import {Alert, Modal, Text, View, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import SignIn from '../SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { useForm } from 'react-hook-form';



const ConfirmEmailScreen = ({ navigation }: any) => {

    const {control, handleSubmit, formState: {errors}, watch} = useForm();


    const onConfirmPressed = () => {
        navigation.navigate(SignIn);
        Alert.alert("Account has been succesfully registered.");
    }

    const onResendPress = () =>{
        console.warn("Resend Pressed")
    }
    

    const onSignInPress = () => {
        navigation.navigate(SignIn);
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your email</Text>
                <CustomInput
                    name="code"
                    placeholder="Confirmation code"
                    control = {control}
                    rules = {{required: 'Code is required.'}}
                    secureTextEntry={false}
                />

                <CustomButton 
                    text="Confirm" 
                    onPress={handleSubmit(onConfirmPressed)} 
                    bgColor={undefined} 
                    fgColor={undefined} 
                />


                <CustomButton
                    text="Resend code"
                    onPress={onResendPress}
                    type="SECONDARY" 
                    bgColor={undefined} 
                    fgColor={undefined}
                />

                <CustomButton
                    text = "Back to Sign in."
                    onPress={onSignInPress} 
                    bgColor={undefined} 
                    fgColor={undefined}
                    type="TERTIARY"
                />
            
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 1,
        marginHorizontal: 44,
        width: 300,
    },
    title: {
        marginTop: 80,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10
    },
    text:  {
        color: 'gray',
        marginVertical: 10,
    },
    link : {
        color: '#ff0015',

    }

});

export default ConfirmEmailScreen;

