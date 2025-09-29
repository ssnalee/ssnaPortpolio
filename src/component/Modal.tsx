import styled from "styled-components";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { PiArrowBendDownLeftFill } from "react-icons/pi";
import { IListProps } from "../common/projectList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  opacity: 0;
  z-index: 99;
`;

const ModalBox = styled(motion.div)`
  position: fixed;
  top: 18%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 900px;
  height: 600px;
  overflow: auto;
  border-radius: 20px;
  background-color: ${(props)=>props.theme.white.lighter};
  color: #000;
  z-index: 1000;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width:1000px){
    width: 95%;
  } 
`;

const ModalCover = styled.div`
  position: fixed;
  width: 900px;

  .closeModal {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: #797979;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #181818;
      scale: 1.3;
    }
  }
  @media screen and (max-width:1000px){
    width: 95%;
    .closeModal{
      top: 10px;
    }
  }
`;

const ModalCtnt = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width:1000px){
    padding: 15px;
    padding-top: 40px;
  }
`;

const ModalLeft = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;

  img {
    height: 300px;
    border-radius: 10px;
  }
  .swiper-pagination-bullet {
    width: 10px;  
    height: 10px;    
    background: #999999; 
    opacity: 1;  
    margin: 0 6px;   
  }
  .swiper-pagination-bullet-active {
    background: #00adf1; 
   transform: scale(1.3); 
  }
`;

const ModalRight = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 17px;
  line-height: 27px;
  width: 100%;
`;

const ProjectTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
`;

const NotFinished = styled.span`
  display: inline-block;
  background-color: ${(props) => props.theme.red};
  padding: 5px;
  color: #fff;
  border-radius: 30px;
  font-size: 15px;
  margin-left: 10px;
`;

const ProjectP = styled.p`
  line-height: 2rem;
  margin-bottom: 10px;

  span {
    cursor: pointer;
    border-bottom: 1px solid #000000;
  }

  .adress {
    cursor: auto;
    border: none;
    vertical-align: top;
    font-size: 15px;
    margin: 8px;
    color: #ff7575;
  }

  &.skill-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .skill-area {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    img{
      height: 40px;
    }
    p {
      font-size: 0.8rem;
      line-height: 1.3rem;
      background-color: #29292977;
      color: #fff;
      padding: 0 5px;
      border-radius: 30px;
    }
  }
`;

interface IProps {
  closePopup: () => void;
  list: IListProps;
}

function Modal({ list, closePopup }: IProps) {
  const IMG_URL = process.env.PUBLIC_URL + "/img/site/";
  const SKILL_IMG_URL = process.env.PUBLIC_URL + "/img/skills/";

  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 1000);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Overlay
      onClick={closePopup}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ModalBox
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 1 }}
        exit={{ scale: 0 }}
        layoutId={`project-${list.id}`}
      >
        <ModalCover>
          <AiOutlineClose
            onClick={closePopup}
            className="closeModal"
            size={"30px"}
          />
        </ModalCover>
        <ModalCtnt>
          {/* 이미지 영역 */}
          <ModalLeft>
            {isMobileView ? (
              <div style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                  style={{ paddingBottom: "30px" }}
                >
                  {list.images?.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={IMG_URL + img}
                        alt={`${list.name}-${idx}`}
                        style={{ height: "280px", display: "block", margin : "0 auto"}}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

            ) : (
              list.images?.map((img, idx) => (
                <img key={idx} src={IMG_URL + img} alt={`${list.name}-${idx}`} />
              ))
            )}
          </ModalLeft>

          {/* 텍스트 영역 */}
          <ModalRight>
            <ProjectTitle>
              {list.name}
              {list.state && <NotFinished>작업 중</NotFinished>}
            </ProjectTitle>

            <ProjectP>작업인원 : {list.people} 명</ProjectP>

            <ProjectP className="skill-container">
              스킬 :{" "}
              {list.skills.map((item, idx) => (
                <div className="skill-area" key={idx}>
                  <img src={`${SKILL_IMG_URL}${item.key}.png`} />
                  <p>{item.label}</p>
                </div>
              ))}
            </ProjectP>

            <ProjectP>
              주소 :
              <span onClick={() => window.open(list.adress)}>
                {list.adress}
              </span>
              <span className="adress">
                <PiArrowBendDownLeftFill /> 클릭 시 사이트 이동
              </span>
            </ProjectP>

            {list.adress2 && (
              <ProjectP>
                API 문서 :
                <span onClick={() => window.open(list.adress2)}>
                  {list.adress2}
                </span>
                <span className="adress">
                  <PiArrowBendDownLeftFill /> 클릭 시 사이트 이동
                </span>
              </ProjectP>
            )}

            <ProjectP
              dangerouslySetInnerHTML={{ __html: list.overview }}
            ></ProjectP>
          </ModalRight>
        </ModalCtnt>
      </ModalBox>
    </Overlay>
  );
}

export default Modal;
