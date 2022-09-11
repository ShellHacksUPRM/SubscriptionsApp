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

interface Art {
	background: string;
	icon: string;
}

interface Subscription {
	id: number;
	amount: string;
	date: string;
	title: string;
	subtitle: string;
	art: Art;
}

const subscritionData: Subscription[] = [
	{
		id: 1,
		amount: "$9.99",
		date: "1 Sep 2022",
		title: "Spotify",
		subtitle: 'Monthly',
		art: {
			background: colors.gray,
			icon: "spotify",
		}
	},
	{
		id: 2,
		amount: "$14.99",
		date: "3 Sep 2022",
		title: "Netflix",
		subtitle: 'Monthly',
		art: {
			background: colors.gray,
			icon: "netflix",
		}
	},
	{
		id: 3,
		amount: "$7.99",
		date: "6 Sep 2022",
		title: "Disney+",
		subtitle: 'Monthly',
		art: {
			background: colors.gray,
			icon: "disneyplus",
		}
	},
	{
		id: 4,
		amount: "$99.99",
		date: "10 Oct 2022",
		title: "Apple Music",
		subtitle: 'Annual',
		art: {
			background: colors.gray,
			icon: "applemusic",
		}
	},
];

const totalAmount = (period: string): number => {
	let total = 0;
	subscritionData.map((item) => {
		if (item.subtitle == period) {
			total += parseFloat(item.amount.substring(1))
		}
	});
	return total;
}

const addSubscription = (item: Subscription): void => {
	// Logic for adding a subscription
	return;
}

const Home: FunctionComponent = ({ navigation }: any) => {
	const yearlyCost = Math.ceil(totalAmount("Monthly") * 12 + totalAmount("Annual"));
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
				addSubscription={addSubscription} />
			<SubscriptionsSection
				data={subscritionData}
				title="Subscriptions"
				subtitle={`$${yearlyCost} per year`}
			/>
		</HomeContainer>
	);
};

export default Home;