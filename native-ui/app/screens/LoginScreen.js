import React, { useState } from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
    AppForm as Form,
    AppFormField as FormField,
    SubmitButton,
  } from "../components/forms";
import AppButton from "../components/AppButton";
import { useFormikContext } from "formik";
import AuthContext from "../auth/context";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const auth = useAuth()

  const handleSubmit = (values) => {
    // TODO: once backend is ready this will nee to do api call
    const result = '' // api.l
    auth.logIn(values.email) // hacked way of instead of including token jsut use email
  }
  
    return (
      <Screen style={styles.container}>
        <Form
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Login" color="primary" />
        </Form>
      </Screen>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
  });
  
  export default LoginScreen;