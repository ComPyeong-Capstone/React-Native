## ios 아이콘 적용되지 않을 시 해결 방법

```sh
cd ios
pod install
cd ..
```

만약 pod install 실행 중 오류가 발생하면:

```sh
rm -rf ios/Pods ios/Podfile.lock && pod install
```
