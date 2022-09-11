import React, { FunctionComponent, useReducer } from 'react';
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

const deleteItem = (id: number, forceUpdate: React.DispatchWithoutAction): void => {
	subscriptionData.forEach((item: Subscription, index: number) => {
		if (item.id === id) subscriptionData.splice(index, 1);
	})

	let i = 1;
	for (const item of subscriptionData) {
		item.id = i;
		i++;
	}
	forceUpdate();
}

const Home: FunctionComponent = ({ navigation }: any) => {
	const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
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
				deleteItem={deleteItem}
				forceUpdate={forceUpdate}
				title="Subscriptions"
				subtitle={`$${yearlyCost} per year`}
			/>
		</HomeContainer>
	);
};

export default Home;