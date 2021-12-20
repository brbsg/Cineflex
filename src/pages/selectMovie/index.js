import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Container, Button, Img, Title, Grid } from "./styles";

export default function SelectMovie(props) {
  const [movies, setMovies] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v4/cineflex/movies")
      .then((res) => setMovies(res.data));
  }, []);

  return (
    <Container>
      <Title>Selecione o filme</Title>
      <Grid>
        {movies.map((element) => (
          <Button
            imgSrc={element.posterURL}
            onClick={() => navigate(`/sessoes/${element.id}`)}
          />
        ))}
      </Grid>
    </Container>
  );
}
