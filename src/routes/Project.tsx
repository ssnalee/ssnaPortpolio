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
  animation: 0.7s ease-in-out ${fadeIn};
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  .container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
  }
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
  @media screen and (max-width:768px){
    .custom-nav {
      font-size: 35px;
    }
    .prev{
      left: -10px;
    }
    .next {
      right: -10px;
    }
  }
`;

const ProList = styled(motion.div)`
  margin: 15px;
  position: relative;
  cursor: pointer;
  width: 100%;
  img{
    width: 100%;
    aspect-ratio: 2/1.2;
    box-shadow: ${(props) => `0px 8px 6px -6px ` + props.theme.shadow};
  }
`;

const ProListTitle = styled.h4`
  color: ${(props)=>props.theme.textColor};
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
      <div className="container">
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
          spaceBetween={50}
          slidesPerView={3}
          slidesPerGroup={3}
          initialSlide={projectList.length - 1}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
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
      </div>

    </ProjectWrap>
  );
}

export default Project;
