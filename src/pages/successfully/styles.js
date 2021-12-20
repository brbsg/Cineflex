import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-top: 67px;
  padding-bottom: 117px;
  padding: 20px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 375px;
  height: 102px;
  padding-right: 100px;
  padding-left: 100px;

  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: #247a6b;
`;

export const Info = styled.div`
  height: 110px;
  width: 100%;
  padding: 20px;

  span {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    color: #293845;
  }
  h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    color: #293845;
  }
`;

export const BackHome = styled.button`
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
