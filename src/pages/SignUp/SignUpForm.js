import React, { Component } from 'react';

import {Button, Content, Input, Item, Spinner, Text} from "native-base";
import {Formik} from "formik";

//import api from '../../api/api';
import validations from './validations';

export default class SignUpForm extends Component {
	_handleSubmit = async (values, bag) => {
		try {
			//await api(values);
			bag.setSubmitting(false);
			alert('welcome')
		}catch (e) {
			bag.setSubmitting(false);
			bag.setErrors(e)
		}
	};

  render() {
    return (
			<Formik
				initialValues={{
					email: '',
					password: '',
					passwordConfirm: ''
				}}
				onSubmit={this._handleSubmit}
				validationSchema={validations}
			>
				{({
						values,
						handleChange,
						handleSubmit,
						errors,
						touched,
						setFieldTouched,
						isValid,
						isSubmitting
					}) => (
					<Content style={{padding: 10}}>
						<Item error={errors.email && touched.email}>
							<Input
								onChangeText={handleChange('email')}
								value={values.email}
								placeholder='E-mail'
								onBlur={() => setFieldTouched('email')}
								autoCapitalize={'none'}
								keyboardType={'email-address'}
							/>

							{ (errors.email && touched.email) && <Text style={{color: 'red'}}>Hatalı Giriş</Text>}
						</Item>

						<Item error={errors.password && touched.password}>
							<Input
								onChangeText={handleChange('password')}
								value={values.password}
								placeholder='Şifre'
								onBlur={() => setFieldTouched('password')}
								autoCapitalize={'none'}
								secureTextEntry={true}
							/>

							{ (errors.password && touched.password) && <Text style={{color: 'red'}}>Hatalı Giriş</Text>}
						</Item>

						<Item error={errors.passwordConfirm && touched.passwordConfirm}>
							<Input
								onChangeText={handleChange('passwordConfirm')}
								value={values.passwordConfirm}
								placeholder='Şifre tekrar'
								onBlur={() => setFieldTouched('passwordConfirm')}
								autoCapitalize={'none'}
								secureTextEntry={true}
							/>

							{ (errors.passwordConfirm && touched.passwordConfirm) && <Text style={{color: 'red'}}>Hatalı Giriş</Text>}
						</Item>

						<Button
							block
							disabled={!isValid || isSubmitting}
							onPress={handleSubmit}
							style={{marginTop: 10}}>

							{ isSubmitting && <Spinner size={'small'} color={'white'} /> }
							<Text>Kaydol</Text>
						</Button>
					</Content>
				)}
			</Formik>
    );
  }
}