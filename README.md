# Dentiplanner Frontend

Dentiplanner의 프론트엔드 애플리케이션은 React와 TailwindCSS를 기반으로 구축되었으며, 모노레포 구조를 활용하여 효율적인 개발 환경을 제공합니다.

## 프로젝트 구조

```
front/
├── apps/                  # 애플리케이션 디렉토리
│   └── lab/               # Lab 애플리케이션
├── packages/              # 공용 패키지 디렉토리
│   ├── eslint-config/     # ESLint 설정 패키지
│   ├── tailwind-config/   # TailwindCSS 설정 패키지
│   ├── typescript-config/ # TypeScript 설정 패키지
│   └── ui/                # UI 컴포넌트 라이브러리
├── .eslintrc.js           # 루트 ESLint 설정
├── package.json           # 프로젝트 메타데이터 및 스크립트
├── pnpm-workspace.yaml    # pnpm 워크스페이스 설정
├── turbo.json             # Turborepo 설정
└── README.md              # 프로젝트 설명 파일
```

## 주요 기술 스택

- **React**: 사용자 인터페이스를 구축하기 위한 라이브러리
- **TailwindCSS**: 유틸리티 기반 CSS 프레임워크
- **TypeScript**: 정적 타입을 지원하는 JavaScript
- **pnpm**: 빠르고 효율적인 패키지 매니저
- **Turborepo**: 모노레포 관리 도구

## 설치 및 실행

### 1. 의존성 설치

프로젝트 루트에서 다음 명령어를 실행하세요:

```bash
pnpm install
```

### 2. 개발 서버 실행

애플리케이션의 개발 서버를 실행하려면:

`build:clinic` clinic dev 실행

`build:lab` lab dev 실행

### 3. 빌드

전체 프로젝트를 빌드하려면:

```bash
pnpm build
```

### 4. 테스트

테스트를 실행하려면:

```bash
pnpm test
```

## 디렉토리 설명

### `apps/`

- **lab**: Dentiplanner의 주요 애플리케이션 디렉토리입니다. React와 TailwindCSS를 사용하여 개발되었습니다.

### `packages/`

- **eslint-config**: 공용 ESLint 설정을 제공합니다.
- **tailwind-config**: TailwindCSS 설정을 공용으로 관리합니다.
- **typescript-config**: TypeScript 설정을 공용으로 관리합니다.
- **ui**: 재사용 가능한 UI 컴포넌트 라이브러리입니다. 새로운 UI를 추가한 경우, 반드시 `pnpm build` 명령어를 실행하여 UI 패키지를 빌드한 후 사용해야 합니다.

## 기여 방법

1. 이 저장소를 포크합니다.
2. 새로운 브랜치를 생성합니다: `git checkout -b feature/새로운-기능`
3. 변경 사항을 커밋합니다: `git commit -m "새로운 기능 추가"`
4. 브랜치를 푸시합니다: `git push origin feature/새로운-기능`
5. Pull Request를 생성합니다.

## 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE) 하에 배포됩니다.
