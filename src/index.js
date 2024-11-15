import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

import Setting from "./components/Setting";
import { createEntries } from "./components/Operations";
import MainHome from "./components/MainHome";
import SelectedProduct from "./components/SelectedProduct";
import HomeScreen from "./components/HomeScreen";
import SelectedProductReview from "./components/SelectedProductReview";
import { Context } from "./components/customscreens/Context";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Screens = () => {
  useEffect(() => {
    createEntries();
  }, []);

  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={MainHome}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings-outline" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tabs"
          component={MyTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SelectedProduct"
          component={SelectedProduct}
          options={{
            headerShown: true,
            headerStyle: {
              paddingVertical: 0,
              backgroundColor: "#f4511e",
            },
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="SelectedProductReview"
          component={SelectedProductReview}
          options={{
            headerShown: true,
            headerStyle: {
              paddingVertical: 0,
              backgroundColor: "#f4511e",
            },
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <>
      <NavigationContainer>
        <Context>
          <MyStack />
        </Context>
      </NavigationContainer>
    </>
  );
};

export default Screens;

const styles = StyleSheet.create({});
