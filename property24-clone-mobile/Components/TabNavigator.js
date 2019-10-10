import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import ViewListings from '../Screens/ViewListings';
import UserProfile from '../Screens/UserProfile';
import colors from '../Constants/colors';

export default createMaterialTopTabNavigator(
{
  Listings: { screen: ViewListings, },
  Profile: { screen: UserProfile },
}, {
  initialRouteName: 'Listings',
  activeColor: colors.white,
  barStyle: {justifyContent: 'center', backgroundColor: colors.primary},
  tabBarOptions: {indicatorStyle: {backgroundColor: colors.white}},
}
);