import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../SignIn';
import ConfirmEmailScreen from '../ConfirmEmailScreen';


const SignUpScreen = ({ navigation }: any) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
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
                <CustomInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={false} />
                <CustomInput placeholder="Email" value={email} setValue={setEmail} secureTextEntry={false} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
                <CustomInput placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true} />

                <CustomButton text="Register" onPress={onRegisterPressed} bgColor={undefined} fgColor={undefined} />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use </Text>
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

