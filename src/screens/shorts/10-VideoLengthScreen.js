import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useWindowDimensions} from 'react-native';
import ProgressBar from '../../components/ProgressBar'; // ✅ 단계바 추가

// 📌 반응형 크기 조정 함수
const scaleSize = (size, width) => (size * width) / 375;
const scaleFont = (size, width) => (size * width) / 375;

const VideoLengthScreen = ({navigation, route}) => {
  const {width, height} = useWindowDimensions();
  const [videoLength, setVideoLength] = useState(30);
  const currentStep = route.params?.step || 1; // ✅ 현재 단계 설정 (1단계)
  const from = route.params?.from || 'shorts'; // ✅ 'shorts' 또는 'photo' 구분

  return (
    <SafeAreaView style={styles.container}>
      {/* ✅ 단계바 추가 (5단계) */}
      <ProgressBar currentStep={currentStep} totalSteps={5} />

      {/* 📌 영상 길이 선택 */}
      <Text
        style={[
          styles.label,
          {fontSize: scaleFont(18, width), marginTop: scaleSize(80, height)},
        ]}>
        영상 길이
      </Text>
      <Slider
        style={[styles.slider, {width: scaleSize(300, width)}]}
        minimumValue={30}
        maximumValue={60}
        step={5}
        value={videoLength}
        onValueChange={value => setVideoLength(value)}
        minimumTrackTintColor="#51BCB4"
        maximumTrackTintColor="#888"
        thumbTintColor="#51BCB4"
      />
      <View style={[styles.timeLabels, {width: scaleSize(300, width)}]}>
        <Text style={[styles.timeText, {fontSize: scaleFont(16, width)}]}>
          30초
        </Text>
        <Text style={[styles.timeText, {fontSize: scaleFont(16, width)}]}>
          60초
        </Text>
      </View>

      {/* 📌 버튼 추가 */}
      <View style={styles.buttonContainer}>
        {/* ✅ 이전 버튼: AddScreen으로 이동 (goBack 사용) */}
        <TouchableOpacity
          style={[
            styles.button,
            styles.prevButton,
            {width: scaleSize(140, width)},
          ]}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>이전</Text>
        </TouchableOpacity>

        {/* ✅ 다음 버튼: PromptInputScreen으로 이동 */}
        <TouchableOpacity
          style={[
            styles.button,
            styles.nextButton,
            {width: scaleSize(140, width)},
          ]}
          onPress={() =>
            navigation.navigate('PromptInputScreen', {
              from,
              step: currentStep + 1,
            })
          }>
          <Text style={styles.buttonText}>다음</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// 📌 **스타일 정의 (반응형 적용)**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2C3D',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  label: {
    fontWeight: 'bold',
    color: '#51BCB4',
    marginBottom: '3%',
  },
  slider: {
    height: scaleSize(40, 375),
  },
  timeLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleSize(5, 375),
  },
  timeText: {
    color: '#51BCB4',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: scaleSize(30, 375),
  },
  button: {
    alignItems: 'center',
    paddingVertical: scaleSize(12, 375),
    borderRadius: scaleSize(20, 375),
  },
  prevButton: {
    backgroundColor: '#ccc',
    marginRight: '2%',
  },
  nextButton: {
    backgroundColor: '#51BCB4',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#1F2C3D',
  },
});

export default VideoLengthScreen;
