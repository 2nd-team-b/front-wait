## Sessac X Coding on B_Team_Project 대기
> node.js + express + React를 이용한 온라인 웨이팅 사이트


<img width="60%" src="https://github.com/2nd-team-b/back-wait/assets/111476138/94e4023a-00e5-4200-8428-b413f0c5f870">


>  

## 💻 프로젝트 설명
웹 배포 주소 : <https://sesac-projects.site/waitmate/>

 * 어떤 프로젝트인가?
   
   - 웨이트메이트(요청자)가 프록시(대기자)에게 장소에 대한 시간과 보수에 대한 이야기로 상호 가능한 해당 시간대에 웨이팅을 해주는 프로젝트 


 * 어떤 점을 중점적으로 만들었는가? 
 
   - 현대 사회에서 편지는 점점 무거운 느낌으로 바뀌고 있음. 이에 온라인으로 가볍게 자신의 마음으로 전달하고자 프로젝트 선정
   

 * 프로젝트로 기대하는 점? 
 
   - 많은 사람들이 부담스럽지 않게 자신의 마음을 가볍게 전달할 수 있는 것을 기대
   - 송편지로 사람들이 조금이라도 기쁨을 가졌으면 하는 기대
   
## ⏲개발기간
 * 2023년 10월 18일 ~ 2023년 11월 10일
 
## 👨‍👩‍👧‍👦멤버구성
* 김지형(sy33002) 프론트: 
   - 헤더/사이드바/웨이트메이트 등록,리스트, 디테일 , 업데이트 페이지/ 프록시 등록,리스트, 디테일, 업데이트 페이지/ 마이페이지
* 박장혁(Vamos-Hyuk)  프론트: 
   -
* 정채림(ellin45)  프론트: 
   - 
* 이동규(LOBSTER10000) 백엔드 : 
   - Mysql&시퀄라이즈 모델 생성 후 연동, MongoDB&몽구스 스키마 생성 후 연동, 웹소켓을 활용한 채팅 기능, 프록시 CRUD
* 박준수(kdm111) 백엔드 : 
   -
* 김효중(rlagywnd4) 백엔드 : 
   - 웨이트메이트 CRUD, 관심기능, 소켓을 활용한 웨이트메이트 상태 변경 기능, 마이페이지 정보 연동


## ⚙개발환경
 * Javascript : <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white"/> Javascript
 * IDE : <img src="https://img.shields.io/badge/visualstudio-007ACC?style=flat-square&logo=visualstudio idea&logoColor=white"/> Visual Studio Code (1.81)
 * Framework : <img src="https://img.shields.io/badge/nodedotjs-339933?style=flat-square&logo=nodedotjs&logoColor=white"/> Node.js (20.5.0)
 * Library : <img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white"/> React (18.2.0)
 * Database : <img src="https://img.shields.io/badge/mysql-4479A1?style=flat-square&logo=mysql&logoColor=white"/> Mysql (workbench 8.0)
 * Database : <img src="https://img.shields.io/badge/mongoDB-47A248?style=flat-square&logo=mongoDB&logoColor=white"/> MongoDB (6.1.0)
 * ORM : <img src="https://img.shields.io/badge/sequelize-52B0E7?style=flat-square&logo=sequelize&logoColor=white"/> Sequelize (6.32.1)
 * ODM : <img src="https://img.shields.io/badge/mongoose-F04D35?style=flat-square&logo=sequelize&logoColor=white"/> Mongoose (7.6.3)
 * Server : <img src="https://img.shields.io/badge/amazonec2-FF9900?style=flat-square&logo=naver&logoColor=white"/> Amazone EC2

   
## 📢 컨벤션

   <div>
     <table>
       <tr>
        <td>
          코딩 컨벤션
        </td>
        <td>
          깃 컨벤션
        </td>
       </tr>
       <tr>
         <td>코딩 변수쪽

1. 변수, 함수, 인스턴스를 작성할 때는 ‘카멜케이스’를 사용한다.

  ex) camelCase

 2.  함수명을 작성할 때는 동사 + 명사 형태로 구성한다.

 ex) getUserInfomation()

1. Class, Constructor를 작성할 때는 *Pascal Case(=upper 카멜 케이스)*를 사용합니다

 ex) CamelCase

 **글자의 길이**

글자의 길이는 20자 이내로 제한합니다. <br>
4 단어 이상이 들어가거나, <br>
부득이하게 20자 이상이 되는 경우 팀원과의 상의를 거칩시다.

