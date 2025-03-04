import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// ✅ 하단 탭 네비게이션 (메인 화면)
import BottomTabNavigator from './BottomTabNavigator';

// ✅ Shorts 관련 네비게이션
import ShortsNavigator from './ShortsNavigator';

// ✅ Photo 관련 네비게이션
import PhotoNavigator from './PhotoNavigator';

// ✅ ResultScreen 추가
import ResultScreen from '../screens/ResultScreen'; // ✅ 상위 screens 폴더에서 불러오기

// ✅ Stack Navigator 생성
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main" // ✅ 기본 화면을 'Main'으로 설정
        screenOptions={{headerShown: false}} // ✅ 모든 화면에서 헤더 숨김
      >
        {/* ✅ 메인 하단 탭 네비게이션 */}
        <Stack.Screen name="Main" component={BottomTabNavigator} />

        {/* ✅ Shorts 관련 네비게이션 */}
        <Stack.Screen name="ShortsStack" component={ShortsNavigator} />

        {/* ✅ Photo 관련 네비게이션 */}
        <Stack.Screen name="PhotoStack" component={PhotoNavigator} />

        {/* ✅ ResultScreen 추가 */}
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
