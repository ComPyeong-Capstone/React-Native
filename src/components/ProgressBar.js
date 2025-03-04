import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useWindowDimensions} from 'react-native';

// 📌 반응형 크기 조정 함수
const scaleSize = (size, refSize) => (size * refSize) / 375;
const scaleFont = (size, refSize) => (size * refSize) / 375;

const ProgressBar = ({currentStep, totalSteps = 4}) => {
  const {width, height} = useWindowDimensions();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.progressContainer,
        {
          top: insets.top + scaleSize(10, height), // ✅ SafeArea 적용
          width: scaleSize(300, width), // ✅ 모든 화면에서 동일한 너비
          height: scaleSize(40, height), // ✅ 동일한 높이
        },
      ]}>
      {[...Array(totalSteps)].map((_, step) => (
        <React.Fragment key={step}>
          <Text
            style={[
              step < currentStep
                ? styles.progressDotActive
                : styles.progressDotInactive,
              {fontSize: scaleFont(18, width)},
            ]}>
            {step < currentStep ? '●' : '○'}
          </Text>
          {step < totalSteps - 1 && (
            <View
              style={[
                styles.progressLine,
                {height: scaleSize(2, height)}, // ✅ 선의 높이 고정
              ]}
            />
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

// 📌 스타일 정의
const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // ✅ 중앙 정렬
    position: 'absolute',
  },
  progressLine: {
    backgroundColor: '#51BCB4',
    flex: 1, // ✅ 선의 길이를 자동으로 조정
    marginHorizontal: '2%',
  },
  progressDotActive: {
    color: '#51BCB4',
  },
  progressDotInactive: {
    color: '#888',
  },
});

export default ProgressBar;
