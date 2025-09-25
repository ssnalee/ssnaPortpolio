import { Link,useMatch} from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion} from "framer-motion";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atom";
import { HiSun, HiMoon } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import { UseMoveComponent } from "../hooks/UseMoveComponent";

const Nav = styled(motion.nav)`
  position : fixed;
  display: flex;
  justify-content : flex-end;
  align-items :center;
  width : 100%;
  height : 150px;
  top : 0;
  padding : 20px 50px;
  z-index : 99;
  background-color: transparent;
  font-size: 1em;
  @media screen and (max-width:768px){
    padding: 10px;
    justify-content: center;
    height: 80px;
    backdrop-filter: blur(25px);
  }
`;
  
const NavLists = styled.ul`
  display : flex;
  align-items : center;
`;
const NavList = styled.li`
  margin-right: 15px;
  padding: 5px;
  box-sizing: border-box;
  position: relative;
  font-family: "Anta", sans-serif;
  font-weight: 400;
  @media screen and (max-width:768px){
    &:last-child{
      display: none;
    }
    margin-right: 5px;
  }
`;
const DarkBtn = styled.button`
  width: 40px;
  height: 40px;
  border:none;
  border-radius: 15px;
  background-color: transparent;
  box-shadow: ${(props)=>`3px 3px 3px 1px `+props.theme.shadow};
  &:hover{
    background-color: ${(props)=>props.theme.btnColor};
    transition: all 0.3s;
  }
`
const ListBar = styled(motion.span)<{backgroundColor :string}>`
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 50%;
    bottom: -5px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: ${(props)=>props.backgroundColor};
`;

const DETAIL_NAV = [
  { idx: 0, name: 'INTRO' },
  { idx: 1, name: 'ABOUT' },
  { idx: 2, name: 'SKILLS' },
  { idx: 3, name: 'PROJECT' },
];

interface HeaderProps {
  refNames?: null[] | HTMLDivElement[];
}

// const Header = ({ refNames }: HeaderProps) =>{ 
  function Header(){
  const homeMatch = useMatch("/");
  const aboutMatch = useMatch("/about");
  const skillMatch = useMatch("/skill");
  const projectMatch = useMatch("/project");
  // const handleClick = (ref: React.RefObject<HTMLDivElement>) => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const isDark = useRecoilValue(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  // const [menu, clickMenu] = useState('');

  // const handleClickMenu = (item: string, idx: number) => {
  //   if (refNames && refNames.length > 0) {
  //     UseMoveComponent(refNames[idx]);
  //   }
  //   clickMenu(item);
  // };

  return(
    <Nav>
      <NavLists >
        {/* {DETAIL_NAV.map((item, idx) => (
            <NavList
            key={idx}
            onClick={() => handleClickMenu(item.name, idx + 1)}
            className={menu === item.name ? 'ActiveMenu': ''}
          >
            {item.name}
          </NavList>
        ))
      }; */}
      
        <NavList>
          <Link to="/">INTRO
            {homeMatch ? <ListBar layoutId="listBar" backgroundColor ="#ffee00" /> : null}
          </Link>
        </NavList>
        <NavList>
          <Link to="/about">ABOUT
            {aboutMatch ? <ListBar layoutId="listBar" backgroundColor ="#76fa17"/> : null}
          </Link>
        </NavList>
        <NavList>
          <Link to="/skill">SKILL
            {skillMatch ? <ListBar layoutId="listBar" backgroundColor ="#0040ff"/> : null}
          </Link>
        </NavList>
        <NavList>
          <Link to="/project">PROJECT
            {projectMatch ? <ListBar layoutId="listBar" backgroundColor ="#9500ff"/> : null}
          </Link>
        </NavList>
        <NavList>
          <DarkBtn
            onClick={toggleDarkAtom}>
            {isDark ? 
            <HiMoon size="26px" color="#ffc800"/> :
            <HiSun size="26px" color="#fbff00"/>}
          </DarkBtn>
        </NavList>
      </NavLists>
   </Nav>
  );
}

export default Header;