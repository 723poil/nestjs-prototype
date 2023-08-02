# 프로토타입

## 적용 기능
+ Swagger [스웨거 접속 경로](http://localhost:3000/swagger), [참고](https://velog.io/@inmyblue0930/NestJs-Swagger%EC%97%B0%EA%B2%B0-%EB%B3%B4%EC%95%88%EA%B4%80%EB%A6%AC)
+ Typeorm [참고](https://develop-const.tistory.com/19)

## request 규칙
Get이 아닌 API들이 request body를 사용할 경우 -> DTO 사용
dto 객체가 변환이 필요할 경우 dto 내에 변환 함수 작성하여 사용

## response 규칙
DTO로 보내도록 설정

## async await를 사용??
왜 사용해야되는지는 아직 잘 모르겠지만(찾아봤는데도 모르겠음)
promise 처리보다는 예외처리시 좀 더 용이하다는 것 같음
또한 비동기로 사용해야 서버 컴에서의 효율성이 증가될거라고 생각됨(뇌피셜)