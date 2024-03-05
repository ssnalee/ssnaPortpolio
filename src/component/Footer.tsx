import styled from "styled-components";

const FooterWrap = styled.div`
  padding: 60px;
  margin: 0 auto;
  background-color: #212222;
  color:#fff;
  text-align: center;
  `;
function Footer(){
  return(
    <FooterWrap>
      <small>Copyright 2024. 이승아. All rights reserved.</small>
    </FooterWrap>
  );
}

export default Footer;