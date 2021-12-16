import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./globalStyles/global";

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header>CINEFLEX</Header>
      <Main></Main>
      <Footer></Footer>
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
`;

const Header = styled.header`
  width: 375px;
  height: 67px;
  justify-content: center;

  background: #c3cfd9;

  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #e8833a;
`;

const Main = styled.main`
  width: 375px;
  height: 810px;

  background: #ffffff;
`;

const Footer = styled.footer`
  position: absolute;
  width: 375px;
  height: 117px;

  background: #dfe6ed;
  border: 1px solid #9eadba;
`;
