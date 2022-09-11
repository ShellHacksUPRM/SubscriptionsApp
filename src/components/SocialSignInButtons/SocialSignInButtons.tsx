import React from 'react'
import { View, Text} from 'react-native'
import CustomButton from '../CustomButton'

const SignInButtons = () => {
    const onSignInFacebook = () => {
        console.warn("Sign in with Facbook");
    }

    const onSignInGoogle = () =>{
        console.warn("Sign in with Google");
    }

    const onSignInApple = () => {
        console.warn("Sign in with Apple");
    }
    
    return (
        <View>
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

                
        </View>

        
    )
}

export default SignInButtons