  

# 출석귀신 - 세종대학교 온라인 출석확인 어플리케이션

![App Screenshot](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6d3d1e70-7811-474d-908f-77b1985ca602/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220829T184541Z&X-Amz-Expires=86400&X-Amz-Signature=dee284b7e885887b45702856aada44da4645f719ea6ff5b5b0499c9ceaee84c7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

세종대학교 블랙보드 ```blackboard.sejong.ac.kr``` 상의 온라인 강의 출석 진도율을 한 번에 모아볼 수 있는 서비스 입니다.
<br>
강의 전체 진도율, 강의 별 상세 정보 확인, 모든 수업 중 급한 강의 정보를 모아볼 수 있는 서비스를 제공합니다.
>프로젝트 기간: 2022.07 ~ 2022.08

>프로젝트 릴리즈: 2022.08.27(App Store)

[<img width=150px src=https://user-images.githubusercontent.com/42789819/115149387-d42e1980-a09e-11eb-88e3-94ca9b5b604b.png>](https://apps.apple.com/kr/app/%EC%B6%9C%EC%84%9D%EA%B7%80%EC%8B%A0-%EC%84%B8%EC%A2%85%EB%8C%80%ED%95%99%EA%B5%90-%EC%98%A8%EB%9D%BC%EC%9D%B8-%EC%B6%9C%EC%84%9D%EA%B4%80%EB%A6%AC/id1641685544)

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
- axios

```
- Open-Source API
	- 세종대학교 구성원 인증 API [iml1111/sejong-univ-auth](https://github.com/iml1111/sejong-univ-auth)
- 이 프로젝트는 [출석하냥](https://github.com/sweethoneybee/attendance) 프로젝트에서 아이디어를 받아 만들었습니다. 👻

## Key Features
### 👻 출석 진도율 확인

모든 강의의 출석 정보를 수강 가능 주차/전체 학기로 기간을 나눠 조회할 수 있습니다. 모든 강의 중 빠르게 수강해야 하는 수업들을 한 눈에 볼 수 있습니다.
<p align="center"><img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/712ca17f-3f65-4103-b752-44c5135a1b67/KakaoTalk_Photo_2022-08-30-03-12-04_001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220829T181600Z&X-Amz-Expires=86400&X-Amz-Signature=94665f6016561971e56f84d74bbc4c914eaedc6999dae924906650f9c6c37bda&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22KakaoTalk_Photo_2022-08-30-03-12-04%2520001.png%22&x-id=GetObject" height="450px" margin_right="10px"> <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/27a14935-b3bb-4280-b74a-4269e03697f9/KakaoTalk_Photo_2022-08-30-03-12-05_002.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220829T181615Z&X-Amz-Expires=86400&X-Amz-Signature=dc49c2d26a582a7020a3e04e7078117964e6b0f538bea5400808c87e2b203bc0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22KakaoTalk_Photo_2022-08-30-03-12-05%2520002.png%22&x-id=GetObject" height="450px"> <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f0ae5e4c-73fd-4788-aa45-710d34f08077/KakaoTalk_Photo_2022-08-30-03-12-05_003.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220829T181633Z&X-Amz-Expires=86400&X-Amz-Signature=b38ff023a54e553cf4a6045acfae59708aba1c0513c789d827871a622b27a34d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22KakaoTalk_Photo_2022-08-30-03-12-05%2520003.png%22&x-id=GetObject" height="450px"></p>

### 👻 강의 등록하기
학수번호, 분반, 개설 단과대학, 학과를 입력하여 수강중인 강의의 데이터를 등록합니다.

<p align="center"><img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ed499ca7-e8b2-434c-ab99-28b9e0332fa3/KakaoTalk_Photo_2022-08-30-03-12-05_004.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220829T181705Z&X-Amz-Expires=86400&X-Amz-Signature=1cec2699d565a3506569a3b897582496d0fb302add1e39219e2b17405a9b6b28&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22KakaoTalk_Photo_2022-08-30-03-12-05%2520004.png%22&x-id=GetObject" height="450px" margin_right="10px"> <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5dc54bfd-58ff-4e3a-8be7-a9d6f43abacf/KakaoTalk_Photo_2022-08-30-03-12-05_005.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220829T181717Z&X-Amz-Expires=86400&X-Amz-Signature=3ef41a1e96952341750d94899d0e4076feddb54ab91fb5baa0342771e47edf7a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22KakaoTalk_Photo_2022-08-30-03-12-05%2520005.png%22&x-id=GetObject" height="450px"> <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c06030e8-85a5-43a1-8ef2-e22bfea919d3/KakaoTalk_Photo_2022-08-30-03-12-05_006.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220829T181727Z&X-Amz-Expires=86400&X-Amz-Signature=ed1360cb91ac6b18ec80d3ded2e1ad33f0b855a87826b0f54e96d0f63fbe3f8b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22KakaoTalk_Photo_2022-08-30-03-12-05%2520006.png%22&x-id=GetObject" height="450px"></p>

## Milestone
| 버전 |기간                           |    기능     |
| :----------------------------------- | :----------------------------------------------------------: | :-----------: |
| [1.0.0](https://github.com/luciancah/sejong-attendance/releases/tag/v1.0.0)                           | 2022.07 ~ 2022.08 |  MVP : 강의 목록 관리 / 강의별 진도율 모아보기 (기간 분리) / 급한 강의 모아보기 |

  


  

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
