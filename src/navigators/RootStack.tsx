import React, { FunctionComponent, useState } from 'react';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn/SignIn';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPassword from '../screens/ResetPasswordScreen/ResetPassword';
import { colors } from '../components/colors';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Greeting from '../components/Header/Greeting';
import Icon from '../components/Header/Icon';
// import SignIn from './src/screens/SignIn';


export type RootStackParamList = {
	SignIn: undefined;
	SignUpScreen: undefined;
	ConfirmEmailScreen: undefined;
	ForgotPasswordScreen : undefined;
	ResetPassword: undefined;
	Home: undefined;

};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: "#BBBBBB",
						borderBottomWidth: 0,
						shadowColor: "transparent",
						shadowOpacity: 0,
						elevation: 0,
						height: 80,
					},
					headerTintColor: colors.secondary,
					headerRightContainerStyle: {
						paddingRight: 20,
					},
					headerLeftContainerStyle: {
						paddingLeft: 20,
					},
					headerTitleAlign: 'center',
					headerLeft: () => (
						<Icon img="settings" />
					),
				}}
				initialRouteName="SignIn"
			>
				<Stack.Screen
					name="SignIn"
					component={SignIn}
					options={({ navigation, route }) => ({
						headerShown: false,
					})}
				/>

				<Stack.Screen
					name="SignUpScreen"
					component={SignUpScreen}
					options={({ navigation, route }) => ({
						headerShown: false,
					})}
				/>

				<Stack.Screen
					name="ConfirmEmailScreen"
					component={ConfirmEmailScreen}
					options={({ navigation, route }) => ({
						headerShown: false,
					})}
				/>

				<Stack.Screen
					name="ForgotPasswordScreen"
					component={ForgotPasswordScreen}
					options={({ navigation, route }) => ({
						headerShown: false,
					})}
				/>

				<Stack.Screen
					name="ResetPassword"
					component={ResetPassword}
					options={({ navigation, route }) => ({
						headerShown: false,
					})}
				/>

				<Stack.Screen
					name="Home"
					component={Home}
					options={({ navigation, route }) => ({
						headerTitle: (props) => (
							<Greeting
								mainText="Recurring"
								{...props}
							/>
						),
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootStack;