import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaLongArrowAltRight,FaLongArrowAltLeft } from "react-icons/fa";
import Modal from "../component/Modal";
const fadeIn = keyframes`
  0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
`;
const ProjectWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  animation: 0.7s ease-in-out ${fadeIn};
  position: relative;
  overflow: hidden;
  min-width:1200px;
  width: 90%;
  margin: 0 auto;
`;
const ProLists = styled.div`
  /* width: 1000%; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  
`;
const ProList = styled(motion.div)<{bgImg :string; slide : number;}>`
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center;
  width: ${(props)=>props.bgImg.slice(-7) == 'kim.jpg' ? '300px' : '600px'};
  height: ${(props)=>props.bgImg.slice(-7) == 'kim.jpg' ? '600px' : '350px'};
  margin: 15px;
  position: relative;
  transform: translateX(${(props)=>props.slide}px);
  transition: 0.5s all ease-in;
  box-shadow: ${(props)=>`0px 8px 6px -6px `+props.theme.shadow};
`;
const ProListTitle = styled.h4`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -40px;
  font-family: "Nanum Pen Script", cursive;
  font-weight: 400;
  font-size: 32px;
  width: 100%;
  text-align: center;

`;
const ArrowBtn = styled.button<{slide:number;}>`
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  background-color: transparent;
  border:none;
  &.right_btn{
    right:0;
    display : ${(props)=> props.slide == -1200 ? "none" : "" };
  }
  &.left_btn{
    left:0;
    display : ${(props)=> props.slide == 1200 ? "none" : "" };

  }
`;
export interface IListProps{
  id : string;
  name : string;
  state? : boolean;
  overview : string;
  skills : string;
  people : number;
  adress : string;
  img : string;
}
function Project(){
  const lists : Array<IListProps> = [
    {
        id : "project01",
        name : "카페 사이트 만들기",
        overview : "처음으로 제작한 웹사이트이며, mediaQuery를 이용한 반응형 웹사이트입니다. </br> 제이쿼리 슬라이드를 사용하지않고, 슬라이드 자체개발하였고, 네이버지도API를 사용하였습니다.",
        skills : "html, css, javascript,jquery",
        people : 1,
        adress : "http://ssna.kr/fad/index.html",
        img : "fad.PNG",
    },{
        id : "project02",
        name : "화장품 웹사이트 리뉴얼",
        overview : "mediaQuery를 이용한 반응형 웹사이트이고, 마우스 이벤트 등 다양한 이벤트처리에 대해 공부하며 제작했던 사이트입니다. 퍼블리싱 위주로 했던 작업물입니다.",
        skills : "html, css, javascript",
        people : 1,
        adress : "http://ssna.kr/acmer/index.html",
        img : "ac.PNG",
    },{
        id : "project03",
        name : "chrome 초기화면",
        overview : "현재 시간을 확인할 수 있으며, 날씨API를 이용해 날씨를 받아오고, localStorage를 이용해 todoList를 관리할 수 있는 싱글페이지입니다. 현재 사이트에서 날씨가 나오지않는 이유는 https의 환경이 아니여서 추후에 인증서를 발급받을 예정입니다. 현재 api는 로컬에서만 작동합니다.",
        skills : "html, css, javascript",
        people : 1,
        adress : "http://ssna.kr/moment/index.html",
        img : "mo.PNG",
    },{
        id : "project04",
        name : "김프로굿샷 APP",
        overview : "회사 프로젝트로써 처음부터 참여하며 java spring 기반 webview로 jquery위주로 작업했으며, 우리나라 전체의 골프장리스트들을 한눈에 확인할 수 있으며, 해당 날짜의 잔여티 여부와, 알리미서비스 등 프론트엔드로 기획자, 웹디자이너, 백엔드 개발자와 함께 작업하였습니다.",
        skills : "html, css, javascript, jquery",
        people : 4,
        adress : "https://www.kimgoodshot.com/index.ks",
        img : "kim.jpg",
    },{
        id : "project05",
        name : "넷플릭스 클론페이지",
        overview : "넷플릭스 페이지를 따라함으로써 공부한 리액트의 기능을 직접 사용할 수 있는 계기가 되었고, TMDB의 API를 가져와서 다양한 타이틀의 영화들, 영화의 기본정보들과, 검색기능을 구현했습니다.",
        skills : "typescript, react, styled-component, react-query",
        people : 1,
        adress : "https://ssnalee.github.io/clone_netflix/",
        img : "ne.PNG",
    },
    {
        id : "project06",
        name : "호텔사이트 리뉴얼",
        state : false,
        overview : "현재 진행중이며 리뷰 작성 및 삭제, 로그인, 로그아웃을 로컬스토리지로 구현 후, sql로 데이터를 관리할 수 있도록 개발할 예정입니다.",
        skills : "typescript, react, styled-component",
        people : 1,
        adress : "https://ssnalee.github.io/renual_meriott/",
        img : "re.PNG",
    }
  ];
  const [slidePx, setSlidePx] = useState(0);
  const toPrev = () => {
    slidePx > -1200 && setSlidePx(slidePx - 600);
  };
  const toNext = () => {
    slidePx < 1200 && setSlidePx(slidePx + 600);
  };
  const [isClicked, setIsClicked] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [countIndex, setCountIndex] = useState(0);
  const openPopup = (e: any,idx : number) => {
    setCountIndex(idx);
    setIsClicked(true);
    document.body.style.overflow = "hidden";
  };
  const closePopup = () => {
    setIsClicked(false);
    document.body.style.overflow = "unset";
}

  useEffect(()=>{
    // console.log(isClicked);
    // console.log(countIndex);
  },[isClicked,countIndex]);
  

  return(
    <ProjectWrap>
      <ProLists>
        {lists.map((list,idx)=>(
          <>
            <ProList 
              slide={slidePx} 
              key={list.id} 
              layoutId={list.id}
              bgImg={process.env.PUBLIC_URL+'/img/site/'+ list.img} 
              onClick={e=>openPopup(e,idx)}
              animate={{x :slidePx}}
              // whileHover={{scale:1.2, zIndex:5}}
          >

              <ProListTitle>{list.name}</ProListTitle>
            </ProList>
          </>           
        ))}
          {isClicked && 
            <AnimatePresence>
              <Modal 
                list = {lists[countIndex]}
                closePopup = {closePopup}
                 />
            </AnimatePresence>}
      </ProLists>
      <ArrowBtn
        slide={slidePx}
        className="left_btn"
        onClick={toNext}>
        <FaLongArrowAltLeft size="55px" stroke="#000" fill="#fff" strokeWidth="5%"/>
      </ArrowBtn>
      <ArrowBtn 
        slide={slidePx}
        className="right_btn"
        onClick={toPrev}>
        <FaLongArrowAltRight size="55px" stroke="#000" color="#fff" strokeWidth="5%"/>
      </ArrowBtn>


    </ProjectWrap>
  );
}

export default Project;