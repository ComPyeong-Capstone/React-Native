import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useWindowDimensions} from 'react-native';
import ProgressBar from '../../components/ProgressBar'; // ✅ 단계바 추가

// 📌 반응형 크기 조정 함수
const scaleSize = (size, width) => (size * width) / 375;
const scaleFont = (size, width) => (size * width) / 375;

const PromptInputScreen = ({navigation, route}) => {
  const {width, height} = useWindowDimensions();
  const [prompt, setPrompt] = useState('');
  const currentStep = route.params?.step || 2; // ✅ 현재 단계 설정 (2단계)
  const from = route.params?.from || 'shorts'; // ✅ 'shorts' 또는 'photo' 구분

  return (
    <SafeAreaView style={styles.container}>
      {/* ✅ 단계바 추가 (2단계 / 총 5단계) */}
      <ProgressBar currentStep={currentStep} totalSteps={5} />

      {/* 📌 프롬프트 입력 */}
      <View
        style={[
          styles.inputContainer,
          {width: scaleSize(300, width), height: scaleSize(150, height)},
        ]}>
        <TextInput
          style={[styles.input, {fontSize: scaleFont(16, width)}]}
          placeholder="프롬프트 입력"
          placeholderTextColor="#51BCB4"
          multiline
          onChangeText={setPrompt}
          value={prompt}
        />
      </View>

      {/* 📌 버튼 추가 */}
      <View style={styles.buttonContainer}>
        {/* ✅ 이전 버튼: VideoLengthScreen으로 이동 */}
        <TouchableOpacity
          style={[
            styles.button,
            styles.prevButton,
            {width: scaleSize(140, width)},
          ]}
          onPress={() =>
            navigation.navigate('VideoLengthScreen', {
              from,
              step: currentStep - 1,
            })
          }>
          <Text style={styles.buttonText}>이전</Text>
        </TouchableOpacity>

        {/* ✅ 다음 버튼: ImageSelectionScreen으로 이동 */}
        <TouchableOpacity
          style={[
            styles.button,
            styles.nextButton,
            {width: scaleSize(140, width)},
          ]}
          onPress={() =>
            navigation.navigate('ImageSelectionScreen', {
              from,
              step: currentStep + 1,
            })
          }>
          <Text style={styles.buttonText}>이미지 생성</Text>
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
  inputContainer: {
    borderWidth: 2,
    borderColor: '#51BCB4',
    borderRadius: scaleSize(10, 375),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleSize(80, 375),
  },
  input: {
    color: '#51BCB4',
    textAlign: 'center',
    width: '100%',
    height: '100%',
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

export default PromptInputScreen;
