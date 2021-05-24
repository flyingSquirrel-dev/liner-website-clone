## 프로젝트 설명
- node v12.18.0을 기준으로 작업한 프로젝트입니다.
- getliner.com 홈페이지를 클론하는 프로젝트입니다.
---

## 로컬호스트 실행 방법
```shell
npm install
npm run start
```
- node 모듈 설치 후 [localhost:3000](http://localhost:3000) 으로 접속합니다.
- 최신 main 브랜치 기준으로 [http://liner-website-clone.vercel.app/](http://liner-website-clone.vercel.app/) 사이트에서도 프로젝트를 확인할 수 있습니다.
---

### 프로젝트 기술스택과 설명
- 기술스택: `Create-React-App`, `TypeScript`, `Styled-component`, `React-router-dom`, `React-lottie`
- 필요한 이미지 리소스와 lottie 애니메이션을 위한 JSON은 편의상 로컬에 파일형태로 저장하여 사용했습니다.
- 최대한 아토믹 디자인을 따르며, 재사용성을 높이기 위해 노력했습니다.
  - `src/components` 폴더에 리액트 컴포넌트를 제작하였습니다.
  - 조금 더 복잡성 있는 컨테이너 컴포넌트를 만들 때는 `src/containers`에서 컴포넌트를 조합하여 사용했습니다.
- `src/components` 와 `src/containers`에서 만든 컴포넌트를 이용하여 `src/pages`에서 라우팅에 맞는 페이지를 구성하였습니다.
- getliner.com에서는 CSS를 SCSS를 활용한 것으로 예상되는데, React의 상태관리에 따라 스타일을 하기에는 `Styled-component`가 더 적합할 것으로 생각되어 CSS in JS로 스타일링을 하였습니다.
  - 반복되는 컬러코드 등을 유지보수 용이성과 통일성을 위해 `src/styled/theme.ts`를 정의하여 활용했습니다.
- 모달을 실행하는 로직은 `src/utils/portal.ts`의 유틸함수를 활용하여 React Portal을 이용해 모달을 띄우는 상태관리를 하였습니다.
