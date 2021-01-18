import styled from "styled-components";
import InputWithMask from "react-input-mask";

export const Container = styled.div`
  position: relative;
  width: 250px;
  height: 250px;

  display: flex;
  flex-direction: column;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  .flag {
    margin-top: 26px;
    margin-left: 14px;
    width: 56px;
    height: 34px;
  }

  .country-name {
    margin-top: 16px;
    margin-left: 14px;
    color: #4f9419;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    text-transform: uppercase;
  }

  .line {
    margin-top: 9px;
    width: 231px;
    border-top: 1px solid #ababab;
  }

  .place {
    margin-top: 43px;
    margin-left: 26px;
    line-height: 18.75px;
  }

  .goal {
    margin-top: 11px;
    margin-left: 26px;
    line-height: 18.75px;
  }

  .delete {
    position: absolute;
    top: 15px;
    right: 11px;
    cursor: pointer;

    &:hover path {
      fill: #ff8c69;
    }
  }

  .update {
    position: absolute;
    top: 17px;
    right: 51px;
    cursor: pointer;

    &:hover path {
      fill: #3bb6d9;
    }
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
`;

export const Modal = styled.div`
  position: relative;
  margin: 64px auto;
  padding: 0 26px;
  width: 480px;
  height: 360px;

  display: flex;
  flex-direction: column;

  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 10px;

  .close {
    position: absolute;
    top: 16px;
    right: 24px;
    cursor: pointer;

    &:hover path {
      fill: #ff8c69;
    }
  }

  .title {
    margin-top: 24px;
    color: #4f9419;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    text-transform: uppercase;
  }

  .info-row {
    margin-top: 36px;
    display: flex;
    align-items: center;

    .flag {
      margin-right: 16px;
      width: 56px;
      height: 34px;
    }
  }

  @media (max-width: 425px) {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: unset;
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  @media (max-width: 375px) {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: unset;
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  @media (max-width: 320px) {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: unset;
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
`;

export const Input = styled.input`
  margin-top: 24px;
  padding-left: 12px;
  width: 100%;
  height: 48px;

  border: 1px solid #ababab;
  border-radius: 7px;
  box-sizing: border-box;
  color: #000;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 18.75px;

  &:active,
  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: #868686;
  }
`;

export const InputMask = styled(InputWithMask)`
  margin-top: 24px;
  padding-left: 12px;
  width: 100%;
  height: 48px;

  border: 1px solid #ababab;
  border-radius: 7px;
  box-sizing: border-box;
  color: #000;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 18.75px;

  &:active,
  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: #868686;
  }
`;

export const Button = styled.button`
  margin-top: 24px;
  width: 100%;
  height: 48px;

  background: #006c18;
  border: 0;
  border-radius: 7px;
  color: #fff;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-size: 18px;
`;
