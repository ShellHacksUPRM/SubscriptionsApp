import React, { FunctionComponent, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styled from "styled-components/native";
import { colors } from '../../components/colors';

import CustomInput from '../CustomInput';
import { Subscription, Art } from '../../screens/Home'
import { SubscriptionAddProps } from './types';
import SelectDropdown from 'react-native-select-dropdown';
import icons from '../../../assets/icons/index';

const platforms = [
	{ title: 'Apple Music', image: icons.get('Apple Music') },
	{ title: 'Audible', image: icons.get('Audible') },
	{ title: 'Costco', image: icons.get('Costco') },
	{ title: 'Crunchyroll', image: icons.get('Crunchyroll') },
	{ title: 'Dashpass', image: icons.get('Dashpass') },
	{ title: 'Disney+', image: icons.get('Disney+') },
	{ title: 'HBO Max', image: icons.get('HBO Max') },
	{ title: 'Hulu', image: icons.get('Hulu') },
	{ title: 'Netflix', image: icons.get('Netflix') },
	{ title: 'Peacock', image: icons.get('Peacock') },
	{ title: 'Prime Video', image: icons.get('Prime Video') },
	{ title: "Sam's Club", image: icons.get("Sam's Club") },
	{ title: 'Spotify', image: icons.get('Spotify') },
	{ title: 'Walmart+', image: icons.get('Walmart+') },
	{ title: 'YouTube Premium', image: icons.get('YouTube Premium') },
	{ title: 'Other', image: '' },
]

const subTypes = [
	"Monthly",
	"Annual",
]

const StyledImage = styled.Image`
	resize-mode: cover;
	width: 25px;
	height: 25px;
	border-radius: 25px;
`;

const SubscriptionAdd: FunctionComponent<SubscriptionAddProps> = (props) => {
	const [amount, setAmount] = useState('');
	const [date, setDate] = useState('');
	const [platform, setPlatform] = useState('');
	const [type, setType] = useState('');

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={props.addSubVisible}
			onRequestClose={() => {
				Alert.alert("Modal has been closed.");
				props.setSubVisible(!props.addSubVisible);
			}}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text style={styles.modalText}>Create a new subscription</Text>
					<CustomInput placeholder="Amount" value={amount} setValue={setAmount} />
					<CustomInput placeholder="Date" value={date} setValue={setDate} />

					<SelectDropdown
						data={platforms}
						onSelect={(selectedItem, index) => {
							setPlatform(selectedItem.title);
						}}
						buttonTextAfterSelection={(selectedItem, index) => {
							return selectedItem;
						}}
						rowTextForSelection={(item, index) => {
							return item;
						}}
						buttonStyle={styles.dropdown3BtnStyle}
						renderCustomizedButtonChild={(selectedItem, index) => {
							return (
								<View style={styles.dropdown3BtnChildStyle}>
									{selectedItem ? (
										<StyledImage source={selectedItem.image} />
									) : (
										<Ionicons name="md-earth-sharp" color={'#444'} size={24} />
									)}
									<Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.title : 'Select platform'}</Text>
									<FontAwesome name="chevron-down" color={'#444'} size={10} />
								</View>
							);
						}}
						dropdownStyle={styles.dropdown3DropdownStyle}
						rowStyle={styles.dropdown3RowStyle}
						renderCustomizedRowChild={(item, index) => {
							return (
								<View style={styles.dropdown3RowChildStyle}>
									<StyledImage source={item.image} />
									<Text style={styles.dropdown3RowTxt}>{item.title}</Text>
								</View>
							);
						}}
					/>

					<SelectDropdown
						data={subTypes}
						onSelect={(selectedItem, index) => {
							setType(selectedItem);
						}}
						defaultButtonText={'Select type'}
						buttonTextAfterSelection={(selectedItem, index) => {
							return selectedItem;
						}}
						rowTextForSelection={(item, index) => {
							return item;
						}}
						buttonStyle={styles.dropdown2BtnStyle}
						buttonTextStyle={styles.dropdown2BtnTxtStyle}
						renderDropdownIcon={isOpened => {
							return <FontAwesome name={'chevron-down'} color={'#444'} size={10} />;
						}}
						dropdownIconPosition={'right'}
						dropdownStyle={styles.dropdown2DropdownStyle}
						rowStyle={styles.dropdown2RowStyle}
						rowTextStyle={styles.dropdown2RowTxtStyle}
					/>

					<Pressable
						style={[styles.button, styles.buttonClose]}
						onPress={() => {
							const art: Art = {
								background: colors.gray,
								icon: platform,
							};
							const sub: Subscription = {
								id: props.getNextId(),
								amount: amount,
								date: date,
								title: platform,
								subtitle: type,
								art: art,
							}
							props.addSubscription(sub);
							setAmount('');
							setDate('');
							setPlatform('');
							setType('');
							props.setSubVisible(!props.addSubVisible);
						}}
					>
						<Text style={styles.textStyle}>Create subscription</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center"
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center"
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 6 },
		shadowOpacity: 0.1,
		shadowRadius: 10,
		elevation: 10,
	},
	header: {
		flexDirection: 'row',
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F6F6F6',
	},
	headerTitle: { color: '#000', fontWeight: 'bold', fontSize: 16 },
	saveAreaViewContainer: { flex: 1, backgroundColor: '#FFF' },
	scrollViewContainer: {
		flexGrow: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: '10%',
		paddingBottom: '20%',
	},

	dropdown1BtnStyle: {
		width: '80%',
		height: 50,
		backgroundColor: '#FFF',
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#444',
	},
	dropdown1BtnTxtStyle: { color: '#444', textAlign: 'center', marginBottom: 10, },
	dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
	dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
	dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },

	dropdown2BtnStyle: {
		width: '80%',
		height: 50,
		marginBottom: 10,
		backgroundColor: '#444',
		borderRadius: 8,
	},
	dropdown2BtnTxtStyle: {
		color: '#FFF',
		textAlign: 'center',
		fontWeight: 'bold',
	},
	dropdown2DropdownStyle: {
		backgroundColor: '#444',
		borderBottomLeftRadius: 12,
		borderBottomRightRadius: 12,
	},
	dropdown2RowStyle: { backgroundColor: '#444', borderBottomColor: '#C5C5C5' },
	dropdown2RowTxtStyle: {
		color: '#FFF',
		textAlign: 'center',
		fontWeight: 'bold',
	},

	dropdown3BtnStyle: {
		width: '80%',
		height: 50,
		backgroundColor: '#FFF',
		paddingHorizontal: 0,
		marginBottom: 10,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: '#444',
	},
	dropdown3BtnChildStyle: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 18,
	},
	dropdown3BtnImage: { width: 45, height: 45, resizeMode: 'cover' },
	dropdown3BtnTxt: {
		color: '#444',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
		marginHorizontal: 12,
	},
	dropdown3DropdownStyle: { backgroundColor: 'slategray' },
	dropdown3RowStyle: {
		backgroundColor: 'slategray',
		borderBottomColor: '#444',
		height: 50,
	},
	dropdown3RowChildStyle: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingHorizontal: 18,
	},
	dropdownRowImage: { width: 45, height: 45, resizeMode: 'cover' },
	dropdown3RowTxt: {
		color: '#F1F1F1',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
		marginHorizontal: 12,
	},

	dropdown4BtnStyle: {
		width: '50%',
		height: 50,
		backgroundColor: '#FFF',
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#444',
	},
	dropdown4BtnTxtStyle: { color: '#444', textAlign: 'left', marginBottom: 10, },
	dropdown4DropdownStyle: { backgroundColor: '#EFEFEF' },
	dropdown4RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
	dropdown4RowTxtStyle: { color: '#444', textAlign: 'left' },
});

export default SubscriptionAdd;