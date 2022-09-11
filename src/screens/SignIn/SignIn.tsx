import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SignInButtons from '../../components/SocialSignInButtons';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Home';
import SignUpScreen from '../SignUpScreen';




const SignIn = ({ navigation }: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();
    const onSignInPresseed = () => {
        navigation.navigate(Home);
    }
    const OnForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
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
