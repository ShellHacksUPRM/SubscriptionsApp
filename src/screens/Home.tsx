import React, { FunctionComponent } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from "styled-components/native";

import { colors } from '../components/colors';
import { Container } from '../components/shared';

import Icon from '../components/Header/Icon';
import SubscriptionsSection from '../components/Subscriptions/SubscriptionsSection';
import SubscriptionAdd from '../components/Subscriptions/SubscriptionAdd';

const HomeContainer = styled(Container)`
	background-color: ${colors.graylight};
	margin-top: 10px;
	width: 100%;
	flex: 1;
`;

export interface Art {
	background: string;
	icon: string;
}

export interface Subscription {
	id: number;
	amount: string;
	date: string;
	title: string;
	subtitle: string;
	art: Art;
}

const subscriptionData: Subscription[] = [];

const getNextId = (): number => {
	return subscriptionData.length + 1;
}

const totalAmount = (period: string): number => {
	let total = 0;
	subscriptionData.map((item) => {
		if (item.subtitle == period) {
			total += parseFloat(item.amount.substring(1))
		}
	});
	return total;
}

const addSubscription = (item: Subscription): void => {
	subscriptionData.push(item);
	return;
}

const Home: FunctionComponent = ({ navigation }: any) => {
	let yearlyCost = Math.ceil(totalAmount("Monthly") * 12 + totalAmount("Annual"));
	if (yearlyCost == NaN) yearlyCost = 0;
	const [addSubVisible, setSubVisible] = React.useState(false);

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Icon
					img="add-circle-outline"
					onPress={() => setSubVisible(true)}
				/>
			),
		})
	});

	return (
		<HomeContainer>
			<StatusBar />
			<SubscriptionAdd
				addSubVisible={addSubVisible}
				setSubVisible={setSubVisible}
				addSubscription={addSubscription}
				getNextId={getNextId} />
			<SubscriptionsSection
				data={subscriptionData}
				title="Subscriptions"
				subtitle={`$${yearlyCost} per year`}
			/>
		</HomeContainer>
	);
};

export default Home;