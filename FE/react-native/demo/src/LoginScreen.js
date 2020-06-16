import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import  {saveLogin}  from './actions';

const LoginScreen = ({ navigation }) => {

  const [username, setUsename] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const onClick = (username, password) => dispatch(saveLogin(username, password));
  function login () {
    onClick(username, password);
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Username: </Text>
      <TextInput
        style={styles.textinput}
        onChangeText={(value) => setUsename(value)}
        placeholder="Username"
        value={username}
      />
      <Text style={styles.text}> Password: </Text>
      <TextInput
        style={styles.textinput}
        onChangeText={(value) => setPassword(value)}
        placeholder="Password"
        value={password}
      />
      <Button
        style={styles.button}
        title="Login"
        onPress={() => login()}
      />
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  textinput: {
    borderColor: 'black',
    borderWidth: 2,
  },
  button: {
    width: 70,
    height: 30,
    marginTop: 20,
    borderRadius: 5,
  },
});
