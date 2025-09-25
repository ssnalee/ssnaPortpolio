import { motion } from "framer-motion";
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
const SkillDiv = styled(motion.div)` 
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
const Simg = styled(motion.img)`
  height: 80px;
  /* &:hover{
    scale:1.2;
    transition: all 0.5s;
  } */
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
        delayChildren: 0.2, 
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };
  const SkillItems = ({ items }: { items: { key: string; label: string }[] }) => (
    <SkillDiv
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {items.map(item => (
        <motion.div
          key={item.key}
          variants={itemVariants}
        >
          <Simg
            src={`${SKILL_IMG_URL}/${item.key}.png`}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <p>{item.label}</p>
        </motion.div>
      ))}
    </SkillDiv>
  );

  return (
    <SkillWrap>
      <SkillBoxs>
        <SkillBox>
          <Stitle>프론트엔드 & 스타일링</Stitle>
          <SkillItems items={skills.basics} />
          <SkillItems items={skills.ui} />
        </SkillBox>
        <SkillBox>
          <Stitle>백엔드 & DB</Stitle>
          <SkillItems items={skills.backend} />
        </SkillBox>
      </SkillBoxs>
      <SkillBoxs>
        <SkillBox>
          <Stitle>프레임워크 & 상태관리</Stitle>
          <SkillItems items={skills.react_framework} />
          <SkillItems items={skills.vue_framework} />
        </SkillBox>
        <SkillBox>
          <Stitle>협업 도구</Stitle>
          <SkillItems items={skills.tool} />
        </SkillBox>
      </SkillBoxs>
    </SkillWrap>
  );
}

export default Skill;