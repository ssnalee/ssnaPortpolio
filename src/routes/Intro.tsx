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
const spinner = keyframes`
  100% {
    transform: rotate(1turn)
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
  @media screen and (max-width:1200px){
    width: 100%;
    /* margin-top: 100px; */
  }
`;
const ContL = styled.div`
  width: 40%;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
  }
  @media screen and (max-width:1200px){
    display: none;
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
  color: ${(props)=>props.theme.textColor};
  @media screen and (max-width:1200px){
    width: 100%;
    padding:  20px;
  }
`;
const CircleBox =styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  @media screen and (max-width:768px){
    gap: 5px;
  }
`;
const Circle = styled.li<{backgroundColor : string}>`
  width: 33%;
  aspect-ratio: 1/1;
  max-width: 200px;
  max-height: 200px;
  background-color: ${(props)=>props.backgroundColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size:35px;
  cursor: pointer;
  font-family: "Nanum Pen Script", cursive;
  box-shadow: ${(props)=>`6px 8px 6px -6px `+props.theme.shadow};
  &:hover{
   transition : all 0.5s;
   background-color: #e7ff34;
  }
  @media screen and (max-width:1200px){

    margin: 20px 0;
    /* height: auto; */
    font-size: 25px;
    flex-shrink: 0;
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
  @media screen and (max-width:1200px){
    font-size: 20px;
    height: 50px;
    .arrow{
      top:5px;
    }
  }
`;
const Loader = styled.div`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: 
    radial-gradient(farthest-side,#1a79ff 94%,#0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%,#1a79ff);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
  animation: ${spinner} 1s infinite linear;

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
    const [isLoading,setIsLoading]= useState(false);
    const changeNm = ( text: any, i : number) => {
        let copy = [...nm];
        copy[i] = text; 
        setNm(copy);
    }
    useEffect(()=>{
      //setTimeout(()=>{
        setIsLoading(true);
      //},3000);
 

    },[])

  return(
    // <IntroWrap ref={ref} {...props}>
    <>
      {isLoading ? 
      <IntroWrap>
        <ContL>
          <img src={process.env.PUBLIC_URL+'/img/me.jpg'}/>
        </ContL> 
        <ContR >
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
    :  <IntroWrap><Loader></Loader></IntroWrap>}
    </>
    
  );
};

export default Intro;