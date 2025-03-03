import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// ✅ 스크린 가져오기
import HomeScreen from '../screens/bottomtab/HomeScreen';
import SearchScreen from '../screens/bottomtab/SearchScreen';
import AddScreen from '../screens/bottomtab/AddScreen';
import NotificationsScreen from '../screens/bottomtab/NotificationsScreen';
import ProfileScreen from '../screens/bottomtab/ProfileScreen';

// ✅ Tab Navigator 생성
const Tab = createBottomTabNavigator();

// ✅ 함수 분리 (렌더링 최적화)
const getTabBarIcon = (routeName, color, size) => {
  let iconName;

  switch (routeName) {
    case 'Home':
      iconName = 'home-outline';
      break;
    case 'Search':
      iconName = 'search-outline';
      break;
    case 'Add':
      iconName = 'add-circle-outline';
      break;
    case 'Notifications':
      iconName = 'notifications-outline';
      break;
    case 'Profile':
      iconName = 'person-outline';
      break;
    default:
      iconName = 'ellipse-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => getTabBarIcon(route.name, color, size), // ✅ 최적화된 함수 사용
        tabBarActiveTintColor: '#51BCB4',
        tabBarInactiveTintColor: '#aaa',
        tabBarStyle: {backgroundColor: '#1F2C3D'},
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
