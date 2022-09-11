import React, { FunctionComponent, useState } from 'react';

import Home from '../screens/Home';
import { colors } from '../components/colors';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Greeting from '../components/Header/Greeting';
import Icon from '../components/Header/Icon';

export type RootStackParamList = {
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
				initialRouteName="Home"
			>
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