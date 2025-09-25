import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import Modal from "../component/Modal";
import { projectList } from "../common/projectList";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
const ProjectWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  animation: 0.7s ease-in-out ${fadeIn};
  position: relative;
  min-width: 1200px;
  width: 90%;
  margin: 0 auto;
  .custom-nav {
    position: absolute;
    top: 42%; 
    z-index: 10;
    cursor: pointer;
    font-size: 55px;
    transition: color 0.3s;

    &:hover {
      scale: 1.2;
    }
    & path {
      stroke: #000;
      fill: #fff;
      stroke-width: 5%;
    }
  }

  .prev {
    left: -20px;
  }
  .next {
    right: -20px;
  }
`;

const ProList = styled(motion.div)`
  margin: 15px;
  position: relative;
  cursor: pointer;
  img{
    width: 100%;
    aspect-ratio: 2/1.2;
    box-shadow: ${(props) => `0px 8px 6px -6px ` + props.theme.shadow};
  }
`;

const ProListTitle = styled.h4`
  font-family: "Nanum Pen Script", cursive;
  font-weight: 400;
  font-size: 32px;
  width: 100%;
  text-align: center;
`;

function Project() {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [isClicked, setIsClicked] = useState(false);
  const [countIndex, setCountIndex] = useState(0);

  const openPopup = (idx: number) => {
    setCountIndex(idx);
    setIsClicked(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setIsClicked(false);
    document.body.style.overflow = "unset";
  };

  return (
    <ProjectWrap>
      <FaLongArrowAltLeft
        className="custom-nav prev"
        onClick={() => swiperRef?.slidePrev()}
        style={{
          opacity: isBeginning ? 0.3 : 1,
          pointerEvents: isBeginning ? "none" : "auto",
        }}
      />
      <FaLongArrowAltRight
        className="custom-nav next"
        onClick={() => swiperRef?.slideNext()}
        style={{
          opacity: isEnd ? 0.3 : 1,
          pointerEvents: isEnd ? "none" : "auto",
        }}
      />
      <Swiper
        onSwiper={setSwiperRef}
        onSlideChange={(swiper: SwiperType) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        modules={[]}
        spaceBetween={30}
        slidesPerView={3}
        slidesPerGroup={3}
        initialSlide={projectList.length - 1}
      >
        {projectList.map((list, idx) => (
          <SwiperSlide key={list.id}>
            <ProList
              onClick={() => openPopup(idx)}
              layoutId={`project-${list.id}`}
            >
              <img src={`${process.env.PUBLIC_URL}/img/site/${list.img}`} />
              <ProListTitle>{list.name}</ProListTitle>
              <ProListTitle>({list.year})</ProListTitle>
            </ProList>
          </SwiperSlide>
        ))}
      </Swiper>
      <AnimatePresence>
        {isClicked && (
          <Modal list={projectList[countIndex]} closePopup={closePopup} />
        )}
      </AnimatePresence>
    </ProjectWrap>
  );
}

export default Project;
