import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./globalStyles/styles";
import SelectMovie from "./pages/selectSeat";
import SelectSeat from "./pages/selectSeat";
import SelectTime from "./pages/selectTime";

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header>CINEFLEX</Header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectMovie />} />
          <Route path="/sessoes" element={<SelectSeat />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  height: 877px;
  position: relative;
`;

const Header = styled.header`
  position: absolute;
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

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 375px;
  height: 117px;

  background: #dfe6ed;
  border: 1px solid #9eadba;
`;
