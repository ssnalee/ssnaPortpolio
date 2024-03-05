import styled from "styled-components";

const SkillWrap = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding-top:150px;
`;
const SkillBoxs = styled.div``;
const SkillBox = styled.div`
  width: 450px;
  background-color: #fff;
  border-radius: 20px;
  padding:20px 20px 0;
  margin-bottom: 20px;
  box-shadow: ${(props)=>`0px 8px 6px -6px `+props.theme.shadow};
  overflow: hidden;
`;
const SkillLists = styled.ul`
  margin-top: 30px;`;
const SkillList =styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin-bottom: 5px;
  height: 80px;
`;
const Stitle = styled.h3`
  font-size: 30px;
  font-weight: 700;
  font-family: "Orbit", sans-serif;
  color:#000;
  position: relative;
  display: inline;
  &::before{
    z-index: 1;
    position: absolute;
    bottom:-5px;
    right: 0;
    content: "";
    width: 80%;
    height: 5px;
    background: linear-gradient(90deg, rgba(0,255,216,1) 0%, rgba(29,246,253,1) 28%, rgba(6,0,255,1) 100%);
  }
`;
const Simg = styled.img`
  height: 100%;
  &.w_3{
    height: 70px;
    margin: 5px;
  }
  &.w_2{
    height: 70px;
    margin: 5px;
  }
  &.s_0{
    scale:0.5;
  }
  &.s_1{
    scale:1.5;
  }
  &:hover{
    scale:1.5;
    transition: all 0.5s;
  }
  &.s_0:hover{
    scale:0.8;
  }
  &.s_1:hover{
    scale:1.8;
  }
`;

function Skill(){
  return(
    <SkillWrap >
      <SkillBox>
        <Stitle>Front End</Stitle>
        <SkillLists>
          <SkillList>
            <Simg className="w_3" src={process.env.PUBLIC_URL+'/img/html5.png'}/>
            <Simg className="w_3" src={process.env.PUBLIC_URL+'/img/css.png'}/>
            <Simg className="w_3" src={process.env.PUBLIC_URL+'/img/js.png'}/>
          </SkillList>
          <SkillList>
            <Simg className="w_2" src={process.env.PUBLIC_URL+'/img/ts.png'}/>
            <Simg className="w_2" src={process.env.PUBLIC_URL+'/img/styled_component.png'}/>
          </SkillList>
          <SkillList>
            <Simg src={process.env.PUBLIC_URL+'/img/jquery.png'}/>
          </SkillList>
          <SkillList>
            <Simg src={process.env.PUBLIC_URL+'/img/react.png'}/>
          </SkillList>
          <SkillList>
            <Simg className="s_1" src={process.env.PUBLIC_URL+'/img/react_query.png'}/>
          </SkillList>
          <SkillList>
            <Simg src={process.env.PUBLIC_URL+'/img/recoil.png'}/>
          </SkillList>
        </SkillLists>
      </SkillBox>
      <SkillBoxs>
        <SkillBox>
          <Stitle>Source Control</Stitle>
          <SkillLists>
            <SkillList>
              <Simg className="s_1" src={process.env.PUBLIC_URL+'/img/gitlab.png'}/>
            </SkillList>
            <SkillList>
              <Simg src={process.env.PUBLIC_URL+'/img/github.png'}/>
            </SkillList>
          </SkillLists>
        </SkillBox>
        <SkillBox>
          <Stitle>Communication</Stitle>
          <SkillLists>
            <SkillList>
              <Simg src={process.env.PUBLIC_URL+'/img/slack.png'}/>
            </SkillList>
            <SkillList>
              <Simg className="s_0" src={process.env.PUBLIC_URL+'/img/flow.png'}/>
            </SkillList>
            <SkillList>
              <Simg src={process.env.PUBLIC_URL+'/img/zeplin.png'}/>
            </SkillList>
          </SkillLists>
        </SkillBox>
      </SkillBoxs>
    </SkillWrap>
  );
}

export default Skill;