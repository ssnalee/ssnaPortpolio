import styled from "styled-components";

const SkillWrap = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top:200px;
  >div{
    width: 45%;
  }
`;
const SkillBoxs = styled.div``;
const SkillBox = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding:20px;
  margin-bottom: 20px;
  box-shadow: ${(props) => `0px 8px 6px -6px ` + props.theme.shadow};
  overflow: hidden;
`;
const SkillDiv = styled.div` 
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin-bottom: 20px;
  gap: 30px;
  >div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  p{
    background-color: #29292977;
    color:#fff;
    padding: 5px 10px;
    border-radius: 30px;
  }
`;
const Stitle = styled.h3`
  font-size: 30px;
  font-weight: 700;
  font-family: "Orbit", sans-serif;
  color:#000;
  position: relative;
  width: fit-content;
  margin-bottom: 50px;
`;
const Simg = styled.img`
  height: 80px;
  &:hover{
    scale:1.2;
    transition: all 0.5s;
  }
`;

function Skill() {
  const SKILL_IMG_URL = `${process.env.PUBLIC_URL}/img/skills`
  const skills = {
    basics: [
      {
        key: 'html',
        label: 'HTML5',
      },
      {
        key: 'css',
        label: 'CSS',
      },
      {
        key: 'js',
        label: 'Javascript',
      },
      {
        key: 'ts',
        label: 'Typescript',
      },
    ],
    ui: [
      {
        key: 'styled-component',
        label: 'Styled Compnent',
      },
      {
        key: 'jquery',
        label: 'jQuery',
      },
      {
        key: 'scss',
        label: 'SCSS',
      },
    ],
    react_framework: [
      {
        key: 'react',
        label: 'React',
      },
      {
        key: 'react-query',
        label: 'React Query',
      },
      {
        key: 'recoil',
        label: 'Recoil',
      },
      {
        key: 'redux',
        label: 'Redux',
      },
    ],
    vue_framework: [
      {
        key: 'vue',
        label: 'Vue',
      },
      {
        key: 'vuex',
        label: 'Vuex',
      },
      {
        key: 'pinia',
        label: 'Pinia',
      },
    ],
    backend: [
      {
        key: 'express',
        label: 'Express',
      },
      {
        key: 'mongodb',
        label: 'MongoDB',
      },
      {
        key: 'postgredb',
        label: 'PostgreDB',
      },
    ],
    tool: [
      {
        key: 'github',
        label: 'Github',
      },
      {
        key: 'figma',
        label: 'Figma',
      },
      {
        key: 'slack',
        label: 'Slack',
      },
      {
        key: 'flow',
        label: 'Flow',
      },
    ]
  }

  const SkillItems = ({ items }: { items: { key: string; label: string }[] }) => (
    <>
      {items.map(item => (
        <div key={item.key}>
          <Simg src={`${SKILL_IMG_URL}/${item.key}.png`} />
          <p>{item.label}</p>
        </div>
      ))}
    </>
  );

  return (
    <SkillWrap>
      <SkillBoxs>
        <SkillBox>
          <Stitle>프론트엔드 & 스타일링</Stitle>
          <SkillDiv>
            <SkillItems items={skills.basics} />
          </SkillDiv>
          <SkillDiv>
            <SkillItems items={skills.ui} />
          </SkillDiv>
        </SkillBox>
        <SkillBox>
          <Stitle>백엔드 & DB</Stitle>
          <SkillDiv>
            <SkillItems items={skills.backend} />
          </SkillDiv>
        </SkillBox>
      </SkillBoxs>

      <SkillBoxs>
        <SkillBox>
          <Stitle>프레임워크 & 상태관리</Stitle>
          <SkillDiv>
            <SkillItems items={skills.react_framework} />
          </SkillDiv>
          <SkillDiv>
            <SkillItems items={skills.vue_framework} />
          </SkillDiv>
        </SkillBox>

        <SkillBox>
          <Stitle>협업 도구</Stitle>
          <SkillDiv>
            <SkillItems items={skills.tool} />
          </SkillDiv>
        </SkillBox>
      </SkillBoxs>
    </SkillWrap>
  );
}

export default Skill;