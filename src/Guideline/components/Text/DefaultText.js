import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const DefaultText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
  },
  fontItalic: {
    fontFamily: 'open-sans-italic',
  },
  fontBold: {
    fontFamily: 'open-sans-bold',
  },
});

DefaultText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultText;
