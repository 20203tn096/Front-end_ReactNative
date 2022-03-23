import { StyleSheet, Text, View, Picker,TextInput, DatePickerAndroid } from "react-native";
import { Icon } from "react-native-elements";
import React, { useState } from "react";

export default function CreateReport() {
  const [selectedValue, setSelectedValue] = useState("");
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text>
        Aspecto
        <Icon
          type="material-community"
          name={"gamepad-circle"}
          size={20}
          color="#2f2c79"
        />
      </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 60, width: 250 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Agua" value="Agua" />
        <Picker.Item label="Flora y Fauna" value="Flora y Fauna" />
        <Picker.Item label="Electricidad" value="Electricidad" />
        <Picker.Item label="Residuos Solidos" value="Residuos Solidos" />
      </Picker>
      <Text>
        Descripción
        <Icon
          type="material-community"
          name={"format-align-justify"}
          size={20}
          marginLeft={20}
          color="#2f2c79"
        />
      </Text>
      <TextInput
        style={styles.textI}
        placeholder="Escribe brevemente la incidencia!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 16,
    marginBottom:16,
    marginLeft: 20,
  },
  textI:{
    height:100,
    width:380,
  }
});
