import React from 'react';
import { useState } from 'react';
import {Alert, Text, View, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SignIn from '../SignIn';
import { NavigationContainer } from '@react-navigation/native';

const ResetPassword = ({ navigation }: any) => {
const [code, setCode] = useState('');
const [newpassword, setnewpassword] = useState('');
    const onConfirmPressed = () => {
        navigation.navigate(SignIn);
        Alert.alert("Password has been reset.");

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
                <Text style={styles.title}>Reset your password.</Text>
                <CustomInput 
                value={code} 
                setValue={setCode} 
                placeholder={"Enter your confirmation code."} 
                secureTextEntry={false}                
                />
                <CustomInput 
                value={newpassword} 
                setValue={setnewpassword} 
                placeholder={"Enter your new password."} 
                secureTextEntry={false}                
                />

                <CustomButton 
                text="Confirm" 
                onPress={onConfirmPressed} 
                bgColor={undefined} 
                fgColor={undefined} />


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

export default ResetPassword;

