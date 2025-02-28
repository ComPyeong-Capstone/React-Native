import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Expo 아이콘 대신 변경

const { width } = Dimensions.get("window");

const KidsFriendlyUI = () => {
  return (
    <View style={styles.container}>
      {/* 진행 바 */}
      <View style={styles.progressBar}>
        <View style={styles.progressDot} />
        <View style={[styles.progressDot, styles.activeDot]} />
        <View style={styles.progressDot} />
        <View style={styles.progressDot} />
      </View>

      {/* 중앙 네모 박스 (결과물) */}
      <View style={styles.resultBox}>
        <Text style={styles.resultText}>최종결과물</Text>
      </View>

      {/* 버튼 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.postButton}>
          <Icon name="cloud-upload-outline" size={24} color="white" />
          <Text style={styles.buttonText}>포스팅</Text>
        </TouchableOpacity>

        <View style={styles.smallButtonContainer}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.smallButtonText}>저장</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.exitButton}>
            <Text style={styles.smallButtonText}>나가기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1F2C3D",
    paddingTop: 2,
  },
  progressBar: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 0,
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#CCC",
    marginHorizontal: 5,
  },
  resultBox: {
    width: width * 0.8,
    height: 550,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#51BCB4",
    marginVertical: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resultText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1F2C3D",
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  postButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#51BCB4",
    paddingVertical: 15,
    paddingHorizontal: 130,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
  smallButtonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  saveButton: {
    backgroundColor: "#356868",
    paddingVertical: 15,
    paddingHorizontal: 65,
    borderRadius: 15,
    marginHorizontal: 8,
  },
  exitButton: {
    backgroundColor: "#777",
    paddingVertical: 15,
    paddingHorizontal: 65,
    borderRadius: 15,
    marginHorizontal: 8,
  },
  smallButtonText: {
    fontSize: 17,
    color: "white",
  },
});

export default KidsFriendlyUI;
