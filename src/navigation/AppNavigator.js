import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// ✅ 하단 탭 네비게이션
import BottomTabNavigator from './BottomTabNavigator';

// ✅ Shorts 관련 네비게이션
import ShortsNavigator from './ShortsNavigator';

// ✅ Photo 관련 네비게이션 추가
import PhotoNavigator from './PhotoNavigator'; // ✅ 추가

// ✅ Stack Navigator 생성
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* ✅ 메인 하단 탭 네비게이션 */}
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        {/* ✅ Shorts 관련 네비게이션 */}
        <Stack.Screen name="ShortsStack" component={ShortsNavigator} />
        {/* ✅ Photo 관련 네비게이션 추가 */}
        <Stack.Screen name="Photo" component={PhotoNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
