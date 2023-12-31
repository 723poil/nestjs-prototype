# 프로토타입

## 적용 기능
+ Swagger
    [스웨거 접속 경로](http://localhost:3000/swagger)<br>
    [[NestJs] Swagger연결 + 보안관리](https://velog.io/@inmyblue0930/NestJs-Swagger%EC%97%B0%EA%B2%B0-%EB%B3%B4%EC%95%88%EA%B4%80%EB%A6%AC) <br>
+ Typeorm <br>
    [NestJs 데이터베이스 연동하기 (mysql, typeorm)](https://develop-const.tistory.com/19)<br>
    [NestJS | 데이터베이스 연결, 설정 정보를 입력하는 다양한 방법... (database connection)](https://gaemi606.tistory.com/entry/NestJS-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4-%EC%97%B0%EA%B2%B0-%EC%84%A4%EC%A0%95-%EC%A0%95%EB%B3%B4%EB%A5%BC-%EC%9E%85%EB%A0%A5%ED%95%98%EB%8A%94-%EB%8B%A4%EC%96%91%ED%95%9C-%EB%B0%A9%EB%B2%95-database-connection) <br>
    [TypeORM: How to Execute Raw SQL Queries](https://www.kindacode.com/snippet/typeorm-how-to-execute-raw-sql-queries/)
    -> [mysql $1 error, use \`?\`](https://github.com/launchbadge/sqlx/issues/389) <br>
    [CustomRepository decorator 만들기](https://greeng00se.tistory.com/57) <br>
    [[TypeORM] QueryBuilder 사용시 return 타입 구체화하기](https://seungtaek-overflow.tistory.com/19)

## request 규칙
Get이 아닌 API들이 request body를 사용할 경우 -> DTO 사용 <br>
dto 객체가 변환이 필요할 경우 dto 내에 변환 함수 작성하여 사용

## response 규칙
DTO로 보내도록 설정

## async await를 사용??
왜 사용해야되는지는 아직 잘 모르겠지만(찾아봤는데도 모르겠음) <br>
promise 처리보다는 예외처리시 좀 더 용이하다는 것 같음 <br>
또한 비동기로 사용해야 서버 컴에서의 효율성이 증가될거라고 생각됨(뇌피셜)

-> [[Back-end] Callback & async, await & Promise](https://velog.io/@bsu1209/Back-end-%EB%8F%99%EA%B8%B0-%EB%B9%84%EB%8F%99%EA%B8%B0) <br>
비동기로 처리하여 효율적인 자원관리가 가능하지만 동기 처리방식보다 복잡도가 올라갈것으로 보임 <br>
기존의 promise방식보다 async & await를 통해 가독성을 높여 코드의 흐름을 이해하는데 원활함

## 예외처리
[nestjs 공식문서](https://docs.nestjs.com/exception-filters) <br>
[NestJS - Exception filter 설정](https://bitkunst.tistory.com/entry/NestJS-Exception-filter-%EC%84%A4%EC%A0%95) <br>
exception filter를 사용해서 로그까지 처리할 수 있도록 할 예정

## 로거 관련
[NestJS에서 로깅(logging)하기](https://www.daleseo.com/nestjs-logging/) <br>
[NestJS Logger Middleware](https://velog.io/@seunghwa17/NestJS-Logger-Middleware) <br>
[[NestJS] LOG에 요청 transation-id 추가하기](https://byul91oh.tistory.com/559) <br>

## child router
[nest-router](https://github.com/nestjsx/nest-router)
@nestjs/core에 들어있어 따로 모듈 설치는 필요없고, 설정만 하면됨
```
.
├── agent
│   ├── store ...
│   ├── brand ...
│   └── ...
├── ceo

```
이런식으로

## DDD 관련
[ET네 만물상 프로젝트 복기 - NestJS](https://velog.io/@jjunyjjuny/ET%EB%84%A4-%EB%A7%8C%EB%AC%BC%EC%83%81-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%B3%B5%EA%B8%B0-NestJS)

## message queue
[Nestjs queue 실사용기 (feat. bull)](https://velog.io/@kimjiwonpg98/nestjs%EB%A1%9C-queue-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0-feat.-bull)