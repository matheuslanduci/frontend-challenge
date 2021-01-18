import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Input,
  InputMask,
  Modal,
  ModalWrapper
} from "./styles";

type Props = {
  flag: string;
  country: string;
  place: string;
  goal: string;
  deleteCallback(): void;
  updateCallback(place: string, goal: string): void;
};

const PlaceItem: React.FC<Props> = props => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const { flag, country, place, goal, deleteCallback, updateCallback } = props;
  const [newPlace, setNewPlace] = useState<string>(place);
  const [newGoal, setNewGoal] = useState<string>(goal);

  useEffect(() => {
    setNewPlace(place);
    setNewGoal(goal);

    if (isOpened) {
      document.body.style.overflow = "hidden";
      window.scrollTo({ left: 0, top: 0 });
    } else {
      document.body.style.overflow = "auto";
    }
  }, [goal, place, isOpened]);

  return (
    <>
      <Container>
        <img src={flag} alt={`Bandeira de ${country}`} className="flag" />
        <span className="country-name">{country}</span>
        <hr className="line" />
        <span className="place">Local: {place}</span>
        <span className="goal">Meta: {goal}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="delete"
          onClick={deleteCallback}
        >
          <path
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            fill="#868686"
          />
        </svg>
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="update"
          onClick={() => setIsOpened(true)}
        >
          <path
            d="M2.25 13.6562V16.625H5.0625L13.3575 7.86916L10.545 4.90041L2.25 13.6562ZM15.5325 5.57333C15.825 5.26458 15.825 4.76583 15.5325 4.45708L13.7775 2.60458C13.485 2.29583 13.0125 2.29583 12.72 2.60458L11.3475 4.05333L14.16 7.02208L15.5325 5.57333Z"
            fill="#868686"
          />
        </svg>
      </Container>
      {isOpened && (
        <ModalWrapper>
          <Modal>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="close"
              onClick={() => setIsOpened(false)}
            >
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="#868686"
              />
            </svg>
            <span className="title">Alterar registro</span>
            <div className="info-row">
              <img src={flag} alt={`Bandeira de ${country}`} className="flag" />
              <span>País: {country}</span>
            </div>
            <Input
              type="text"
              placeholder="Digite o local que deseja conhecer"
              value={newPlace}
              onChange={e => setNewPlace(e.target.value)}
            />
            <InputMask
              mask="99/9999"
              maskPlaceholder="_"
              placeholder="mês/ano"
              value={newGoal}
              onChange={e => setNewGoal(e.target.value)}
            />
            <Button
              onClick={() => {
                updateCallback(newPlace, newGoal);
                setIsOpened(false);
              }}
            >
              Alterar
            </Button>
          </Modal>
        </ModalWrapper>
      )}
    </>
  );
};

export default PlaceItem;
