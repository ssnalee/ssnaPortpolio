import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
// import Typewriter from '../common/Typewriter';
import { forwardRef, useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const fadeIn = keyframes`
  0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
`;
const fadeOut = keyframes`
  0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
`;
const IntroWrap = styled.div`
  height: 100vh;
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  animation: 0.7s ease-in-out ${fadeIn};
`;
const Cont = styled.div`

`;
const ContL = styled.div`
  width: 40%;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
  }
`;
const ContR = styled.div` 
  width: 60%;
  font-family: "Orbit", sans-serif;
  font-weight: 400;
  padding: 40px;
  font-size: 35px;
    letter-spacing: 0.5px;
    line-height: 2em;
    white-space: pre-wrap;
  p{

  }
`;
const CircleBox =styled.ul`
  display: flex;
  align-items: center;
`;
const Circle = styled.li<{backgroundColor : string}>`
 width: 200px;
 height: 200px;
 background-color: ${(props)=>props.backgroundColor};
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 text-align: center;
 margin: 40px 20px 40px 0;
 font-size:35px;
 cursor: pointer;
 font-family: "Nanum Pen Script", cursive;
 box-shadow: ${(props)=>`6px 8px 6px -6px `+props.theme.shadow};
 &:hover{
  transition : all 0.5s;
  background-color: #e7ff34;
 }

 &.fade-in {
    opacity: 1;
    animation: ${fadeIn} ease-in-out 1s;
  }

  &.fade-out {
    opacity: 0;
    animation: ${fadeOut} ease-in-out 1s;
  }

`;
const LinkBtn = styled.button`
  background: linear-gradient(90deg, rgba(0,255,61,1) 0%, rgba(156,253,29,1) 30%, rgba(255,246,0,1) 100%);
  /* border: 2px solid #e7e5e5; */
  border:none;
  width: 100%;
  height: 60px;
  font-size: 28px;
  font-family: "Orbit", sans-serif;
  font-weight: 400;
  box-shadow: ${(props)=>`0px 8px 6px -6px `+props.theme.shadow};
  .arrow{
    position: relative;
    top:3px;
    left:10px;
  }
`;
const circleVariants = {
    normal : {},
    hover : {
        transition : {
            delay :0.5,
            duration : 0.3,
            type : "tween"
        },
        opacity : 1 
    }
}
// const Intro = forwardRef(function Intro({...props}, ref: React.Ref<HTMLDivElement>){
const Intro = ()=>{
    const [nm,setNm] = useState(['planned','Meticulous','Positive']);
    const [isFade,setIsfade]= useState(false);
    const changeNm = ( text: any, i : number) => {
        let copy = [...nm];
        copy[i] = text; 
        setNm(copy);
    }
    // useEffect(()=>{
    //  setNm(nm);

    // },[nm,setNm])

  return(
    // <IntroWrap ref={ref} {...props}>
    <IntroWrap>
        <ContL>
          <img src={process.env.PUBLIC_URL+'/img/me.jpg'}/>
        </ContL> 
        <ContR>
        {/* <Typewriter text= "안녕하세요." speed={100}/>
        <Typewriter text= "프론트엔드 개발자 이승아입니다." speed={200}/> */}
            <Typewriter options={{
                strings: ['안녕하세요.\n프론트엔드 개발자 이승아입니다.'],
                autoStart: true,
                loop : false,
                deleteSpeed : 20000000,
              
              }}
            />
            <CircleBox>
            <Circle 
              backgroundColor="#72beff" 
              onMouseOver={()=>{changeNm('계획적인',0)}} 
              onMouseOut={()=>{changeNm('planned',0)}}
              className= {isFade ? 'fade-in': ''}
              > {nm[0]}
            </Circle>
            <Circle 
              backgroundColor="#ffb58b"
              onMouseOver={()=>{changeNm('꼼꼼한',1)}} 
              onMouseOut={()=>{changeNm('Meticulous',1)}}> {nm[1]}
            </Circle>
            <Circle 
              backgroundColor="#ffd351"
              onMouseOver={()=>{changeNm('긍정적인',2)}} 
              onMouseOut={()=>{changeNm('Positive',2)}}> {nm[2]}
            </Circle>
            </CircleBox>

            <LinkBtn>
              <Link to ='/project'>프로젝트 보러가기 
              <IoArrowForwardCircleOutline className="arrow" size="26px" color="#000000"/></Link>
            </LinkBtn>

        </ContR>

    </IntroWrap>

  );
};

export default Intro;