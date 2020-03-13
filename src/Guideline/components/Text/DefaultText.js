import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const DefaultText = ({ children, italic, bold, style }) => {
  return <Text style={{
    ...styles.text,
    ...(italic ? styles.fontItalic : {}),
    ...(bold ? styles.fontBold : {}),
    ...style,
    }}>{children}</Text>;
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
  italic: PropTypes.bool,
  bold: PropTypes.bool,
  style: PropTypes.object,
};

export default DefaultText;
