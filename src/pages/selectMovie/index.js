import { useState, useEffect } from "react";
import axios from "axios";

import { Container, Button, Img, Title, Grid } from "./styles";

export default function SelectMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v4/cineflex/movies")
      .then((res) => setMovies(res.data));
  }, []);

  return (
    <Container>
      <Title>Selecione o filme</Title>
      <Grid>
        {movies.map((e) => (
          <Button imgSrc={e.posterURL} />
        ))}
      </Grid>
    </Container>
  );
}
