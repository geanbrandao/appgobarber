import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
    initialRouteName="Signup"
  >
    <Auth.Screen name="Signin" component={Signin} />
    <Auth.Screen name="Signup" component={Signup} />
  </Auth.Navigator>
);

export default AuthRoutes;
