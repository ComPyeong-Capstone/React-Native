import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useWindowDimensions} from 'react-native';
import ProgressBar from '../components/ProgressBar'; // ✅ 단계바 추가

// 📌 반응형 크기 조정 함수
const scaleSize = (size, refSize) => (size * refSize) / 375;
const scaleFont = (size, refSize) => (size * refSize) / 375;

const ResultScreen = ({navigation, route}) => {
  const {width, height} = useWindowDimensions();

  // ✅ Shorts는 5단계, Photo는 4단계 구분
  const from = route.params?.from || 'shorts'; // 기본값은 'shorts'
  const totalSteps = from === 'shorts' ? 5 : 4;
  const currentStep = totalSteps; // ✅ 최종 단계

  return (
    <SafeAreaView style={styles.container}>
      {/* ✅ 단계바 추가 (높이 통일) */}
      <View style={styles.progressBarWrapper}>
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* ✅ 최종 결과물 박스 */}
        <View
          style={[
            styles.resultBox,
            {
              width: scaleSize(180, width),
              height: scaleSize(180, height),
              marginTop: scaleSize(30, height),
            },
          ]}>
          <Text style={[styles.resultText, {fontSize: scaleFont(16, width)}]}>
            최종결과물
          </Text>
        </View>

        {/* ✅ 버튼 컨테이너 */}
        <View
          style={[styles.buttonContainer, {marginTop: scaleSize(30, height)}]}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.postButton,
              {
                width: scaleSize(220, width),
                paddingVertical: scaleSize(12, height),
              },
            ]}
            onPress={() => console.log('포스팅')}>
            <Text style={[styles.buttonText, {fontSize: scaleFont(14, width)}]}>
              포스팅
            </Text>
          </TouchableOpacity>

          <View style={styles.bottomButtons}>
            <TouchableOpacity
              style={[
                styles.button,
                styles.exitButton,
                {
                  width: scaleSize(100, width),
                  paddingVertical: scaleSize(10, height),
                },
              ]}
              onPress={() => navigation.navigate('Main')}>
              <Text
                style={[styles.buttonText, {fontSize: scaleFont(14, width)}]}>
                나가기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                styles.saveButton,
                {
                  width: scaleSize(100, width),
                  paddingVertical: scaleSize(10, height),
                },
              ]}
              onPress={() => console.log('저장')}>
              <Text
                style={[styles.buttonText, {fontSize: scaleFont(14, width)}]}>
                저장
              </Text>
            </TouchableOpacity>
          </View>

          {/* ✅ 🔥 이전 버튼 추가 (Shorts/Photo에 따라 이동 다르게 설정) */}
          <TouchableOpacity
            style={[
              styles.button,
              styles.prevButton,
              {
                width: scaleSize(140, width),
                paddingVertical: scaleSize(12, height),
              },
            ]}
            onPress={
              () => navigation.navigate('FinalVideoScreen', {from}) // ✅ 어디서 왔는지 유지
            }>
            <Text style={[styles.buttonText, {fontSize: scaleFont(14, width)}]}>
              이전
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// 📌 **스타일 정의 (반응형 적용)**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2C3D',
  },
  progressBarWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: scaleSize(15, 375), // ✅ 다른 화면과 정렬 유지
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scaleSize(20, 375),
  },
  resultBox: {
    borderWidth: 2,
    borderColor: '#51BCB4',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: {
    color: '#51BCB4',
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: '5%',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: scaleSize(10, 375),
  },
  button: {
    alignItems: 'center',
    borderRadius: 18,
  },
  postButton: {
    backgroundColor: '#51BCB4',
  },
  exitButton: {
    backgroundColor: '#ccc',
  },
  saveButton: {
    backgroundColor: '#51BCB4',
  },
  prevButton: {
    backgroundColor: '#888',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#1F2C3D',
  },
});

export default ResultScreen;
