import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {SafeAreaView} from 'react-native-safe-area-context';

const StepProgressBar = ({currentStep}) => {
  return (
    <View style={styles.progressBarContainer}>
      {[1, 2, 3].map(step => (
        <View
          key={step}
          style={[
            styles.stepCircle,
            step === currentStep ? styles.activeStep : styles.inactiveStep,
          ]}
        />
      ))}
    </View>
  );
};

const VideoLengthScreen = () => {
  const {width} = useWindowDimensions();
  const [videoLength, setVideoLength] = useState(30);

  return (
    <SafeAreaView style={styles.container}>
      {/* 단계 바 */}
      <StepProgressBar currentStep={1} />

      {/* 영상 길이 선택 */}
      <Text style={[styles.label, {fontSize: width * 0.05}]}>영상 길이</Text>
      <Slider
        style={{width: width * 0.8, height: 40}}
        minimumValue={30}
        maximumValue={60}
        step={5}
        value={videoLength}
        onValueChange={setVideoLength}
        minimumTrackTintColor="#51BCB4"
        maximumTrackTintColor="#5A6A7A"
        thumbTintColor="#51BCB4"
      />

      <View style={styles.sliderLabels}>
        <Text style={styles.sliderText}>30초</Text>
        <Text style={styles.sliderText}>60초</Text>
      </View>

      {/* 이전 / 다음 버튼 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.prevButton]}>
          <Text style={styles.buttonText}>이전</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.nextButton]}>
          <Text style={styles.buttonText}>다음</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2C3D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  stepCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  activeStep: {
    backgroundColor: '#51BCB4',
  },
  inactiveStep: {
    backgroundColor: '#5A6A7A',
  },
  label: {
    color: '#51BCB4',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  sliderText: {
    color: '#51BCB4',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 40,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 20,
  },
  prevButton: {
    backgroundColor: '#B0B0B0',
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: '#51BCB4',
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default VideoLengthScreen;
