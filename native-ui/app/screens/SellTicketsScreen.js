import React from 'react'
import {View, Text} from 'react-native'
import Screen from '../components/Screen'
import Title from '../components/Title'
import * as Yup from "yup";

import {
    AppForm as Form,
    AppFormField as FormField,
    SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(4).max(20).label("Title"),
    price: Yup.number().required().positive().label("Price"),
});
/**
 * SellTicketsScreen
 * @description: Screen that renders a Creating a ticket to sell
 * 
 */
const SellTicketsScreen = () => {

    const createTicket = (ticket) => {
        // this will make a api POST /api/tickets
        console.log("Ticket Created: ", ticket)
    }
    
    return (
        <Screen>
            <Title title="Create a Ticket"/>
            <Form 
                initialValues={{title: '', price: ''}}
                onSubmit={(values) => createTicket(values)}
                validationSchema={validationSchema}
            >
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="title"
                    placeholder="Title"
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="price"
                    placeholder="Price"
                />
                <SubmitButton title="Submit" />
            </Form>
        </Screen>
    )
}

export default SellTicketsScreen
