import styled from "styled-components";

import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { PiArrowBendDownLeftFill } from "react-icons/pi";
import { IListProps } from "../common/projectList";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
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
  background-color: #fff;
  color: #000;
  z-index: 1000;
  &::-webkit-scrollbar {
  display: none;
} 
 `
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
   color:#797979;
   transition: all 0.3s ease-in-out;
   &:hover {
     color: #181818;
     scale: 1.3;
   }
 }
`;

const ModalCtnt = styled.div`
  padding: 40px;
`;
const ModalLeft = styled.div`
 position: relative;
 left: 50%;
 transform: translateX(-50%);
 width: 600px;
`;
const ModalRight = styled.div`
  padding-top:310px;
  font-family: "Noto Sans KR", sans-serif;
  font-size:17px;
  line-height: 27px;
`;
const ProjectTitle = styled.h2`
  font-size:22px;
  font-weight: 500;
`;
const NotFinished = styled.span`
  display: inline-block;
  background-color: ${(props) => props.theme.red};
  padding:5px;
  color:#fff;
  border-radius: 30px;
  font-size: 15px;
  margin-left: 10px;
`;
const ProjectP = styled.p`
  line-height: 2rem;
  margin-bottom: 10px;
  span{
    cursor: pointer;
    border-bottom: 1px solid #000000;
  }
  .adress{
    cursor: auto;
    border: none;
    vertical-align:top;
    font-size: 15px;
    margin: 8px;
    color: #ff7575;
  }
  img{
    width: fit-content;
    height: 50px;
  }
  &.skill-container{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
  }
  .skill-area{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    p{
      font-size: 0.8rem;
      background-color: #29292977;
      color:#fff;
      padding: 0 5px;
      border-radius: 30px;
    }
  }
`;
const PcImg = styled.img`
  /* background: url(${process.env.PUBLIC_URL}/img/computer.png) center center no-repeat;
  background-size: cover; */
  position: absolute;
  width: 300px;
  &.fad{
    left: 40px;
  }
  &.mo{
    left:50%;
    transform: translateX(-50%);
  }
  &.ne{
    left: 0px;
    width: 290px;
  }
  &.ne2{
    left: 310px;
    width: 290px;
  }
`;
const TabletImg = styled.img`
  position: absolute;
  width: 250px;
  &.fad{
    left: 340px;
    top:39px;
  }
`;

const MobileImg = styled.img`
  position: absolute;
  width: 100px;
  &.fad{
    left: 310px;
    top:90px;
  }
  &.kim{
    left: 15px;
    width: 140px;
  }
  &.kim2{
    left: 160px;
    width: 140px;
  }
  &.kim3{
    left: 305px;
    width: 140px;
  }
  &.kim4{
    left: 450px;
    width: 140px;
  }
`;
interface IProps {
  closePopup: () => void;
  list: IListProps;
}
function Modal({ list, closePopup }: IProps) {
  const IMG_URL = process.env.PUBLIC_URL + '/img/site/';
  const SKILL_IMG_URL = process.env.PUBLIC_URL + '/img/skills/';
  const onOverlayClicked = (e: any) => {
    closePopup();
  }
  return (
    <>
      <Overlay
        onClick={e => onOverlayClicked(e)}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <ModalBox
          onClick={e => e.stopPropagation()}
          initial={{ scale: 1 }}
          animate={{}}
          exit={{ scale: 0 }}
          layoutId={list.id}
        >
          <ModalCover>
            <AiOutlineClose
              onClick={e => onOverlayClicked(e)}
              className="closeModal"
              size={"30px"}
            />
          </ModalCover>
          <ModalCtnt>
            <ModalLeft>
              {list.id == 'project01' &&
                <>
                  <PcImg src={IMG_URL + 'fad_pc.png'} className="fad" />
                  <TabletImg src={IMG_URL + 'fad_ta.png'} className="fad" />
                  <MobileImg src={IMG_URL + 'fad_mo.png'} className="fad" />
                </>
              }
              {list.id == 'project02' &&
                <>
                  <PcImg src={IMG_URL + 'ac_pc.png'} className="fad" />
                  <TabletImg src={IMG_URL + 'ac_ta.png'} className="fad" />
                  <MobileImg src={IMG_URL + 'ac_mo.png'} className="fad" />
                </>
              }
              {list.id == 'project03' &&
                <>
                  <PcImg src={IMG_URL + 'mo_pc.png'} className="mo" />
                </>
              }
              {list.id == 'project04' &&
                <>
                  <MobileImg src={IMG_URL + 'kim.png'} className="kim" />
                  <MobileImg src={IMG_URL + 'kim2.png'} className="kim2" />
                  <MobileImg src={IMG_URL + 'kim3.png'} className="kim3" />
                  <MobileImg src={IMG_URL + 'kim4.png'} className="kim4" />
                </>
              }
              {list.id == 'project05' &&
                <>
                  <PcImg src={IMG_URL + 'ne_pc.png'} className="ne" />
                  <PcImg src={IMG_URL + 'ne_pc2.png'} className="ne2" />
                </>
              }
              {list.id == 'project06' &&
                <>
                  <PcImg src={IMG_URL + 're_pc.png'} className="fad" />
                  <TabletImg src={IMG_URL + 're_ta.png'} className="fad" />
                  <MobileImg src={IMG_URL + 're_mo.png'} className="fad" />
                </>
              }
            </ModalLeft>
            <ModalRight>
              <ProjectTitle>{list.name}
                {list.state == false &&
                  <NotFinished>작업 중</NotFinished>
                }
              </ProjectTitle>
              <ProjectP>작업인원 : {list.people} 명</ProjectP>
              <ProjectP className="skill-container">스킬 :  {
                list.skills.map(item => (
                  <div className="skill-area">
                    <img src={`${SKILL_IMG_URL}${item.key}.png`} />
                    <p>{item.label}</p>
                  </div>
                ))
              }</ProjectP>
              <ProjectP>주소 :
                <span onClick={() => window.open(list.adress)}>{list.adress}</span>
                <span className="adress"><PiArrowBendDownLeftFill />클릭 시 사이트 이동</span>
              </ProjectP>
              {
                list.adress2 &&
                <ProjectP>API 문서 :
                  <span onClick={() => window.open(list.adress2)}>{list.adress2}</span>
                  <span className="adress"><PiArrowBendDownLeftFill />클릭 시 사이트 이동</span>
                </ProjectP>
              }

              <ProjectP dangerouslySetInnerHTML={{ __html: list.overview }}></ProjectP>
            </ModalRight>
          </ModalCtnt>
        </ModalBox>
      </Overlay>
    </>

  );
}
export default Modal;