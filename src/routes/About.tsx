import styled, { keyframes } from "styled-components";
import { HiMiniCursorArrowRays } from "react-icons/hi2";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom"
import { motion } from 'framer-motion';

const fadeIn = keyframes`
  0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
`;
const AboutWrap = styled.div`
  padding-top: 130px;
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
 position: relative;
 @media screen and (max-width:1200px){
  display: none;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
  }
  `;

const ContR = styled(motion.div)`
  width: 60%;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width:1200px){
  width: 100%;
  padding: 0;
  }
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
    background: ${(props) => props.theme.gradient};
    border-radius: 5px 100% 100% 5px;
  }
  dt{
    position: relative;
    margin : 0 20px;
  }
  dt:before{
    content:"";
    position: absolute;
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
  @media screen and (max-width:1200px){
    font-size: 25px;
    margin-bottom:30px;
  }
  @media screen and (max-width:768px){
    font-size: 15px;
    margin-bottom:20px;
    dd{
      font-size: 12px;
    }
    dd.click_btn{
      right: -10px;
      font-size: 12px;
    }
  }
`;

const QaWrap = styled.div`
  background-color: #afc4ce;
  margin-top: 50px;
  padding: 50px 0;
  h3{
    font-size: 5rem;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto 50px;
    font-family: "Noto Sans KR",sans-serif;
    text-shadow: 
    -2px -2px 0 white,
     2px -2px 0 white,
    -2px  2px 0 white,
     2px  2px 0 white;
  }
  @media screen and (max-width:1200px){
    h3{
      font-size: 3rem;
      text-align: center;
    }
  }
`;
const QaSection = styled(motion.div)`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Nanum Pen Script", cursive;
  padding-bottom: 30px;
  &:not(&:last-of-type){
    border-bottom: 1px solid #fff;
  }
  h5{
    font-size: 2.5rem;
    margin: 30px 0 15px;
  }
  p{
      font-family: "Orbit", sans-serif;
    font-size: 1rem;
  }
  @media screen and (max-width:1200px){
    h5{
      font-size: 1.5rem;
    }
    p{
      font-size: 0.9rem;
    }
  }
`;

function About() {
  const isDark = useRecoilValue(isDarkAtom);


  return (
    <>
      <AboutWrap>
        <ContL>
          {/* <h3>ABOUT</h3> */}
          <img src={process.env.PUBLIC_URL + '/img/me.jpg'} />
        </ContL>
        <ContR 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
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
            <dd>전문학사 (정보처리 전공) | 평생교육진흥원</dd>
          </Datas>
          <Datas>
            <dt>깃허브</dt>
            <dd><a href="https://github.com/ssnalee" target="_blank">https://github.com/ssnalee</a></dd>
            <dd className="click_btn"><HiMiniCursorArrowRays size="30px" color="#00ff04" />클릭 시 해당 주소로 이동합니다.</dd>
          </Datas>
        </ContR>
      </AboutWrap>
      <QaWrap>
        <h3>Q & A</h3>
        <QaSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <h5>Q1. 본인이 생각하는 강점은 무엇인가요? </h5>
          <p>
            저는 일을 할 때 전체 일정을 세밀하게 계획하고, 반드시 마감일 하루 전에는 테스트까지 마칠 수 있도록 중점을 두고 있습니다. <br />
            예외 상황까지 고려해 경우의 수별로 테스트하고 표로 기록하는 습관이 있으며, 새로운 기술에도 빠르게 적응하는 편입니다. <br />
            또한 내가 아는 것과 모르는 것을 스스로 인식하고 보완하는 메타인지가 잘 되어 있어, 학습 과정에서 실수를 줄이고 효율적으로 성장할 수 있습니다. <br />
            이런 점에서 체계적인 계획, 꼼꼼한 실행력, 적응력이 저의 강점입니다.
          </p>
        </QaSection>
        <QaSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <h5>Q2.협업할 때 가장 중요하게 생각하는 가치는 무엇인가요? </h5>
          <p>
            저는 협업에서 가장 중요한 가치는 원활한 의사소통이라고 생각합니다. <br />
            자신의 의견을 끝까지 관철하는 것보다, 상황에 맞게 유연하게 문제를 푸는 것이 더 중요하다고 믿습니다. <br />
            옳고 그름보다는 “다름”을 인정하고 이해하려는 태도가 필요하다고 생각합니다. <br />
            또한, 말을 조리 있게 정확히 전달하지 않으면 불필요한 오해가 생기고, 나아가 팀 전체에 영향을 줄 수 있습니다. <br />
            그렇기 때문에 저는 명확하고 기분 나쁘지 않게 소통하는 능력을 가장 중요한 협업 가치로 삼고 있습니다.
          </p>
        </QaSection>
        <QaSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <h5>Q3. 앞으로 어떤 개발자로 성장하고 싶나요?</h5>
          <p>
            저는 프론트엔드 개발자로서 사용자 경험을 깊이 고민하는 동시에, 풀스택 개발자로 성장하고 싶습니다. <br />
            최근 개인 프로젝트에서 데이터베이스를 직접 설계하고 API를 만들어보면서 백엔드 개발자의 시각을 조금씩 이해할 수 있었습니다. <br />
            처음 ERD를 설계하고, 이후 API를 만들면서 고려하지 못한 부분을 보완해 나가는 과정이 쉽지만은 않았지만, 그만큼 큰 배움이 있었습니다. <br />
            앞으로는 프론트엔드 기술뿐 아니라 데이터 구조와 백엔드의 관점까지 아우를 수 있는 개발자가 되고 싶습니다. <br />
            또한 2026년 초까지는 Next.js나 Nuxt.js 같은 SSR 기술을 활용한 개인 프로젝트를 진행해보며, 배운 것을 실전에서 체화해 나가고자 합니다.
          </p>
        </QaSection>
      </QaWrap>
    </>


  );
}

export default About;