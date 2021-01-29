import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Screen from '../components/Screen'
import Title from '../components/Title'
import * as Yup from "yup";
import routes from '../navigation/routes'
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
const SellTicketsScreen = ({navigation}) => {

    const createTicket = (ticket) => {
        // this will make a api POST /api/tickets
        console.log("Ticket Created: ", ticket)
        navigation.navigate(routes.TICKET_LIST, ticket)
    }
    
    return (
        <Screen style={styles.background}>
            <Title title="Create a Ticket"/>
            <Form 
                initialValues={{title: '', price: ''}}
                onSubmit={(values) => createTicket(values)}
                validationSchema={validationSchema}
            >
                <View style={styles.input} >
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
                </View>
                <View style={styles.buttonsContainer} >
                    <SubmitButton 
                        title="Submit" 
                        color="primary"/>
                </View>
                
            </Form>
        </Screen>
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

export default SellTicketsScreen
