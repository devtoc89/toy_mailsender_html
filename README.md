# forduellee_html

이 프로젝트는 간단한 웹 애플리케이션으로, 사용자가 양식을 작성하고 제출할 수 있는 기능을 제공합니다.

## 프로젝트 구조

- `src/`: 소스 코드 디렉토리
  - `index.html`: 메인 HTML 파일
  - `css/base.css`: 기본 스타일시트
  - `js/main.js`: 메인 JavaScript 파일
- `scripts/`: 배포 관련 스크립트
  - `deploy.sh`: 배포 스크립트
  - `remove.sh`: 제거 스크립트
- `.github/workflows/`: GitHub Actions 워크플로우
  - `deploy.yml`: AWS EC2 배포 워크플로우
- `appspec.yml`: AWS CodeDeploy 설정 파일

## 주요 기능

1. 사용자 입력 양식
   - 이름 입력
   - 캠프 선택 (청년1 또는 청년2)
   - 내용 요약 입력

2. 양식 제출
   - 'main.js'에서 양식 데이터를 처리하고 API로 전송

3. 반응형 디자인
   - 'base.css'를 사용하여 모바일 친화적인 레이아웃 구현

## 배포

이 프로젝트는 GitHub Actions와 AWS CodeDeploy를 사용하여 자동으로 AWS EC2 인스턴스에 배포됩니다.

1. GitHub의 main 브랜치에 푸시하면 배포 프로세스가 시작됩니다.
2. 코드는 S3 버킷에 업로드됩니다.
3. AWS CodeDeploy를 사용하여 EC2 인스턴스에 애플리케이션을 배포합니다.
4. 배포 스크립트는 Nginx 웹 서버의 루트 디렉토리에 파일을 복사합니다.

## 개발 환경 설정

1. 저장소를 클론합니다:
   ```
   git clone https://github.com/devtoc89/fordeullee_html
   ```

2. 프로젝트 디렉토리로 이동합니다:
   ```
   cd fordeullee_html
   ```

3. Nginx 웹 서버를 설치합니다.
  - Nginx의 html 폴더에 src 폴더를 복사합니다.