import React, { FunctionComponent } from 'react';
import styled from "styled-components/native";
import { View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

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
	flex: 1;
`;

const RightView = styled.View``;

const StyledView = styled.TouchableOpacity`
	height: 25px;
	width: 25px;
	marginRight: 10px;
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
			<RightView>
				<StyledView onPress={() => (props.deleteItem(props.id, props.forceUpdate))}>
					<Ionicons name="close" size={25} color={colors.secondary}></Ionicons>
				</StyledView>
			</RightView>
		</SubscriptionRow>
	);
};

export default SubscriptionItem;