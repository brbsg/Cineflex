import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-top: 67px;
  padding-bottom: 117px;

  .selecionado {
    background-color: #8dd7cf;
    border-color: #45bdb0;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 375px;
  height: 102px;

  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: #293845;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-row-gap: 17px;
  margin: 20px;
`;

export const Seat = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 26px;
  border-radius: 100%;
  background-color: #c3cfd9;
  border: 1px solid #808f9d;
  box-sizing: border-box;

  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.04em;

  color: #000000;
`;

export const Label = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    justify-content: center;

    width: 25px;
    height: 25px;

    border: 1px solid;
    box-sizing: border-box;
    border-radius: 17px;

    span {
      padding-top: 33px;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 15px;

      letter-spacing: -0.013em;

      color: #4e5a65;
    }
  }
`;

export const CostumerInfo = styled.div`
  width: 327px;
  height: 60;
  padding-top: 33px;

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #293845;
  }

  input {
    width: 327px;
    height: 51px;

    background: #ffffff;
    border: 1px solid #d5d5d5;

    border-radius: 3px;

    font-style: italic;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #afafaf;
  }
`;

export const CostumerName = styled.div`
  padding-top: 5px;
`;

export const CostumerCPF = styled.div`
  padding-top: 10px;
`;

export const BookOrder = styled.button`
  border: none;
  width: 225px;
  height: 42px;
  background: #e8833a;
  border-radius: 3px;

  margin-top: 10%;

  justify-content: center;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: #ffffff;
`;

export const Img = styled.div`
  border: none;
  margin: 0;
  width: 64px;
  height: 89px;
  margin-left: 10px;

  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  background-image: url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: 48px 72px;
  background-position: center;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  bottom: 0;
  width: 375px;
  height: 117px;

  background: #dfe6ed;
  border: 1px solid #9eadba;

  span {
    margin: 0;
    margin-left: 22px;

    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 30px;

    color: #293845;
  }
`;
export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
