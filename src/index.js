import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import setI18nConfig from './i18n';

import MainNavigation from './navigation/index';

const SwitchStack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    setI18nConfig();
  }
  render() {

    return (
      <Provider store={store}>
        <NavigationContainer>
          <SwitchStack.Navigator>
            <SwitchStack.Screen
              name="MainNavigation"
              component={MainNavigation}
              options={{ headerShown: false }}
            />
          </SwitchStack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
