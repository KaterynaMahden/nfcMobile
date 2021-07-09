import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity, Image, StyleSheet} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FormInput from '../components/formInput';
import hookForm from "../components/formInput";
import FormButton from '../components/formButton';
import {windowWidth, windowHeight} from "../utils/dimensions";

const LoginScreen = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={styles.container}>
      <Image
        source={require('../assets/logInScreen.png')}
                   style={styles.logo}
            />
            <Text style={styles.text} NFC Authorization/>
            <FormButton
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="User Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormButton
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="User Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Sign in"

            />
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#6F2DA8',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
    color: '#B200ED',
    fontFamily: 'Lato-Regular',
    },
});