import React, { FunctionComponent } from 'react';
import styled from "styled-components/native";
import { View } from "react-native"

import { colors } from '../../components/colors';
import SmallText from '../Texts/SmallText';
import RegularText from '../Texts/RegularText';

import { SubscriptionsProps } from './types';
import SubscriptionsAvi from './SubscriptionAvi';


const SubscriptionRow = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;
`;

const LeftView = styled.View`
	flex-direction: row;
	justify-content: flex-start;
	height: 100%;
	align-items: center;
	flex: 2;
`;

const RightView = styled.View`
	flex: 1;
`;

const SubscriptionItem: FunctionComponent<SubscriptionsProps> = (props) => {
	return (
		<SubscriptionRow style={{ marginTop: 10 }}>
			<LeftView>
				<View style={{ marginLeft: 10 }} />
				<SubscriptionsAvi
					background={props.art.background}
					icon={props.art.icon}
				/>
				<View style={{ marginLeft: 10 }}>
					<RegularText
						textStyles={{
							color: colors.secondary,
							textAlign: 'left',
							marginBottom: 5,
						}}
					>
						{props.title}
					</RegularText>
					<SmallText
						textStyles={{
							color: colors.graydark,
							textAlign: 'left',
						}}
					>
						{props.subtitle}
					</SmallText>
				</View>
			</LeftView>
			<RightView>
				<View style={{ marginRight: 10 }}>
					<RegularText
						textStyles={{
							color: colors.secondary,
							textAlign: 'right',
							marginBottom: 5,
						}}
					>
						{props.amount}
					</RegularText>
					<SmallText
						textStyles={{
							color: colors.graydark,
							textAlign: 'right',
						}}
					>
						{props.date}
					</SmallText>
				</View>
			</RightView>
		</SubscriptionRow>
	);
};

export default SubscriptionItem;