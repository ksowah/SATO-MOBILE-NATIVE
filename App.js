import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from "twrnc"
import CarItem from './components/CarItem';

export default function App() {
  return (

      <View style={tw`h-[100%] w-[100%] bg-black`}>
        <CarItem />
      </View>
  );
}

