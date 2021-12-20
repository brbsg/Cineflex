import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

export const Session = styled.div`
  display: flex;
  overflow: auto;

  flex-wrap: wrap;
  width: 375px;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin: 20px;

  span {
    margin-top: 20px;
    margin-bottom: 20px;

    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;

    color: #293845;
  }
`;
export const TimeButton = styled.button`
  align-items: center;
  justify-content: center;
  border: none;
  margin: 0;

  width: 83px;
  height: 43px;

  background: #e8833a;
  border-radius: 3px;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.02em;

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
