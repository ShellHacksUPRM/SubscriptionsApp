import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import SignIn from '../SignIn';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import ResetPassword from '../ResetPasswordScreen';


const ForgotPasswordScreen = ({ navigation, route }: any) => {
    const [email, setEmail] = useState('');
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
                    value = {email}
                    setValue = {setEmail}
                    placeholder = {"Enter your email address."}
                    secureTextEntry = {false}
                />

                <CustomButton
                    text = "Send Email."
                    onPress={onResetPassword} 
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

