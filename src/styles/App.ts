import styled from "styled-components";
import InputWithMask from "react-input-mask";

export const Container = styled.div`
  font-family: Roboto, sans-serif;
`;

export const Header = styled.header`
  padding-left: 53px;
  background: #000000;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 425px) {
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 375px) {
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 320px) {
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FormContainer = styled.div`
  padding: 60px 72px 73px 72px;
  width: 100%;
  height: 247px;
  background: #4f9419;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    height: 460px;
  }

  @media (max-width: 768px) {
    height: 480px;
  }

  @media (max-width: 425px) {
    height: 480px;
  }

  @media (max-width: 375px) {
    height: 460px;
  }

  @media (max-width: 320px) {
    height: 440px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  .input-field {
    display: flex;
    flex-direction: column;

    label {
      margin-left: 2px;
      margin-bottom: 3px;
      line-height: 18.75px;
    }
  }

  @media (max-width: 1024px) {
    height: 100%;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    height: 100%;
    flex-direction: column;
  }

  @media (max-width: 425px) {
    height: 100%;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    height: 100%;
    flex-direction: column;
  }

  @media (max-width: 320px) {
    height: 100%;
    flex-direction: column;
  }
`;

export const Select = styled.select`
  padding-left: 15px;
  width: 303px;
  height: 48px;

  border: 0;
  border-radius: 7px;
  color: #868686;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 18.75px;

  &:active,
  &:focus {
    outline: 0;
  }

  @media (max-width: 425px) {
    width: 280px;
  }

  @media (max-width: 375px) {
    width: 260px;
  }

  @media (max-width: 320px) {
    width: 240px;
  }
`;

export const Input = styled.input`
  padding-left: 18px;
  width: 455px;
  height: 48px;

  border: 0;
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

  @media (max-width: 768px) {
    width: 360px;
  }

  @media (max-width: 425px) {
    width: 320px;
  }

  @media (max-width: 375px) {
    width: 300px;
  }

  @media (max-width: 320px) {
    width: 240px;
  }
`;

export const InputMask = styled(InputWithMask)`
  padding-left: 12px;
  width: 238px;
  height: 48px;

  border: 0;
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

  @media (max-width: 375px) {
    width: 260px;
  }
`;

export const Button = styled.button`
  margin-top: 21px;
  width: 203px;
  height: 48px;

  background: #006c18;
  border: 0;
  border-radius: 7px;
  color: #fff;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-size: 18px;
`;

export const Grid = styled.div`
  margin: 0 auto;
  margin-top: 56px;
  margin-bottom: 200px;
  padding-left: 35px;
  padding-right: 35px;

  display: grid;
  grid-template-columns: repeat(5, 250px);
  grid-auto-rows: 250px;
  gap: 33px 30px;

  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
    grid-template-columns: repeat(3, 250px);
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    grid-template-columns: repeat(2, 250px);
    justify-content: center;
  }

  @media (max-width: 425px) {
    padding-left: 0;
    padding-right: 0;
    grid-template-columns: repeat(1, 250px);
    justify-content: center;
  }

  @media (max-width: 375px) {
    padding-left: 0;
    padding-right: 0;
    grid-template-columns: repeat(1, 250px);
    justify-content: center;
  }

  @media (max-width: 320px) {
    padding-left: 0;
    padding-right: 0;
    grid-template-columns: repeat(1, 250px);
    justify-content: center;
  }
`;
