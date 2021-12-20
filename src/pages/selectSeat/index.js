import { useState, useEffect } from "react";
import axios from "axios";

import {
  Container,
  Title,
  Footer,
  Img,
  Seat,
  Grid,
  Label,
  CostumerInfo,
  CostumerCPF,
  CostumerName,
  BookOrder,
  MovieInfo,
  GoBack,
} from "./styles";
import { useNavigate, useParams } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

export default function SelectSeat(props) {
  const [session, setSession] = useState(null);
  const [sendOrder, setSendOrder] = useState({ ids: [], name: "", cpf: "" });
  const [sendProps, setSendProps] = useState({
    title: "",
    date: "",
    time: "",
    seatNumber: [],
    seats: { ids: [], name: "", cpf: "" },
  });

  const { idSessao } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`
      )
      .then(
        (res) => (
          setSession(res.data),
          setSendProps({
            ...sendProps,
            title: res.data.movie.title,
            date: res.data.day.date,
            time: res.data.name,
          })
        )
      );
  }, []);

  const handleClickSeat = (e, id) => {
    let selecionadoClass = document.getElementsByClassName("selecionado");
    let auxArr = [];
    let seatNumber = [];

    e.classList.toggle("selecionado");
    e.id = id;

    for (let element of selecionadoClass) {
      auxArr.push(element.id);
      seatNumber.push(element.innerHTML);
    }
    console.log(seatNumber);
    setSendOrder({ ...sendOrder, ids: auxArr });
    setSendProps({ ...sendProps, seatNumber });
  };

  const handleBookOrder = () => {
    console.log(sendOrder.ids);
    if (
      sendOrder.ids.length !== 0 &&
      sendOrder.name !== "" &&
      sendOrder.cpf !== ""
    ) {
      const req = axios.post(
        "https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many",
        sendOrder
      );
      req
        .then((e) => (navigate("/successfully"), props.parent(sendProps)))
        .catch((e) => alert("Preencha os Dados Corretamente"));
    } else alert("Preencha os Dados Corretamente");
  };

  if (session == null) return <></>;
  return (
    <Container>
      <GoBack onClick={() => navigate(-1)}>
        <FaArrowLeft size={25} />
      </GoBack>

      <Title>Selecione o horário</Title>
      <Grid>
        {session.seats.map((e) => (
          <Seat
            key={e.name}
            style={!e.isAvailable ? { backgroundColor: "#FBE192" } : null}
            onClick={(el) =>
              e.isAvailable
                ? handleClickSeat(el.target, e.id)
                : alert("Esse assento não está disponível")
            }
          >
            {e.name}
          </Seat>
        ))}
      </Grid>

      <Label>
        <div style={{ backgroundColor: "#8DD7CF", borderColor: "#1aae9e" }}>
          <span>Selecionado</span>
        </div>
        <div style={{ backgroundColor: "#C3CFD9", borderColor: "#7B8B99" }}>
          <span>Disponínel</span>
        </div>
        <div style={{ backgroundColor: "#FBE192", borderColor: "#F7C52B" }}>
          <span>Indisponível</span>
        </div>
      </Label>
      <CostumerInfo>
        <CostumerName>
          <span>Nome do comprador:</span>
          <input
            placeholder="Digite seu nome..."
            onChange={(event) => (
              setSendOrder({ ...sendOrder, name: event.target.value }),
              setSendProps({ ...sendProps, seats: sendOrder })
            )}
          />
        </CostumerName>
        <CostumerCPF>
          <span>CPF do comprador:</span>
          <input
            placeholder="Digite seu CPF..."
            onChange={(event) => (
              setSendOrder({ ...sendOrder, cpf: event.target.value }),
              setSendProps({ ...sendProps, seats: sendOrder })
            )}
          />
        </CostumerCPF>
      </CostumerInfo>

      <BookOrder onClick={handleBookOrder}>Reservar assento(s)</BookOrder>

      <Footer>
        <Img imgSrc={session.movie.posterURL} />

        <MovieInfo>
          <span>{session.movie.title}</span>
          <span>
            {session.day.weekday} - {session.name}
          </span>
        </MovieInfo>
      </Footer>
    </Container>
  );
}
