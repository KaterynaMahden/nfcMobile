import React from 'react';
import {TouchableOpacity, Button, Text, StyleSheet} from "react-native";
import {windowWidth, windowHeight} from "../utils/dimensions";

const FormButton = ({buttonTitle, ...rest}) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} { ...rest}>
           <Text style={styles.buttonText}>{buttonTitle} </Text> 
        </TouchableOpacity>
        
    );
};
export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#7852A9',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        
    },
    
    buttonText: {
       fontSize: 19,
       fontWeight: 'bold',
       color: '#E4A0F7',
       fontFamily: 'Bree Serif', 
        
    },
    
})