**약칭의 사용**

약어는 되도록 명시성을 위해서 사용을 지양하도록 합니다.<br>
부득이 약어가 필요한 경우에는 미리 말씀 부탁드립니다

**따옴표의 사용**

홑따옴표를 많이 이용할 것
 </td>
         <td>
           1. 새로운 이슈 생성하기(이슈 설명 적기)<br>
2. 이슈 번호를 PR 날릴 브랜치 이름(이슈 이름) + - # + 이슈번호
ex) header-#4

3. 해당 브랜치 PR날린 후 approve 되면 이슈 종료하기
- git branch 브랜치 이름(이슈 이름) + -# + 이슈번호
- ⭐️ git pull origin develop ⭐️
- git add .
- git commit -m “커밋 메세지 : description”(설명 자세히 해주시면 더 좋습니다)
- git push origin branch (pr올릴 브랜치 이름)
- 깃헙에서 PR작성
- PR 날릴 브랜치로 merge하는 PR작성후 assignes 에서 레포지토리 멤버 선택
- 한분이 approve 해주시면 merge 성공
- 항상 git merge origin develop 해주시고 충돌시 vscode안에서 코드 비교후 병합 하신후 작업 진행하시면 됩니다.
- 깃 브랜치 이동하실때 되도록이면 git commit 다 하시고 브랜치 이동 하시면 좋을것같습니다.
- 만일 commit 올리기 전 변동 사항을 저장 하고 싶으시면 git stash 해서 저장 후 브랜치 이동하시면 됩니다!
         </td>
       </tr> 
     </table>
   </div>



## ⭕ 라이브러리

  프론트
  
 * aos: 2.3.4,
 * axios: 1.6.0,
 * google-map-react: 2.2.1,
 * include-media: 2.0.0,
 * react: 18.2.0,
 * sass: 1.69.5,
 * socket.io-client: 4.7.2,
 * sweetalert2: 11.9.0,
 * web-vitals: 2.1.4,
 * zustand: 4.4.6

  백엔드
  
 * axios: 1.5.1,
 * bcrypt: 5.1.1,
 * cookie-parser: 1.4.6,
 * cors: 2.8.5,
 * express: 4.18.2,
 * http: 0.0.1-security,
 * https: 1.0.0,
 * jsonwebtoken: 9.0.2,
 * mongoose: 7.6.3,
 * multer: 1.4.4,
 * mysql2: 3.6.2,
 * sequelize: 6.33.0,
 * socket.io: 4.7.2,
 * swagger-jsdoc: 6.2.8,
  
## 📙 개발 준비

   * <b>애자일 방법을 택하여 3주간 스프린트로 만들기로 결정</b>

   * ERD : <b>ERD Cloud 이용</b> https://www.erdcloud.com/d/qPe4s2tMBuPfLCFP2
       
       - <img width="50%" src="https://github.com/2nd-team-b/back-wait/assets/111476138/3eb43cfd-dc80-4240-8b43-0a6b4f881adb">
       

   * 프로토타입툴 : <b>피그마 이용</p> https://www.figma.com/file/XUIj2vnz30zCIxBPVd3thG/DAEGI-WIRE-FRAME?type=design&node-id=0-1&mode=design&t=cVNrhCbZpNXJyei2-0

       - <img width="50%" src="https://github.com/2nd-team-b/back-wait/assets/111476138/da9176cd-73b4-43d2-aa0f-0c20afa1a878">

   * 회의록 : <b>Notion 사용하여 날짜별 회의 작성</p> https://glitter-microwave-3f2.notion.site/8370fa748c1b4d13a06cbb289a8524c1?pvs=4

       - <img width="50%" src="https://github.com/2nd-team-b/back-wait/assets/111476138/f577bfe5-71b3-4f67-97a8-1f4b4d3a7796">


