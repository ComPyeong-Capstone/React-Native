import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import VideoLengthScreen from '../screens/photo/10-VideoLengthScreen';
import MyPhotoPrompt from '../screens/photo/20-MyPhotoPrompt';
import FinalVideoScreen from '../screens/photo/30-FinalVideoScreen';
import MusicSelectionScreen from '../screens/photo/31-MusicSelectionScreen';

import ResultScreen from '../screens/ResultScreen';

const Stack = createStackNavigator();

const PhotoNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="VideoLengthScreen" component={VideoLengthScreen} />
      <Stack.Screen name="MyPhotoPrompt" component={MyPhotoPrompt} />
      <Stack.Screen name="FinalVideoScreen" component={FinalVideoScreen} />
      <Stack.Screen
        name="MusicSelectionScreen"
        component={MusicSelectionScreen}
      />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator>
  );
};

export default PhotoNavigator;
