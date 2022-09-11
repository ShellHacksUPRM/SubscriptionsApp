import React, { FunctionComponent } from 'react';
import styled from "styled-components/native";
import { StyleProp, TextStyle } from 'react-native';

import { colors } from '../../components/colors';
import SmallText from '../Texts/SmallText';
import RegularText from '../Texts/RegularText';

const StyledView = styled.View`
	flex-direction: column;
	flex: 1;
	justify-content: center;
`;

interface GreetingProps {
	mainText: string;
	mainTextStyles?: StyleProp<TextStyle>;
}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
	return (
		<StyledView>
			<RegularText
				textStyles={[
					{
						color: colors.secondary,
						fontSize: 22,
					},
					props.mainTextStyles,
				]}
			>
				{props.mainText}
			</RegularText>
		</StyledView>
	);
};

export default Greeting;