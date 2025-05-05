import React from 'react';
import SplashScreen from './src/pages/SplashScreen';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import ForgotPassword from './src/pages/ForgotPassword';
import HomePage from './src/pages/HomePage';
import OrderPlaced from './src/pages/OrderPlaced';
import ProductPage from './src/pages/ProductPage';
import Favorite from './src/pages/Favorite';
import Notifikasi from './src/pages/Notifikasi';
import SearchResult from './src/pages/SearchResult';  
import Address from './src/pages/Address';
import Settingss from './src/pages/Settingss';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import './src/config/Firebase';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="OrderPlaced"
              component={OrderPlaced}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProductPage"
              component={ProductPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Favorite"
              component={Favorite}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Notifikasi"
              component={Notifikasi}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SearchResult"
              component={SearchResult}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Address"
              component={Address}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Settings"
              component={Settingss}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>

  );
};

export default App;
