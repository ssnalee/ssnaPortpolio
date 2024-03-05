import styled, { keyframes } from "styled-components";
import { HiMiniCursorArrowRays } from "react-icons/hi2";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom"

const fadeIn = keyframes`
  0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
`;
const AboutWrap = styled.div`
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
const ContL = styled.div`
 width: 40%;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
  }`;
const ContR = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  `;
const Datas = styled.dl`
  display: flex;
  align-items: center;
  font-size: 25px;
  margin-bottom:50px;
  position: relative;
  width: max-content;
  
  font-family: "Orbit", sans-serif;
  &::before{
    content:"";
    position: absolute;
    bottom:0%;
    left: 15px;
    width: 100%;
    height: 5px;
    background: ${(props)=>props.theme.gradient};
    border-radius: 5px 100% 100% 5px;
  }
  dt{
    position: relative;
    margin : 0 20px;
  }
  dt:before{
    content:"";
    position: absolute;
    /* top:0;
    left:-10px;
    background-color: #b6b6b6;
    height: 100%;
    width: 5px; */

  }
  dd{
    position: relative;
    font-size: 20px;
  }
  dd.click_btn{
    position: absolute;
    right: -100px;
    bottom:-35px;
    font-size: 15px;
  }
`;

function About(){
    const isDark = useRecoilValue(isDarkAtom);


  return(
    <AboutWrap>
      <ContL>
        <img src={process.env.PUBLIC_URL+'/img/me.jpg'}/>
      </ContL>
      <ContR>
        <Datas>
          <dt>이름</dt>
          <dd>이승아</dd>
        </Datas>
        <Datas>
          <dt>연락처</dt>
          <dd>010-9954-8079</dd>
        </Datas>
        <Datas>
          <dt>이메일</dt>
          <dd>97poolbbang@naver.com</dd>
  
        </Datas>
        <Datas>
          <dt>생년월일</dt>
          <dd>1997.01.17</dd>
        </Datas>
        <Datas>
          <dt>학력</dt>
          <dd>학점은행제 2022-06 ~ 진행중</dd>
        </Datas>
        <Datas>
          <dt>깃허브</dt>
          <dd><a href="https://github.com/ssnalee" target="_blank">https://github.com/ssnalee</a></dd>
          <dd className="click_btn"><HiMiniCursorArrowRays size="30px" color="#00ff04"/>클릭 시 해당 주소로 이동합니다.</dd>
        </Datas>
      </ContR>
    </AboutWrap>
   
  );
}

export default About;