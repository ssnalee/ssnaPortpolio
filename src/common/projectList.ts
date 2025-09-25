export interface ISkill {
    key: string;
    label: string;
}

export interface IListProps {
    id: string;
    name: string;
    state?: boolean;
    overview: string;
    skills: ISkill[];
    people: number;
    adress: string;
    adress2?: string;
    img: string;
    year: string;
    images: string[];
}
export const projectList: Array<IListProps> = [
    {
        id: "project01",
        name: "반응형 카페 웹사이트 제작",
        overview: `
          📌 개요: 처음으로 제작한 퍼블리싱 중심 웹사이트 <br />
          ✨ 핵심 기능 <br />
          • MediaQuery를 활용한 반응형 웹사이트 구현 <br />
          • jQuery 슬라이드를 사용하지 않고 슬라이드 직접 개발 <br />
          • 네이버 지도 API 연동 <br />
          🛠 구현 과정 <br />
          • HTML, CSS, JavaScript 중심으로 UI/UX 구현 <br />
          • 퍼블리싱 위주로 화면 구성 및 스타일링 완료 <br />
          🚀 성장 포인트 <br />
          • 반응형 웹 구현 경험 <br />
          • JS로 커스텀 슬라이드 개발 경험 <br />
          • API 연동 경험 (네이버 지도) <br />
        `,
        skills: [
            { key: "html", label: "HTML" },
            { key: "css", label: "CSS" },
            { key: "js", label: "Javascript" },
            { key: "jquery", label: "jQuery" },
        ],
        people: 1,
        adress: "http://ssna.kr/fad/index.html",
        img: "fad.PNG",
        year: "2021",
        images: ['fad_pc.png', 'fad_ta.png', 'fad_mo.png'],
    }, {
        id: "project02",
        name: "반응형 화장품 웹사이트 리뉴얼",
        overview: `
          📌 개요: MediaQuery를 활용한 반응형 웹사이트 <br />
          ✨ 핵심 기능 <br />
          • 다양한 마우스 이벤트 및 인터랙션 구현 경험 <br />
          • 퍼블리싱 위주로 UI/UX 구성 <br />
          🛠 구현 과정<br />
          • HTML, CSS, JavaScript 중심으로 반응형 화면 구성 <br />
          • 이벤트 처리 로직 직접 구현하며 JS 활용 능력 향상 <br />
          🚀 성장 포인트 <br />
          • 반응형 웹 구현 경험 <br />
          • 다양한 이벤트 처리 경험을 통한 JS 실무 활용 능력 <br />
          • 퍼블리싱 역량 강화 <br />
        `,
        skills: [
            { key: "html", label: "HTML" },
            { key: "css", label: "CSS" },
            { key: "js", label: "Javascript" },
        ],
        people: 1,
        adress: "http://ssna.kr/acmer/index.html",
        img: "ac.PNG",
        year: "2022",
        images: ['ac_pc.png', 'ac_ta.png', 'ac_mo.png'],
    }, {
        id: "project03",
        name: "날씨 & ToDo 싱글 페이지",
        overview: `
          📌 개요: 싱글 페이지 웹 애플리케이션 <br />
          ✨ 핵심 기능<br />
          • 현재 시간 표시 <br />
          • 날씨 API 연동으로 실시간 날씨 정보 확인 <br />
          • LocalStorage를 활용한 ToDo List 관리 <br />
          🛠 구현 과정<br />
          • HTML, CSS, JavaScript를 사용하여 SPA 구조 구성 <br />
          • API 연동 및 로컬 환경에서 데이터 처리 구현 <br />
          • LocalStorage 활용으로 CRUD 기능 구현 <br />
          ⚠️ 이슈: HTTPS 환경이 아니어서 날씨 API가 현재 로컬에서만 작동 <br />
          🚀 성장 포인트 <br />
          • API 연동 및 비동기 처리 경험 <br />
          • LocalStorage 기반 상태 관리 경험 <br />
          • 싱글 페이지 애플리케이션 구조 이해 <br />
        `,
        skills: [
            { key: "html", label: "HTML" },
            { key: "css", label: "CSS" },
            { key: "js", label: "Javascript" },
        ],
        people: 1,
        adress: "http://ssna.kr/moment/index.html",
        img: "mo.PNG",
        year: "2022",
        images: ['mo_pc.png'],
    }, {
        id: "project04",
        name: "김프로굿샷 APP",
        overview: `
          📌 개요: 회사 프로젝트로 처음 참여한 프론트엔드 개발 경험 프로젝트 <br />
          ✨ 핵심 기능 <br />
          • Java Spring 기반 WebView 환경에서 jQuery 중심으로 프론트엔드 구현 <br />
          • 우리나라 전체 골프장 리스트 조회, 특정 날짜 잔여 티 여부 확인, 알리미 서비스 등 기능 구현 <br />
          🛠 구현 과정 <br />
          • 처음으로 HTML 내에서 데이터를 연동하며 동적인 UI 구현 경험 <br />
          • 기획자, 웹디자이너, 백엔드 개발자와 협업하며 화면/기능 구성 <br />
          ⚠️ 이슈<br />
          • 프론트엔드 경험 부족으로 HTML/JS 데이터 연동에 어려움 <br />
          • 앱 개발 특성상 안드로이드와 iOS 환경 차이로 인해 화면/동작이 달라 크로스 브라우징 문제 발생  <br />
          ✅ 해결<br />
          • jQuery와 DOM 조작을 활용해 HTML 내 데이터 연동 및 기능 구현 <br />
          • 사파리 등 각 환경에서 테스트하며 CSS/JS 조정으로 크로스 브라우징 문제 해결 <br />
          🚀 성장 포인트<br />
          • 처음으로 실무 프론트엔드 경험 <br />
          • HTML과 JS를 활용한 데이터 연동 경험 <br />
          • 회사 프로젝트를 통한 실무 협업 경험 이해 <br />
        `,
        skills: [
            { key: "html", label: "HTML" },
            { key: "css", label: "CSS" },
            { key: "js", label: "Javascript" },
            { key: "jquery", label: "jQuery" },
        ],
        people: 4,
        adress: "https://www.kimgoodshot.com/index.ks",
        img: "kimhome.jpg",
        year: "2023",
        images: ['kim.png', 'kim2.png', 'kim3.png', 'kim4.png'],
    }, {
        id: "project05",
        name: "넷플릭스 클론페이지",
        overview: `
          📌 개요: 넷플릭스 페이지를 클론하며, 공부한 React 기능을 직접 적용해본 개인 프로젝트 <br />
          ✨ 핵심 기능: TMDB API를 활용하여 다양한 영화 타이틀, 영화 기본 정보, 검색 기능 구현 <br />
          🛠 구현 과정 <br />
          • React 컴포넌트로 구조화 <br />
          • TMDB API 연동 및 비동기 데이터 처리 구현 <br />
          • 검색 기능 구현 및 사용자 입력 처리, 상태 관리 <br />
          ⚠️ 이슈: 비동기 데이터 처리 경험 부족 + React Hook 개념 부족 <br />
          ✅ 해결: React Query를 활용하여 상태 관리 문제 해결, React Hook 학습 및 구조 설계로 상태 관리 문제 해결 <br /> 
          🚀 성장 포인트 <br />
          • React의 컴포넌트 구조와 상태 관리 경험 <br />
          • API 연동 및 비동기 처리 경험 <br />
          • 클론 코딩을 통해 실무 감각과 UI/UX 이해도 향상`,
        skills: [
            { key: "ts", label: "TypeScript" },
            { key: "react", label: "React" },
            { key: "styled-component", label: "Styled-Component" },
            { key: "react-query", label: "React Query" },
        ],
        people: 1,
        adress: "https://react-practice-netflix.vercel.app/",
        img: "ne.PNG",
        year: "2023",
        images: ['ne_pc.png', 'ne_pc2.png'],
    },
    {
        id: "project06",
        name: "포트폴리오 페이지",
        overview: `
        📌 개요 <br />
        개인 포트폴리오 페이지가 필요하다고 생각하여 제작한 프로젝트입니다. <br />
        이전에 넷플릭스 클론 페이지를 만들면서 경험했던 React와 TypeScript를 이번 프로젝트에서 스스로 체화하고,  <br /> 
        2025년에 다시 수정하며 기능과 디자인을 보완한 페이지입니다. <br />
        🛠 구현 과정 <br />
        React와 TypeScript를 활용하여 컴포넌트 구조 설계 및 구현 <br />
        포트폴리오 페이지에 필요한 UI 요소 구성 및 스타일링 <br />
        프로젝트 목록, 모달 팝업 등 인터랙션 구현 <br />
        🚀 성장 포인트 <br />
        React와 TypeScript 기반 프로젝트 설계 및 구현 경험 <br />
        컴포넌트 단위 설계, 상태 관리, UI/UX 설계 능력 향상 <br />
        이전 프로젝트 경험을 바탕으로 스스로 학습하고 구조화하는 능력 강화
        `,
        skills: [
            { key: "ts", label: "TypeScript" },
            { key: "react", label: "React" },
            { key: "styled-component", label: "Styled-Component" },
        ],
        people: 1,
        adress: "https://ssna-portpolio.vercel.app/",
        img: "portpolio.jpg",
        year: "2024",
        images: ['portpolio_2.png', 'portpolio_1.png'],
    },
    {
        id: "project07",
        name: "호텔사이트 리뉴얼",
        // state: false,
        overview: `
        📌 개요 : 리액트를 배우고, 배운 기술을 직접 적용해보기 위해 만든 개인 프로젝트 <br />
        ✨ 핵심 기능 :로그인, 로그아웃, 리뷰 작성/삭제 등 핵심 기능 구현 <br />
        🛠 구현과정 <br />
        • 개인 프로젝트라 서버가 없었고, 로그인/리뷰 기능 구현을 위해 로컬스토리지 기반으로 먼저 기능 구현 <br />
        • 이후 실제 API 서버가 필요해 Node.js + Express + MongoDB로 간단한 백엔드 구현 <br /> 
        ⚠️ 이슈: TypeScript가 익숙하지 않아 컴포넌트 간 타입 에러 발생 <br />
        ✅ 해결: 각 컴포넌트에 명확한 인터페이스 지정 및 타입 정의로 문제 해결 <br />
        🚀 성장 포인트 <br />
        • 프론트엔드와 백엔드를 아우르는 풀스택 경험 <br />
        • TypeScript 적용 경험, API 설계 및 구현 경험 <br />
        • 기능 구현 과정에서 문제 해결 능력 향상
        `,
        skills: [
            { key: "ts", label: "TypeScript" },
            { key: "react", label: "React" },
            { key: "styled-component", label: "Styled-Component" },
            { key: "express", label: "Express" },
            { key: "mongodb", label: "MongoDB" },
        ],
        people: 1,
        adress: "https://merriot.vercel.app/",
        img: "re.PNG",
        year: "2024",
        images: ['re_pc.png', 're_ta.png', 're_mo.png'],
    },
    {
        id: "project08",
        name: "애견용품 쇼핑몰",
        // state: false,
        overview: `
          📌 개요: 백엔드 개발자와 협업하여 개발한 애견용품 쇼핑몰 프로젝트 (프론트엔드 담당) <br />
          ✨ 핵심 기능 <br />
          • 로그인/회원가입, 장바구니, 구매 내역, 내 정보 수정, 상품 확인 등 구매회원 기능 <br />
          • 상품 추가/삭제/수정 등 기업회원(판매자) 기능 <br />
          • 유저 정보 수정/삭제 등 관리자 기능 <br />
          • 관리자 페이지는 관리자 계정만 접근 가능 <br />
          • 로그인에 따라 판매자/구매자 라우트 구분 <br />
          • PC 전용, 반응형 미지원 <br />
          🛠 구현 과정  <br />
          • Vue + TypeScript를 처음 사용하며 프론트엔드 구조 설계 <br />
          • 백엔드와 역할 분담: 프론트엔드(사용자/관리자 페이지) / 백엔드(서버 API) <br />
          • Axios Interceptor 활용하여 에러 처리 및 에러 페이지 구현 <br />
          ⚠️ 이슈  <br />
          • 하나의 API 오류 발생 시 화면 전체가 렌더링되지 않는 문제 발생  <br />
          ✅ 해결<br />
          • Axios Interceptor로 API 에러 감지<br />
          • 에러 페이지로 라우팅하여 화면이 정상적으로 표시되도록 처리<br />
          🚀 성장 포인트<br />
          • Vue + TypeScript 실무 경험<br />
          • 에러 처리 및 사용자 경험을 고려한 안정적 프론트엔드 구현 경험<br />
          • 팀 협업 및 프론트/백엔드 역할 분담 경험
        `,
        skills: [
            { key: "ts", label: "TypeScript" },
            { key: "vue", label: "Vue" },
            { key: "vuex", label: "Vuex" },
        ],
        people: 2,
        adress: "https://typefront.vercel.app/",
        img: "cattus.jpg",
        year: "2025",
        images: ['cattus_1.png'],
    },
    {
        id: "project09",
        name: "오버워치 커뮤니티",
        // state: false,
        overview: `
        📌 개요: 평소 관심 있던 게임 오버워치 기반 커뮤니티 사이트 개발 (풀스택 프로젝트)<br />
        ✨ 핵심 기능  <br />
        • 외부 API 연동: 오버워치 유저 정보, 게임 캐릭터 정보<br />
        • 사용자 기능: 로그인, 회원가입, 배틀태그 관리, 게시글 등록/수정/삭제, 검색<br />
        • DB 설계: ERD 기반 MySQL → 배포용 PostgreSQL (Supabase)<br />
        • 프론트엔드: React.js, Vercel 배포<br />
        • 백엔드: Express.js API, Render 무료 배포<br />
        • Swagger 주석 작성으로 API 문서화 경험<br />
        • 비밀번호 등 민감 정보 해시 처리<br />
        🛠 구현 과정:<br />
        • DB 설계 및 SQL 쿼리 작성 <br />
        • React + JavaScript로 프론트엔드 개발, 라이브러리 활용<br />
        • 처음 해보는 풀스택 프로젝트로 백엔드와 프론트엔드 전체 흐름 경험<br />
        ⚠️ 이슈: DB 쿼리 작성이 처음이라 복잡한 SELECT문에서 어려움<br />
        ✅ 해결<br />
        • Swagger 주석 작성으로 API 명세 명확화<br />
        • 쿼리 작성 문제는 검색과 실습으로 해결<br />
        🚀 성장 포인트<br />
        • DB 설계와 SQL 쿼리 작성 경험<br />
        • 풀스택 개발 경험, 프론트/백엔드 연결 구조 이해<br />
        • API 문서화 경험<br />
        • 보안 고려 (비밀번호 해시 처리) 및 실무 프로젝트 경험<br />
        `,
        skills: [
            { key: "react", label: "React" },
            { key: "redux", label: "Redux" },
            { key: "styled-component", label: "Styled-Component" },
            { key: "express", label: "Express" },
            { key: "postgredb", label: "postgreDB" },
        ],
        people: 1,
        adress: "https://onwar-frontend.vercel.app",
        adress2: "https://onwar-backend.onrender.com/docs/",
        img: "onwar.jpg",
        year: "2025",
        images: ['onwar_2.png', 'onwar_3.png'],
    }
];