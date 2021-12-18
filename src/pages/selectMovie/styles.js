import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-top: 67px;
  padding-bottom: 117px;
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
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 30px;
`;

export const Button = styled.button`
  border: none;
  width: 145px;
  height: 209px;

  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  background-image: url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: 129px 193px;
  background-position: center;
`;

export const Img = styled.img`
  width: 129px;
  height: 193px;
`;
