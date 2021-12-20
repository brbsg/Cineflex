import { useState, useEffect } from "react";
import axios from "axios";

import { Container, Title, Session, Time } from "./styles";

export default function Successfully() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v4/cineflex/movies")
      .then((res) => setMovies(res.data));
  }, []);

  return (
    <Container>
      <Title>Selecione o horário</Title>

      <Session>
        <span style={{ width: "100%" }}>dvavavfb</span>
        <Time />
        <Time />
      </Session>
    </Container>
  );
}
