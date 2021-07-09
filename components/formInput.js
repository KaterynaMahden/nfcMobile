import React from 'react';
import {View, TextInput,StyleSheet, Text, Button, Alert} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {windowHeight, windowWidth} from "../utils/dimensions";
import { useForm, Controller } from "react-hook-form";

const hookForm = ()  => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <View>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="firstName"
                defaultValue=""
            />
            {errors.firstName && <Text>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="lastName"
                defaultValue=""
            />

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    );
}
export const FormInput = ({labelValue, placeholderText, iconType, ...rest }) => {
    return (
        <View style = {styles.inputContainer}>
            <View style = {styles.iconStyle}>
                <AntDesign name ={iconType} size={25} color = "#311432"/>
                
            </View>
                <TextInput
                    style = {styles.input}
                    value = {labelValue}
                    numberOfLines={1}
                    placeholderTextColor={"#8D4585"}
                    placeholder = {placeholderText}
                    {...rest}
                />
        </View>
    );
}

export default hookForm;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight/15,
        borderColor: '#81007F',
        borderRadius: 3,
        borderWidth:1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E4A0F7'
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#702963',
        borderRightWidth: 1,
        width: 50,
        
    },
    
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily:'Antic Slab',
        color: '#702963',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    
    inputField: {
        padding: 10,
        marginBottom: 10,
        marginTop: 5,
        width: windowWidth/1.5,
        height: windowHeight/15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
        
    }
})
