import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./globalStyles/styles";
import SelectMovie from "./pages/selectMovie";
import SelectTime from "./pages/selectTime";
import SelectSeat from "./pages/selectSeat";
import Successfully from "./pages/successfully";

export default function App() {
  const [successfully, setSuccessfully] = useState({
    title: "",
    date: "",
    time: "",
    seatNumber: [],
    seats: { ids: [], name: "", cpf: "" },
  });

  const handleSuccessfully = (param) => {
    setSuccessfully(param);
  };

  return (
    <Container>
      <GlobalStyle />
      <Header>CINEFLEX</Header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectMovie />} />
          <Route path={`/sessoes/:idMovie`} element={<SelectTime />} />
          <Route
            path={`/assentos/:idSessao`}
            element={<SelectSeat parent={handleSuccessfully} />}
          />
          <Route
            path={`/successfully`}
            element={<Successfully order={successfully} />}
          />
        </Routes>
      </BrowserRouter>
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
