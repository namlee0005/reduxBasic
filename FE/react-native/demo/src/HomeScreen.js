/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Button, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import  {saveLogin}  from './actions';
const HomeScreen = ({navigation}) => {

  const username = useSelector(state => state.username);
  const password = useSelector(state => state.password);

  const dispatch = useDispatch();
  const clearUser = (username, password) => dispatch(saveLogin(username, password));
  

  function logout() {
    clearUser("", "")
    navigation.goBack();
  }

  return (
    <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
      <Text>{username}</Text>
      <Text>{password}</Text>
      <Button title="Log Out" onPress={() => logout()}/>
    </View>
  );
};
export default HomeScreen;
