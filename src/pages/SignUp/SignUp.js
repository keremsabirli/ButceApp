import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import SignUpForm from './SignUpForm';

export default class SignIn extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.headBackground} />

				<KeyboardAvoidingView behavior={"position"}>
					<View>
						<Text style={styles.logo}>Büt-Cep</Text>
						<Text style={styles.logoDescription}>Kişisel Bütçe Uygulaması</Text>
					</View>
					<ScrollView>
						<View style={styles.loginArea}>
							
							<SignUpForm />
							
						</View>
					</ScrollView>
					<View style={styles.signUpArea}>
						<Text style={styles.signUpDescription}>Bir hesabınız var mı? Giriş yapın.</Text>
						<TouchableOpacity>
							<Text style={styles.signUpText}>Giriş Yap</Text>
							
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
		paddingVertical: 80
	},
	headBackground: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '50%',
		width: '100%',
		backgroundColor: 'green'
	},
	logo: {
		textAlign: 'center',
		fontSize: 40,
		fontWeight: 'bold',
		color: '#f2f2f2'
	},
	logoDescription: {
		textAlign: 'center',
		color: '#f2f2f2'
	},
	loginArea: {
		marginHorizontal: 40,
		marginVertical: 40,
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 15,
		

		shadowColor: 'black',
		shadowOpacity: .2,
		shadowRadius: 3,
		shadowOffset: {
			width:0,
			height: 2
		},
		elevation: 4
	},
	loginAreaTitle: {
		fontSize: 20,
		textAlign: 'center'
		
	},
	
	signUpArea: {
		alignItems: 'center'
	},
	signUpDescription: {
		color: '#999'
	},
	signUpText: {
		color: 'green'
	}
});