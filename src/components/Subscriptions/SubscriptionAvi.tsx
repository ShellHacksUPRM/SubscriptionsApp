import React, { FunctionComponent } from 'react';
import styled from "styled-components/native";

import { SubscriptionsAviProps } from './types';
import icons from '../../../assets/icons/index';

const StyledView = styled.View`
	height: 45px;
	width: 45px;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
`;

const StyledImage = styled.Image`
	resize-mode: cover;
	width: 25px;
	height: 25px;
	border-radius: 25px;
`;

const SubscriptionAvi: FunctionComponent<SubscriptionsAviProps> = (props) => {
	return (
		<StyledView style={{ backgroundColor: props.background }}>
			<StyledImage source={icons.get(props.icon)}></StyledImage>
		</StyledView>
	);
};

export default SubscriptionAvi;