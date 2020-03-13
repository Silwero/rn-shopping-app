import { createStackNavigator } from 'react-navigation-stack';
import ProductOverview from './../App/UI/shop/ProductsOverview/index';
import { createAppContainer } from 'react-navigation';
import theme from '../Guideline/theme';

const ShopNavigator = createStackNavigator(
  {
    Products: ProductOverview,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: theme.colors.text.secondary,
      headerStyle: {
        backgroundColor: theme.colors.backgroundColor.secondary,
      },
    },
  },
);

export default createAppContainer(ShopNavigator);
