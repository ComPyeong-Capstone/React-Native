import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import VideoLengthScreen from '../screens/photo/VideoLengthScreen';

const Stack = createStackNavigator();

const PhotoNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="VideoLength" component={VideoLengthScreen} />
      {/* 이후 필요한 사진 관련 화면 추가 가능 */}
    </Stack.Navigator>
  );
};

export default PhotoNavigator;
