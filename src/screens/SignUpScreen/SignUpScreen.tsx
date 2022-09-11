import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../SignIn';
import ConfirmEmailScreen from '../ConfirmEmailScreen';
import {useForm, Controller} from 'react-hook-form'

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


const SignUpScreen = ({ navigation }: any) => {

    const {control, handleSubmit, formState: {errors}, watch} = useForm();


    const onRegisterPressed = () => {
        navigation.navigate(ConfirmEmailScreen);
    }

    const onTermsOfUsePressed = () => { 
        console.warn("Terms of use Pressed")
    }

    const onPrivacyPressed = () => { 
        console.warn("Privacy Policy Pressed")
    }

    const OnForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
    }

    const onSignInPress = () => {
        navigation.navigate(SignIn);
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput
                    name="username"
                    placeholder="Username"
                    control = {control}
                    rules = {{required: 'Username is required.'}}
                    secureTextEntry={false}
                />
                <CustomInput
                    name="email"
                    placeholder="email"
                    control = {control}
                    rules = {{required: 'Email is required.', pattern: {value: EMAIL_REGEX, message: 'Email is invalid.'}}}
                    secureTextEntry={false}
                />
                <CustomInput
                    name="password"
                    placeholder="Password"
                    control = {control}
                    rules = {{required: 'Password is required.', minLength: {value: 3, message: 'Password should be atleast 3 characteres long'}}}
                    secureTextEntry={true}
                />
                <CustomInput
                    name="repeatpassword"
                    placeholder="Repeat Password"
                    control = {control}
                    rules = {{required: 'Repeated Password is required.',
                    validate: (value: any) =>
                        value === watch("password") || "The passwords do not match!"
                    }}
                    secureTextEntry={true}
                />

                <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)} bgColor={undefined} fgColor={undefined} />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our <Text style={styles.link} onPress={handleSubmit(onTermsOfUsePressed)}>Terms of Use </Text>
                    {' '}and{' '} <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy.</Text>
                </Text>

                <SignInButtons/>
                <CustomButton
                    text = "Have an account? Sign in."
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

export default SignUpScreen;

