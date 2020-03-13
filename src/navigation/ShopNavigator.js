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
      headerTitleStyle: {
        color: theme.colors.text.secondary,
        fontFamily: 'open-sans',
        fontSize: 24,
      },
      headerStyle: {
        backgroundColor: theme.colors.backgroundColor.secondary,
      },
    },
  },
);

export default createAppContainer(ShopNavigator);
