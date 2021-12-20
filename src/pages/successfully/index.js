import { Container, Info, Title } from "./styles";
import { BackHome } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Successfully({ order }) {
  let navigate = useNavigate();

  return (
    <Container>
      <Title>Pedido feito com sucesso!</Title>

      <Info>
        <span>Filme e sessão</span>
        <h1>{order.title}</h1>
        <h1>
          {order.date} {order.time}
        </h1>
      </Info>

      <Info>
        <span>Filme e sessão</span>
        {order.seatNumber.map((e) => (
          <h1 key={e.id}>Assento {e}</h1>
        ))}
      </Info>

      <Info>
        <span>Filme e sessão</span>
        <h1>Name: {order.seats.name}</h1>
        <h1>CPF: {order.seats.cpf}</h1>
      </Info>

      <BackHome onClick={() => navigate("/")}>Voltar pra Home</BackHome>
    </Container>
  );
}
