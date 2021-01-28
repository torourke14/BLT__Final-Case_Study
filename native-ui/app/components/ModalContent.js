import React from 'react'
import {StyleSheet, View} from 'react-native'
import Button from './AppButton'
import {
    AppForm as Form,
    AppFormField as FormField,
    SubmitButton,
} from "../components/forms";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    card: Yup.string().required().label("Credit Card"),
    expiration: Yup.string().required().label("Expiration"),
});

const ModalContent = () => {
    const submitCreditCard = (card) => {
        // This will make a api POST /api/orders/payment

        console.log("Credit card pushed", card)
    }

    return (
        <Form 
            initialValues={{card: '', expiration: ''}}
            onSubmit={(values) => submitCreditCard(values)}
           
        >
            <View style={styles.input} >
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="card"
                    placeholder="Credit Card"
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="expiration"
                    placeholder="Expiration"
                />
            </View>
            <View style={styles.buttonsContainer} >
                <SubmitButton 
                    title="Submit" 
                    color="primary"
                />
            </View>
        </Form>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    input: {
        padding: 20,
        width: '100%'
    },
});


export default ModalContent
