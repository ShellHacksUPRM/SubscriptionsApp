import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screens/SignIn';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import ConfirmResetPassword from './src/screens/ResetPasswordScreen';
import AppLoading from 'expo-app-loading';
import RootStack from './src/navigators/RootStack';
import { useFonts } from "expo-font";

export default function App() {
	let [fontsLoaded] = useFonts({
		"Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
		"Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />
	}

	return (
		<RootStack />
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});