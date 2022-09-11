import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

import { colors } from '../../components/colors';

const StyledText = styled.Text`
	font-size: 37px;
	color: ${colors.white};
	text-align: left;
	font-family: Lato-Bold;
`;

import { TextProps } from './types';

const BigText: FunctionComponent<TextProps> = (props) => {
	return (
		<StyledText style={props.textStyles}>
			{props.children}
		</StyledText>
	);
};

export default BigText;