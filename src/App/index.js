import React, { useState } from 'react';
import Screens from './UI';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { productsReducer } from './store/reducers/products';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

const loadingFonts = () => Font.loadAsync({
  'open-sans-bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
  'open-sans-italic': require('../../assets/fonts/OpenSans-Italic.ttf'),
  'open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
});

const ShoppingApp = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  if (!isFontLoaded) {
    return <AppLoading
      startAsync={loadingFonts}
      onFinish={() => setIsFontLoaded(true)}
    />;
  }

  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
};

export default ShoppingApp;
