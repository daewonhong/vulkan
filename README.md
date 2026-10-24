# 불칸모터스 미래사업본부 특장사업부 홈페이지

첨부된 특장차 설계도·드론 스테이션 렌더링·출장정비 인포그래픽을 활용한 **실행 가능한 정적 기업 홈페이지**입니다.

## 포함 기능
- PC·태블릿·모바일 반응형
- 4대 사업 솔루션 카드 (현재 사업 상태 라벨 포함)
- 원본 이미지 기반 특장차 갤러리, 필터, 확대 보기
- 앵커 이동, 모바일 메뉴, 맨 위로 이동, 웹 접근성 보완
- 외부 패키지 없이 실행 가능, GitHub Pages 게시 가능
- `content.js` 파일에서 사업 카드와 갤러리 콘텐츠 수정 가능

## 폴더 구조
```
index.html        전체 화면과 텍스트
styles.css        디자인과 반응형 설정
app.js            메뉴, 갤러리, 팝업 동작
content.js        사업 카드·갤러리 데이터
assets/           제공 원본 차량 이미지(용량 약 5MB)
docs/             홈페이지 운영 지침
.nojekyll         GitHub Pages 정적 파일 처리
```

## 1. 내 컴퓨터에서 미리보기
방법 A: `index.html`을 브라우저에서 엽니다.
방법 B: Python이 설치되어 있다면 저장소 폴더에서 아래 명령을 실행합니다.
```bash
python -m http.server 8000
```
브라우저에서 http://localhost:8000 로 이동합니다.

## 2. GitHub 저장소에 업로드
1. https://github.com/new 에서 새 저장소 생성 (예: `vulcan-motors-website`).
2. 저장소를 **Public**으로 설정해야 무료 GitHub Pages로 쉽게 공개할 수 있습니다. 코드/이미지를 공개해도 되는지 사전 승인받으세요.
3. GitHub의 **Add file → Upload files**에서 이 ZIP을 압축 해제한 **폴더 내부 파일 전체**를 저장소 루트에 업로드합니다. (`index.html`이 저장소 최상위에 있어야 합니다.)
4. **Commit changes**를 누릅니다.
5. **Settings → Pages → Build and deployment**에서 **Deploy from a branch**, **main**, **/(root)**를 선택 후 저장합니다.
6. 배포 완료 후 `https://사용자명.github.io/vulcan-motors-website/`로 접속합니다. (실제 주소는 저장소 이름에 따라 달라집니다.)
7. GitHub Pages 공개 전에 연락처, 회사 정보, 이미지 공개 권한과 사업 상태를 최종 검수합니다.

### 터미널 업로드 (선택)
```bash
git init
git add .
git commit -m "Initial Vulcan Motors website"
git branch -M main
git remote add origin https://github.com/사용자명/vulcan-motors-website.git
git push -u origin main
```
GitHub에서 저장소를 미리 만들어야 하며 인증 절차가 필요합니다.

## 3. 콘텐츠 수정
- **4대 사업 소개:** `content.js`의 `solutions` 배열
- **차량 이미지 갤러리:** `content.js`의 `gallery` 배열. 파일은 `assets/`에 업로드 후 경로 변경
- **브랜드 소개·메인 문구·담당부서:** `index.html`
- **색상·폰트·여백:** `styles.css` 상단 CSS 변수
- **사업 상태:** `concept`(구상), `planned`(추진계획), `developing`(개발 중), `available`(실제 제공 중)

## 4. Lovable과의 관계
이 저장소는 **GitHub Pages에서 바로 작동하는 독립 정적 웹사이트**입니다. Lovable 프로젝트 내부에서 생성된 코드가 아니므로 **GitHub에 업로드했다고 Lovable이 자동으로 가져오거나 양방향 동기화되는 것은 아닙니다.** Lovable의 GitHub 연동은 일반적으로 **Lovable에서 생성한 프로젝트를 GitHub에 연결**하는 흐름입니다. Lovable에서 계속 개발하려면 이 사이트를 참조 자료로 제공해 재구성하거나, Lovable에서 새 프로젝트를 만들고 자체 GitHub 연결을 구성하세요.

## 5. 공개 전 반드시 확인
- 사업 상태, 실제 제작·납품 실적, 공식 회사 정보와 연락처
- 24시간 서비스·45분 수리·가격·보증·보험 등 미확정 약속을 게시하지 않을 것
- 원본 이미지의 대외 공개 허용 여부
- 회사 상표·기타 사업자료 사용 승인
- 온라인 문의 기능은 아직 없음 (의도적으로 미활성화)
- 데이터베이스·회원가입·실시간 관제 기능은 포함되지 않음

## 라이선스 및 권리
업로드된 설계도와 렌더링은 제공 자료를 기반으로 포함되었습니다. 원저작권 및 대외 공개 권한은 제공자/권리자의 승인을 확인해야 합니다. 본 패키지는 별도 오픈소스 라이선스를 자동으로 부여하지 않습니다.
