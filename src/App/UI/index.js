import React from 'react';
import { StyleSheet } from 'react-native';
import ShopNavigator from '../../navigation/ShopNavigator';

const Screens = (props) => {
  return (
    <ShopNavigator />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screens;
