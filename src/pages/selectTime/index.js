import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { FaArrowLeft } from "react-icons/fa";

import {
  Container,
  Title,
  Session,
  TimeButton,
  Footer,
  Img,
  GoBack,
} from "./styles";

export default function SelectTime() {
  const [movie, setMovie] = useState(null);
  const { idMovie } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v4/cineflex/movies/${idMovie}/showtimes`
      )
      .then((res) => setMovie(res.data));
  }, []);

  if (movie == null) return <></>;

  return (
    <Container>
      <Title>Selecione o horário</Title>

      <GoBack onClick={() => navigate(-1)}>
        <FaArrowLeft size={25} />
      </GoBack>

      <Session>
        {movie.days.map((e) => (
          <>
            <span style={{ width: "100%" }}>
              {e.weekday} - {e.date}
            </span>
            {e.showtimes.map((element) => (
              <TimeButton onClick={() => navigate(`/assentos/${element.id}`)}>
                {element.name}
              </TimeButton>
            ))}
          </>
        ))}
      </Session>

      <Footer>
        <Img imgSrc={movie.posterURL} />
        <span>{movie.title}</span>
      </Footer>
    </Container>
  );
}
