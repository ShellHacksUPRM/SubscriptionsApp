import React from "react";
import { Subscription } from "../../screens/Home";

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
	deleteItem: Function;
	forceUpdate: React.DispatchWithoutAction
}

export interface SubscriptionsSectionProps {
	data: Subscription[];
	title: string;
	subtitle: string;
	deleteItem: Function;
	forceUpdate: React.DispatchWithoutAction;
}

export interface SubscriptionsAviProps {
	icon: any;
	background: string;
}

export interface SubscriptionAddProps {
	addSubVisible: boolean;
	setSubVisible: React.Dispatch<React.SetStateAction<boolean>>;
	addSubscription: Function;
	getNextId: Function;
}