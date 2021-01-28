import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import globalStyles from "../config/styles";
import colors from "../config/colors";

function AppButton({ title, onPress, color }) {
  return (
    <TouchableOpacity
      style={[globalStyles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={globalStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;