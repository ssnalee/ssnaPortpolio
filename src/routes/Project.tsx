import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaLongArrowAltRight,FaLongArrowAltLeft } from "react-icons/fa";
import Modal from "../component/Modal";
import { projectList } from "../common/projectList";
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
  /* transform: translateX(${(props)=>props.slide}px);
  transition: 0.3s all linear; */
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

function Project(){
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
        {projectList.map((list,idx)=>(
          <>
            <ProList 
              slide={slidePx} 
              key={list.id} 
              layoutId={list.id}
              bgImg={process.env.PUBLIC_URL+'/img/site/'+ list.img} 
              onClick={e=>openPopup(e,idx)}
          
              animate={{x :slidePx}}
              transition={{
                duration: 0.7,
                ease: [0, 0.2, 0.2, 0.2]
              }}
              // whileHover={{scale:1.2, zIndex:5}}
          >

              <ProListTitle>{list.name}</ProListTitle>
            </ProList>
          </>           
        ))}
          {isClicked && 
            <AnimatePresence>
              <Modal 
                list = {projectList[countIndex]}
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