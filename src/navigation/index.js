import React from 'react';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import fontelloConfig from '../assets/fonts/config.json';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, fonts} from '../constants';

import {RFValue} from 'react-native-responsive-fontsize';

import HomeStack from './homeNavigation';
import OffersStack from './offersNavigation';


const BottomTabIcon = createIconSetFromFontello(fontelloConfig);

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneAnimationEnabled={true}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: colors.BOTTOM_TAB_ICONS,
        style: {
          backgroundColor: colors.MAIN_THEME,
          elevation: 0,
          height: 50,
          justifyContent: 'center',
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
        },
        labelStyle: {
          fontFamily: fonts.AlegreyaBold,
          fontSize: RFValue(10, 640),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon
              name="home"
              size={20}
              color={focused ? 'white' : colors.BOTTOM_TAB_ICONS}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Offers"
        component={OffersStack}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon
              name="offers"
              size={20}
              color={focused ? 'white' : colors.BOTTOM_TAB_ICONS}
            />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
};

export default MainNavigator;
