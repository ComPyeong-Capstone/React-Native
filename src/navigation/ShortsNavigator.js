import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

// ✅ ProgressBar 추가
import ProgressBar from '../components/ProgressBar';

// ✅ Shorts Screens 추가
import VideoLengthScreen from '../screens/shorts/10-VideoLengthScreen';
import PromptInputScreen from '../screens/shorts/20-PromptInputScreen';
import ImageSelectionScreen from '../screens/shorts/30-ImageSelectionScreen';
import FinalVideoScreen from '../screens/shorts/40-FinalVideoScreen';
import MusicSelectionScreen from '../screens/shorts/41-MusicSelectionScreen';
import ResultScreen from '../screens/ResultScreen';

const Stack = createStackNavigator();

const ShortsNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <ProgressBar currentStep={1} totalSteps={5} />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#1F2C3D'},
        }}>
        <Stack.Screen
          name="VideoLengthScreen"
          component={VideoLengthScreen}
          initialParams={{step: 1}}
        />
        <Stack.Screen
          name="PromptInputScreen"
          component={PromptInputScreen}
          initialParams={{step: 2}}
        />
        <Stack.Screen
          name="ImageSelectionScreen"
          component={ImageSelectionScreen}
          initialParams={{step: 3}}
        />
        <Stack.Screen
          name="FinalVideoScreen"
          component={FinalVideoScreen}
          initialParams={{step: 4}}
        />

        {/* ✅ ResultScreen을 5단계로 변경 */}
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          initialParams={{step: 5, totalSteps: 5}}
        />

        {/* ✅ MusicSelectionScreen을 단계에서 제외, 선택적으로 접근 */}
        <Stack.Screen
          name="MusicSelectionScreen"
          component={MusicSelectionScreen}
        />
      </Stack.Navigator>
    </View>
  );
};

export default ShortsNavigator;
