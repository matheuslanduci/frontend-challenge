import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { countriesAPI, placesAPI } from "./services/api";
import * as uuid from "uuid";

import Logo from "./assets/Logo.png";

import GlobalStyle from "./styles/GlobalStyle";

import {
  Container,
  Form,
  FormContainer,
  Header,
  Select,
  Input,
  InputMask,
  Button,
  Grid
} from "./styles/App";
import PlaceItem from "./components/PlaceItem";

type Place = {
  id: string;
  country: string;
  place: string;
  goal: string;
  flag: string;
};

type Country = {
  value: string;
  displayValue: string;
  flag: string;
};

type ResponseCountry = {
  name: string;
  flag: string;
  translations: {
    pt: string;
  };
};

const App = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    value: "",
    displayValue: "Selecione... ",
    flag: "none"
  });
  const [place, setPlace] = useState<string>("");
  const [goal, setGoal] = useState<string>("");

  useEffect(() => {
    countriesAPI.get("/").then(response => {
      let tempCountries: Country[] = [];
      response.data.forEach((country: ResponseCountry) => {
        tempCountries.push({
          value: country.name,
          displayValue: country.translations.pt,
          flag: country.flag
        });
      });

      setCountries(tempCountries);
    });

    placesAPI.get("/").then(response => {
      let tempPlaces: Place[] = [];
      response.data.forEach((place: Place) => {
        tempPlaces.push(place);
      });

      setPlaces(tempPlaces);
    });
  }, []);

  const handleChangeCountry = (event: ChangeEvent<{ value: string }>) => {
    setSelectedCountry(countries.find(c => c.value === event.target.value)!);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (selectedCountry.value === "") {
      return alert("Valor de país inválido! Selecione um país válido.");
    }

    let newPlace: Place = {
      id: uuid.v4(),
      country: selectedCountry.displayValue,
      flag: selectedCountry.flag,
      place,
      goal
    };

    placesAPI.post("/", newPlace).then(() => setPlaces([...places, newPlace]));
  };

  const handleDelete = (id: string) => {
    placesAPI
      .delete(`/${id}`)
      .then(() => setPlaces(places => places.filter(place => place.id !== id)));
  };

  const handleUpdate = (id: string, place: string, goal: string) => {
    const actualPlace = places.find(place => place.id === id);
    const actualPlaceIndex = places.findIndex(place => place.id === id);

    if (actualPlace) {
      const newPlace: Place = {
        id: actualPlace.id,
        country: actualPlace.country,
        flag: actualPlace.flag,
        place,
        goal
      };

      placesAPI.put(`/${id}`, newPlace).then(() => {
        const actualPlaces = places;
        actualPlaces[actualPlaceIndex].goal = goal;
        actualPlaces[actualPlaceIndex].place = place;
        setPlaces([...actualPlaces]);
      });
    } else {
      alert("Houve um erro na aplicação. Recarregue a página.");
    }
  };

  return (
    <Container>
      <GlobalStyle />
      <Header>
        <img src={Logo} alt="Lugares que eu quero conhecer" />
      </Header>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <div className="input-field">
            <label className="input-label">País</label>
            <Select
              value={selectedCountry.value}
              onChange={handleChangeCountry}
            >
              <option disabled value="">
                Selecione...
              </option>
              {countries.map(country => (
                <option key={country.value} value={country.value}>
                  {country.displayValue}
                </option>
              ))}
            </Select>
          </div>
          <div className="input-field">
            <label className="input-label">Local</label>
            <Input
              type="text"
              placeholder="Digite o local que deseja conhecer"
              value={place}
              onChange={e => setPlace(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label className="input-label">Meta</label>
            <InputMask
              mask="99/9999"
              maskPlaceholder="_"
              placeholder="mês/ano"
              value={goal}
              onChange={e => setGoal(e.target.value)}
            />
          </div>
          <Button>Adicionar</Button>
        </Form>
      </FormContainer>
      <Grid>
        {places.map(place => (
          <PlaceItem
            key={place.id}
            country={place.country}
            flag={place.flag}
            goal={place.goal}
            place={place.place}
            deleteCallback={() => handleDelete(place.id!)}
            updateCallback={(pl, go) => handleUpdate(place.id!, pl, go)}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default App;
