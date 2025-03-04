import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProgressBar from '../../components/ProgressBar'; // ✅ 단계바 추가

// 📌 반응형 크기 조정 함수
const scaleSize = (size, width) => (size * width) / 375;
const scaleFont = (size, width) => (size * width) / 375;

const FinalVideoScreen = ({navigation, route}) => {
  const {width, height} = useWindowDimensions();
  const [selectedVideo, setSelectedVideo] = useState(0);
  const translateX = new Animated.Value(0);
  const currentStep = route.params?.step || 4; // ✅ 현재 단계 설정 (4단계)
  const from = route.params?.from || 'shorts'; // ✅ 'shorts' 또는 'photo' 구분

  // 📌 이전 화면 설정
  const previousScreen =
    from === 'shorts' ? 'ImageSelectionScreen' : 'MyPhotoPrompt';

  // 📌 더미 데이터 (생성된 동영상 목록)
  const videos = ['생성된 동영상 1', '생성된 동영상 2', '생성된 동영상 3'];

  const handleNext = () => {
    if (selectedVideo < videos.length - 1) {
      Animated.timing(translateX, {
        toValue: -width * (selectedVideo + 1),
        duration: 300,
        useNativeDriver: true,
      }).start(() => setSelectedVideo(selectedVideo + 1));
    }
  };

  const handlePrev = () => {
    if (selectedVideo > 0) {
      Animated.timing(translateX, {
        toValue: -width * (selectedVideo - 1),
        duration: 300,
        useNativeDriver: true,
      }).start(() => setSelectedVideo(selectedVideo - 1));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ✅ 단계바 추가 (4단계 / 총 5단계) */}
      <View style={styles.progressBarWrapper}>
        <ProgressBar currentStep={currentStep} totalSteps={5} />
      </View>

      {/* 📌 동영상 슬라이드 */}
      <View
        style={[styles.sliderContainer, {marginTop: scaleSize(50, height)}]}>
        <TouchableOpacity onPress={handlePrev} style={styles.arrowButton}>
          <Text style={[styles.arrowText, {fontSize: scaleFont(24, width)}]}>
            {'<'}
          </Text>
        </TouchableOpacity>
        <Animated.View
          style={[
            styles.videoItem,
            {
              transform: [{translateX}],
              width: width * 0.7,
              height: height * 0.35,
            },
          ]}>
          <Text style={[styles.videoText, {fontSize: scaleFont(16, width)}]}>
            {videos[selectedVideo]}
          </Text>
        </Animated.View>
        <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
          <Text style={[styles.arrowText, {fontSize: scaleFont(24, width)}]}>
            {'>'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* 📌 배경 음악 선택 버튼 */}
      <TouchableOpacity
        style={[
          styles.musicButton,
          {
            width: width * 0.7,
            height: scaleSize(40, height),
            marginTop: scaleSize(20, height),
          },
        ]}
        onPress={() => navigation.navigate('MusicSelectionScreen')} // ✅ step 증가 제거
      >
        <Text style={[styles.buttonText, {fontSize: scaleFont(16, width)}]}>
          배경 음악
        </Text>
      </TouchableOpacity>

      {/* 📌 하단 버튼 */}
      <View
        style={[styles.buttonContainer, {marginTop: scaleSize(20, height)}]}>
        {/* ✅ 이전 버튼: 'shorts'는 ImageSelectionScreen, 'photo'는 MyPhotoPrompt */}
        <TouchableOpacity
          style={[
            styles.button,
            styles.prevButton,
            {width: width * 0.35, height: scaleSize(40, height)},
          ]}
          onPress={() => navigation.navigate(previousScreen, {from})}>
          <Text style={[styles.buttonText, {fontSize: scaleFont(16, width)}]}>
            이전
          </Text>
        </TouchableOpacity>

        {/* ✅ 다음 버튼: ResultScreen으로 이동 */}
        <TouchableOpacity
          style={[
            styles.button,
            styles.nextButton,
            {width: width * 0.35, height: scaleSize(40, height)},
          ]}
          onPress={() => navigation.navigate('ResultScreen', {step: 5, from})}>
          <Text style={[styles.buttonText, {fontSize: scaleFont(16, width)}]}>
            영상 병합
          </Text>
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
  },
  progressBarWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: scaleSize(15, 375), // ✅ 다른 화면과 정렬 유지
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  videoItem: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#51BCB4',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#51BCB4',
  },
  arrowButton: {
    padding: scaleSize(10, 375),
  },
  arrowText: {
    color: '#51BCB4',
  },
  musicButton: {
    borderColor: '#51BCB4',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  button: {
    alignItems: 'center',
    borderRadius: 15,
  },
  prevButton: {
    backgroundColor: '#ccc',
  },
  nextButton: {
    backgroundColor: '#51BCB4',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#1F2C3D',
  },
});

export default FinalVideoScreen;
