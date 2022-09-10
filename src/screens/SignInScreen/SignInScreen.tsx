import React from 'react';
import { useState } from 'react';
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';




const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();
    const onSignInPresseed = () => {
        console.warn("Sign in");
    }

    const OnForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
    }

    const onSignInFacebook = () => {
        console.warn("Sign in with Facbook");
    }

    const onSignInGoogle = () =>{
        console.warn("Sign in with Google");
    }

    const onSignInApple = () => {
        console.warn("Sign in with Apple");
    }

    const onSignUpPress = () => {
        console.warn("onSignUpPress")
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root}>
                <Image source={require('./images/capitalonelogo.png') } 
                style={[styles.logo, {height: height * 0.1}]} 
                resizeMode="contain"
                />
                <CustomInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={false} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />

                <CustomButton
                    onPress={onSignInPresseed}
                    
                    text="Sign In" bgColor={undefined} fgColor={undefined}            />

                <CustomButton
                    onPress={OnForgotPasswordPressed}
                    text="Forgot password?"
                    type="TERTIARY"
                    bgColor={undefined}
                    fgColor={undefined}            
                />

                <CustomButton
                    onPress={onSignInFacebook}
                    text="Sign In with Facebook"
                    bgColor="E7EAF4"
                    fgColor="4765A9"
                />
                <CustomButton
                    onPress={onSignInGoogle}
                    text="Sign In with Google"
                    bgColor="FAE9EA"
                    fgColor= "DD4D44"
                />
                <CustomButton
                    onPress={onSignInApple}
                    text="Sign In with Apple"
                    bgColor="e3e3e3"
                    fgColor= "363636"
                />

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
        width: 300,
    },
    logo: {
        maxWidth: 300,
        maxHeight: 100,
        marginTop: 100,
        marginBottom: 1
    }

});

export default SignInScreen;

