import React, { FunctionComponent } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

interface InputParams {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	placeholder: string;
	secureTextEntry?: boolean;
}

const CustomInput: FunctionComponent<InputParams> = ({ value, setValue, placeholder, secureTextEntry = false }) => {
	return (
		<View style={styles.container}>
			<TextInput
				value={value}
				onChangeText={setValue}
				placeholder={placeholder}
				style={styles.input}
				secureTextEntry={secureTextEntry}
			/>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#D6D4D4',
		width: '100%',
		borderColor: '#e8e8e8',
		borderWidth: 1,
		borderRadius: 10,
		margin: 40,
		paddingHorizontal: 10,
		paddingVertical: 10,
		marginVertical: 20,
		paddingBottom: 10
	},
	input: {}
});

export default CustomInput