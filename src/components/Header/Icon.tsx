import React, { FunctionComponent } from 'react';
import {
	GestureResponderEvent,
	StyleProp,
	ViewStyle,
	ImageStyle,
} from 'react-native';
import styled from "styled-components/native";

import { Ionicons } from "@expo/vector-icons"

import { colors } from '../colors';


const StyledView = styled.TouchableOpacity`
	flex-direction: column;
	height: 25px;
	width: 25px;
	border-radius: 25px;
`;

interface IconProps {
	img: any;
	imgStyle?: StyleProp<ImageStyle>;
	imgContainerStyle?: StyleProp<ViewStyle>;
	onPress?: ((event: GestureResponderEvent) => void | undefined);
}

const Profile: FunctionComponent<IconProps> = (props) => {
	return (
		<StyledView onPress={props.onPress} style={props.imgContainerStyle}>
			<Ionicons name={props.img} size={25} color={colors.white}></Ionicons>
		</StyledView>
	);
};

export default Profile;