import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Intro from './routes/Intro';
import About from './routes/About';
import Skill from './routes/Skill';
import Project from './routes/Project';
import { BrowserRouter } from 'react-router-dom';
import { lightTheme, darkTheme } from './theme';
import { isDarkAtom } from "./atom";
import {useRecoilValue} from "recoil";
import Footer from './component/Footer';
import { useRef } from 'react';
const GlovalStyle =  createGlobalStyle`

/* @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Nanum+Gothic+Coding:wght@400;700&display=swap'); */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body{
  font-family :'Nanum Gothic Coding', sans-serif;
   color:${props=>props.theme.color};
   background:${props=>props.theme.bgColor};
  /* color : #000; */
  line-height: 1.2;

}
* {
  box-sizing : border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
::-webkit-scrollbar {
  display: none;
}
`;

const App = () => {
  const isDark = useRecoilValue(isDarkAtom);
  // const refArray = useRef<null[] | HTMLDivElement[]>([]);
  return (
    <>
      <ThemeProvider theme ={isDark ? lightTheme : darkTheme}>
      {/* <Header refNames={refArray.current}/>
      <Intro ref={el => (refArray.current[0] = el)}/>
      <About ref={el => (refArray.current[1] = el)}/>
      <Skill ref={el => (refArray.current[2] = el)}/>
      <Project ref={el => (refArray.current[3] = el)}/> */}
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <GlovalStyle />
          <Header />
          <Routes>
            <Route path="/" element = {<Intro/>} />
            <Route path= "/about" element = {<About />} />
            <Route path= "/skill" element = {<Skill />} />
            <Route path="/project" element = {<Project />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