## 📺 화면 구성
 <div>
   <table>
    <tbody>
     <tr>
     <td align="center">
       메인페이지
      </td>
      <td align="center">
       로그인&회원가입
      </td>
     </tr>
     <tr>
      <td>
       <img width="100%" src="">
     </td>
      <td>
       <img width="100%" src="">
      </td>
     </tr>
     <tr>
      <td align="center">편지함 조회 및 페이징</td>
      <td align="center">마이페이지</td>
     </tr>
     <tr>
      <td>
       <img width="100%" src="">
      </td>
       <td>
         <img width="100%" height="30%" src="">
      </td>
     </tr>
      <tr>
      <td align="center">편지함(친구신청 및 목록 확인)</td>
      <td align="center">편지쓰기</td>
     </tr>
     <tr>
      <td>
       <img width="100%" src="">
      </td>
       <td>
        <img width="100%" src="">
      </td>
     </tr>
     <tr>
      <td align="center">편지 확인</td>
      <td align="center">공지 사항 글쓰기</td>
     </tr>
     <tr>
       <td>
        <img width="100%" src="">
      </td>
       <td>
      <img width="100%" src="">
      </td>
     </tr>
     <tr>
      <td align="center"> 404에러페이지 </td>
     </tr>
     <tr>
       <td>
         <img width="100%" src="">
      </td>
     </tr>
    </tbody>
 </table>
</div>
 
## 📌주요기능

  🟩 <strong>로그인/회원가입</strong>
  
    * (회원가입) Bcrypt를 이용한 비밀번호 암호화 작업
    * (로그인) JWT를 이용하여 토큰을 새로 발급받아 쿠키로 로그인 유지 
  
  🟩 <strong>맵</strong>
  
    * 
    * 
    
  🟩 <strong>웨이트메이트(대기 요청자)</strong>
 
    * (Create) 해당되는 요청자가 원하는 장소에 원하는 시간에 대기할 수 있는 사람을 구하는 공고를 올림
    * (Read) 공고를 주소를 기준으로 볼 수 있게 끔 구현 
    * (Update) 자신의 공고문을 수정할 수 있도록 구성
  
  🟩 <strong>프록시(대기자)</strong>
  
    * (Create) 해당 대기자가 자신의 이력서를 올릴 수 있도록 함 (multer 사용)
    * (Read) 대기 요청자가 원하는 장소 주변에 있는 프록시들 리스트들을 가져옴   
    * (Update) 자신의 이력서를 수정할 수 있도록 함
    
  🟩 <strong>채팅</strong>
  
    * 해당되는 공고의 정보값을 가진 사람들끼리의 채팅만 가능한 방을 생성
    * 채팅방을 생성시에 같은 정보를 가진 사람들만 들어올 수 있도록 구현
    * 웹소켓을 이용하여 상호작용이 되는 채팅 구현
    
 🟩 <strong>결제 기능 & 리뷰 기능</strong>
 
    * 
    * 
    * 
    
 🟩 <strong>마이페이지</strong>

    * (마이페이지) Multer 기능을 이용한 프로필 사진 변경 기능
    * (마이페이지) 자신이 올린 프록시 리스트들과 웨이트메이트 리스트들을 확인
    * (마이페이지) 자신이 올린 프록시, 웨이트메이트 공고문 수정 기능
    

## 📃 참고


## 업데이트 내역

* 0.0.1
    * 작업 진행 중  


<!-- ## 설치 방법

OS X & 리눅스:

```sh
npm install my-crazy-module --save
``` -->

<!-- ## 사용 예제

스크린 샷과 코드 예제를 통해 사용 방법을 자세히 설명합니다.

_더 많은 예제와 사용법은 [Wiki][wiki]를 참고하세요._

## 업데이트 내역

* 0.2.1
    * 수정: 문서 업데이트 (모듈 코드 동일)
* 0.2.0
    * 수정: `setDefaultXYZ()` 메서드 제거
    * 추가: `init()` 메서드 추가
* 0.1.1
    * 버그 수정: `baz()` 메서드 호출 시 부팅되지 않는 현상 (@컨트리뷰터 감사합니다!)
* 0.1.0
    * 첫 출시
    * 수정: `foo()` 메서드 네이밍을 `bar()`로 수정
* 0.0.1
    * 작업 진행 중

## 정보

이름 – [@트위터 주소](https://twitter.com/dbader_org) – 이메일주소@example.com

XYZ 라이센스를 준수하며 ``LICENSE``에서 자세한 정보를 확인할 수 있습니다.

[https://github.com/yourname/github-link](https://github.com/dbader/)

## 기여 방법

1. (<https://github.com/yourname/yourproject/fork>)을 포크합니다.
2. (`git checkout -b feature/fooBar`) 명령어로 새 브랜치를 만드세요.
3. (`git commit -am 'Add some fooBar'`) 명령어로 커밋하세요.
4. (`git push origin feature/fooBar`) 명령어로 브랜치에 푸시하세요. 
5. 풀리퀘스트를 보내주세요. -->

<!-- Markdown link & img dfn's -->
<!-- [contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/LOBSTER10000/Green-Project/graphs/contributors
 --> 