import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import SignIn from '../SignIn';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import ResetPassword from '../ResetPasswordScreen';
import {useForm, Controller} from 'react-hook-form'


const ForgotPasswordScreen = ({ navigation, route }: any) => {

    const {control, handleSubmit, formState: {errors} } = useForm();

        const onResetPassword = () => {
        navigation.navigate(ResetPassword);
    }
    

    const onSignInPress = () => {
        navigation.navigate(SignIn);
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password.</Text>


                <CustomInput
                    name = "email"
                    placeholder="Email"
                    control={control}
                    rules = {{required: 'Email is required.'}}
                />

                <CustomButton
                    text = "Send Email."
                    onPress={handleSubmit(onResetPassword)} 
                    bgColor={undefined} 
                    fgColor={undefined}
                    type="PRIMARY"
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
        color: 'grey',
        marginVertical: 10,
    },
    link : {
        color: '#ff0015',

    }

});

export default ForgotPasswordScreen;

