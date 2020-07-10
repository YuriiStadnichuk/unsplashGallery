import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Offers from '../screens/Offers/Offers';

const OffersStack = createStackNavigator();

const offersNavigator = () => {
  return (
    <OffersStack.Navigator>
      <OffersStack.Screen
        name="Offers"
        component={Offers}
        options={{
          headerShown: false,
        }}
      />
    </OffersStack.Navigator>
  );
};

export default offersNavigator;
