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

const ImageSelectionScreen = ({navigation, route}) => {
  const {width, height} = useWindowDimensions();
  const [selectedImage, setSelectedImage] = useState(2); // 기본 선택 (중앙)
  const translateX = new Animated.Value(0);
  const currentStep = route.params?.step || 3; // ✅ 현재 단계 설정 (3단계)
  const from = route.params?.from || 'shorts'; // ✅ 'shorts' 또는 'photo' 구분

  // 📌 이전 화면 설정
  const previousScreen =
    from === 'shorts' ? 'PromptInputScreen' : 'MyPhotoPrompt';

  // 📌 더미 데이터 (사진 목록)
  const images = ['사진', '사진', '사진', '사진 2', '사진 3'];

  const handleNext = () => {
    if (selectedImage < images.length - 1) {
      Animated.timing(translateX, {
        toValue: -width * (selectedImage + 1),
        duration: 300,
        useNativeDriver: true,
      }).start(() => setSelectedImage(selectedImage + 1));
    }
  };

  const handlePrev = () => {
    if (selectedImage > 0) {
      Animated.timing(translateX, {
        toValue: -width * (selectedImage - 1),
        duration: 300,
        useNativeDriver: true,
      }).start(() => setSelectedImage(selectedImage - 1));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ✅ 단계바 추가 (3단계 / 총 5단계) */}
      <ProgressBar currentStep={currentStep} totalSteps={5} />

      {/* 📌 사진 선택 슬라이드 */}
      <View style={styles.sliderContainer}>
        <TouchableOpacity onPress={handlePrev} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{'<'}</Text>
        </TouchableOpacity>
        <Animated.View style={[styles.imageItem, {transform: [{translateX}]}]}>
          <Text style={styles.imageText}>{images[selectedImage]}</Text>
        </Animated.View>
        <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      {/* 📌 선택된 이미지의 자막 표시 */}
      <View style={styles.captionBox}>
        <Text style={styles.captionText}>생성된 자막</Text>
      </View>

      {/* 📌 버튼 추가 */}
      <View style={styles.buttonContainer}>
        {/* ✅ 이전 버튼: 'shorts'는 PromptInputScreen, 'photo'는 MyPhotoPrompt */}
        <TouchableOpacity
          style={[styles.button, styles.prevButton, {width: '45%'}]}
          onPress={() =>
            navigation.navigate(previousScreen, {from, step: currentStep - 1})
          }>
          <Text style={styles.buttonText}>이전</Text>
        </TouchableOpacity>

        {/* ✅ 다음 버튼: FinalVideoScreen으로 이동 */}
        <TouchableOpacity
          style={[styles.button, styles.nextButton, {width: '45%'}]}
          onPress={() =>
            navigation.navigate('FinalVideoScreen', {
              from,
              step: currentStep + 1,
            })
          }>
          <Text style={styles.buttonText}>영상 생성</Text>
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
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scaleSize(80, 375),
  },
  imageItem: {
    width: 200,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#51BCB4',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#51BCB4',
  },
  imageText: {
    fontWeight: 'bold',
    color: '#1F2C3D',
  },
  arrowButton: {
    padding: 20,
  },
  arrowText: {
    fontSize: 24,
    color: '#51BCB4',
  },
  captionBox: {
    width: '90%',
    height: 50,
    borderColor: '#51BCB4',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 30,
  },
  button: {
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 20,
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

export default ImageSelectionScreen;
