import React, { FunctionComponent } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { View, Text, TextInput, StyleSheet } from 'react-native'


const CustomInput = ({control, name, rules ={}, placeholder, secureTextEntry = false }) => {
	return (
		<Controller
			control={control}
			name = {name}
			rules = {rules}
			render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
				<>
					<View style={[styles.container, {borderColor: error  ? 'red' : 'e8e8e8'}]}>
						<TextInput 
							value ={value}
							onChangeText={onChange}
							onBlur={onBlur}
							placeholder={placeholder} 
							style={[styles.input, {}]}
							secureTextEntry={secureTextEntry}/>
					</View>
					{error && ( 
					<Text style={{color: 'red',alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
					)}
				</>
			)}
		/>
	);
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