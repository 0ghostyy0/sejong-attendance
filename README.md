  

# 출석귀신 - 세종대학교 온라인 출석확인 어플리케이션

![App Screenshot](https://github.com/luciancah/sejong-attendance/blob/master/Docs/assets/splash.png?raw=true)

세종대학교 블랙보드 ```blackboard.sejong.ac.kr``` 상의 온라인 강의 출석 진도율을 한 번에 모아볼 수 있는 서비스 입니다.
<br>
강의 전체 진도율, 강의 별 상세 정보 확인, 모든 수업 중 급한 강의 정보를 모아볼 수 있는 서비스를 제공합니다.
<br>
iOS AppStore 생산성 차트 63위(2022.10), 74위(2023.03)
>프로젝트 기간: 2022.07 ~ 2022.08

>프로젝트 릴리즈: 2022.08.27(App Store)

[<img height=50px src=https://user-images.githubusercontent.com/42789819/115149387-d42e1980-a09e-11eb-88e3-94ca9b5b604b.png>](https://apps.apple.com/kr/app/%EC%B6%9C%EC%84%9D%EA%B7%80%EC%8B%A0-%EC%84%B8%EC%A2%85%EB%8C%80%ED%95%99%EA%B5%90-%EC%98%A8%EB%9D%BC%EC%9D%B8-%EC%B6%9C%EC%84%9D%EA%B4%80%EB%A6%AC/id1641685544)
[<img height=50px src=https://www.fcsok.org/wp-content/uploads/2020/04/get-it-on-google-play-badge.png>](https://play.google.com/store/apps/details?id=com.sejongattendancev1)


## Developers
<table>
<tr>
<td align="center"><a href="https://github.com/luciancah"><img src="https://avatars.githubusercontent.com/u/8311335?v=4" width="100px;" alt=""/><br /><sub><b>luciancah</b></sub></a></td>
<td align="center"><a href="https://github.com/miseongk"><img src="https://avatars.githubusercontent.com/u/39994337?v=4" width="100px;" alt=""/><br /><sub><b>miseongk</b></sub></a></td>
</tr>
</table>

## Environment & Libraries
- Develop Environment
```markdown
- react native v0.69
- react-native-cli v2.0
```
- Libraries
```markdown
- react-navigation 
- react-native-async-storage
- react-native-segmented-control
- react-native-config
- react-native-tableview-simple
- react-redux
- redux
- expo-file-system
- XLSX (sheetJS)

```
- Open-Source API
	- 세종대학교 구성원 인증 API [iml1111/sejong-univ-auth](https://github.com/iml1111/sejong-univ-auth)
- 이 프로젝트는 [출석하냥](https://github.com/sweethoneybee/attendance) 프로젝트에서 아이디어를 받아 만들었습니다. 👻

## Key Features
### 👻 출석 진도율 확인

모든 강의의 출석 정보를 수강 가능 주차/전체 학기로 기간을 나눠 조회할 수 있습니다. 모든 강의 중 빠르게 수강해야 하는 수업들을 한 눈에 볼 수 있습니다.
<p align="center"><img src="https://github.com/luciancah/sejong-attendance/blob/master/Docs/assets/1-1.png?raw=true" height="450px" margin_right="10px"> <img src="https://github.com/luciancah/sejong-attendance/blob/master/Docs/assets/1-2.png?raw=true" height="450px"> <img src="https://github.com/luciancah/sejong-attendance/blob/master/Docs/assets/1-3.png?raw=true" height="450px"></p>

### 👻 강의 등록하기
학수번호, 분반, 개설 단과대학, 학과를 입력하여 수강중인 강의의 데이터를 등록합니다.

<p align="center"><img src="https://github.com/luciancah/sejong-attendance/blob/master/Docs/assets/1-4.png?raw=true" height="450px" margin_right="10px"> <img src="https://github.com/luciancah/sejong-attendance/blob/master/Docs/assets/1-5.png?raw=true" height="450px"> <img src="https://github.com/luciancah/sejong-attendance/blob/master/Docs/assets/1-6.png?raw=true" height="450px"></p>

## Milestone
| 버전 |기간                           |    기능     |
| :----------------------------------- | :----------------------------------------------------------: | :-----------: |
| [1.0.0](https://github.com/luciancah/sejong-attendance/releases/tag/v1.0.0)                           | 2022.07 ~ 2022.08 |  MVP: 강의 목록 관리 / 강의별 진도율 모아보기 (기간 분리) / 급한 강의 모아보기 |
| [1.0.1](https://github.com/luciancah/sejong-attendance/releases/tag/v1.0.1)                           | 2022.08 | 버그 수정: refresh 없이 미수강 개수 바로 뜨지 않음 |
| 1.1.0 | 2022.09 | 기능 수정: 백엔드 서버에서 출석현황 처리 |
| 1.1.1 | 2022.10 | 할로윈 맞이 업데이트 & 10주차 이후 주차 표시 문제 수정 |
| 1.1.3 | 2023.03 | 2023학년도 1학기 대응(주차, 학과정보, API 경로) |
| 1.1.4 | 2023.03 | AOS 출시 |

  
## 귀신 변천사
<table>
<tr>
<td align="center"><img src="https://github.com/luciancah/sejong-attendance/blob/master/Docs/assets/ghosts/v1.png?raw=true" width="100px;" alt=""/><br /><sub><b>v1</b></sub></a></td>
<td align="center"><img src="https://github.com/luciancah/sejong-attendance/blob/master/Docs/assets/ghosts/v2.png?raw=true" width="100px;" alt=""/><br /><sub><b>halloween</b></sub></a></td>
<td align="center"><img src="https://github.com/luciancah/sejong-attendance/blob/master/Docs/assets/ghosts/v3.png?raw=true" width="100px;" alt=""/><br /><sub><b>christmas</b></sub></a></td>
</tr>
</table>
  

## Run Locally

Clone the project

```bash
git clone https://github.com/luciancah/sejong-attendance
cd sejong-attendance
```
Install dependencies
```bash
yarn
cd ios && pod install
//if using ARM Macs, cd ios && arch -x86_64 pod install
```
Start the server
```bash
yarn react-native run-ios

```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```
LOGIN_API_URL=https://auth.imsejong.com/auth
LOGIN_METHOD=PortalSSOToken
STUDENT_ID_KEY=whateveryouwant
COURSES_KEY=whateveryouwant
```
## Thanks to
[jeongbinboo🎾](https://github.com/jeongbinboo)
