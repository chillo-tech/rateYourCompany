import React, { useContext, useLayoutEffect, useReducer } from "react";
import HomeScreen from '../screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SurveyStack from './SurveyStack';
import LoginScreen from '../screens/LoginScreen';
import * as SecureStore from "expo-secure-store";
import SplashScreen from "./../screens/SplashScreen";
import { AppContext } from "./../utils/data/AppContext";

const Stack = createNativeStackNavigator();

function RootStack({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isSignIn: Boolean(action.token),
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignIn: true,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignIn: false,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignIn: false,
      userToken: null,
    }
  );

  React.useLayoutEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync("usersToken");
      } catch (e) {
        // Restoring token failed
      }


      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken });

    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        await SecureStore.setItemAsync("usersToken", data.token);
        dispatch({ type: "SIGN_IN", token: data.token });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        await SecureStore.setItemAsync("usersToken", data.token);
        dispatch({ type: "SIGN_IN", token: data.token });
      },
      state: state,
    }),
    [state]
  );

  if (state.isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <AppContext.Provider value={authContext}>

      <Stack.Navigator initialRouteName="Home">
        <>
          {state.isSignIn ? (
            <Stack.Screen
              name="Survey"
              component={SurveyStack}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name="Login" component={LoginScreen}
              options={{ headerShown: false }}
            />
          )}
          <Stack.Screen navigationKey={state.isSignIn ? 'user' : 'guest'} name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </>
      </Stack.Navigator>
    </AppContext.Provider>
  )
}

export default RootStack
