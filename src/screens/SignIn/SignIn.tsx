import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SignInButtons from '../../components/SocialSignInButtons';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Home';
import SignUpScreen from '../SignUpScreen';
import ForgotPasswordScreen from '../ForgotPasswordScreen';
import {useForm, Controller} from 'react-hook-form'



const SignIn = ({ navigation }: any) => {


    const {height} = useWindowDimensions();

    const {control, handleSubmit, formState: {errors} } = useForm();



    const onSignInPresseed = (data: any) => {
        console.log(data);
        navigation.navigate(Home);
    }
    const OnForgotPasswordPressed = () => {
        navigation.navigate(ForgotPasswordScreen);
    }

    const onSignUpPress = () => {
        navigation.navigate(SignUpScreen);
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root}>
                <Image source={require('./images/capitalonelogo.png') } 
                style={[styles.logo, {height: height * 0.1}]} 
                resizeMode="contain"
                />
                <CustomInput
                    name = "username"
                    placeholder="Username"
                    control={control}
                    rules = {{required: 'Username is required.'}}
                />
                <CustomInput
                    name="password"
                    placeholder="Password"
                    control = {control}
                    rules = {{required: 'Password is required.'}}
                    secureTextEntry={true}
                />

                <CustomButton
                    onPress={handleSubmit(onSignInPresseed)}
                    text="Sign In" bgColor={undefined} fgColor={undefined}            />

                <CustomButton
                    onPress={OnForgotPasswordPressed}
                    text="Forgot password?"
                    type="TERTIARY"
                    bgColor={undefined}
                    fgColor={undefined}            
                />

                <SignInButtons/>

                <CustomButton
                    text="Don't have an account? Create one"
                    onPress={onSignUpPress}
                    type="TERTIARY" bgColor={undefined} fgColor={undefined}          
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
    logo: {
        maxWidth: 300,
        maxHeight: 100,
        marginTop: 100,
        marginBottom: 1
    }

});

export default SignIn;

