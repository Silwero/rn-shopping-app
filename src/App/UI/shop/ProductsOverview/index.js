import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import DefaultText from './../../../../Guideline/components/Text/DefaultText';

const ProductOverview = (props) => {
  const products = useSelector((state) => state.products.availableProducts);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <DefaultText>{item.title}</DefaultText>}
    />
  );
};

const styles = StyleSheet.create({});

ProductOverview.propTypes = {};

export default ProductOverview;
