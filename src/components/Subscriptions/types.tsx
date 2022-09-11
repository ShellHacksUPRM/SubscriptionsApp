import React from "react";

export interface SubscriptionsProps {
	id: number;
	title: string;
	subtitle: string;
	amount: string;
	date: string;
	art: {
		icon: string;
		background: string;
	}
}

export interface SubscriptionsSectionProps {
	data: SubscriptionsProps[];
	title: string;
	subtitle: string;
}

export interface SubscriptionsAviProps {
	icon: any;
	background: string;
}

export interface SubscriptionAddProps {
	addSubVisible: boolean;
	setSubVisible: React.Dispatch<React.SetStateAction<boolean>>;
	addSubscription: Function;
}