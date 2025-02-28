import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// ✅ Shorts Screens 추가
import ShortsVideoScreen from '../screens/shorts/ShortsVideoScreen';
import PromptInputScreen from '../screens/shorts/PromptInputScreen';
import ImageSelectionScreen from '../screens/shorts/ImageSelectionScreen'; // ✅ 새 화면 추가
import FinalVideoScreen from '../screens/shorts/FinalVideoScreen'; // ✅ 최종 영상 화면 추가
import MusicSelectionScreen from '../screens/shorts/MusicSelectionScreen'; // ✅ 배경 음악 선택 화면 추가
import PostVideoScreen from '../screens/shorts/PostVideoScreen'; // ✅ 영상 포스팅 화면 추가

const Stack = createStackNavigator();

const ShortsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ShortsVideoScreen" component={ShortsVideoScreen} />
      <Stack.Screen name="PromptInputScreen" component={PromptInputScreen} />
      <Stack.Screen
        name="ImageSelectionScreen"
        component={ImageSelectionScreen}
      />
      <Stack.Screen name="FinalVideoScreen" component={FinalVideoScreen} />
      <Stack.Screen
        name="MusicSelectionScreen"
        component={MusicSelectionScreen}
      />
      <Stack.Screen name="PostVideoScreen" component={PostVideoScreen} />
    </Stack.Navigator>
  );
};

export default ShortsNavigator;
