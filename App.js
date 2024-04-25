import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from "./src/pages/HomePage";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from "./src/pages/Products";
import Cart from "./src/pages/Cart";
import {createContext, useEffect, useState} from 'react';

const Stack = createNativeStackNavigator();

export const CartContext = createContext({});

export default function App() {
    const [cart, setCart] = useState([])
const cartContextFunctions={
    cart,
    addToCart:(item)=>{
        setCart([...cart,item])
    },
    deleteCart:()=>{
        setCart([])
    }
}
useEffect(()=>{
    console.log(cart)
},[cart])

  return (
      <CartContext.Provider value={cartContextFunctions}>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{ title: 'ShopChop' }}
            />
            <Stack.Screen
                name="Products"
                component={Products}
            />
            <Stack.Screen
                name="Cart"
                component={Cart}
            />
        </Stack.Navigator>
      </NavigationContainer>
      </CartContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
