import axios from "axios";

export const countriesAPI = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/all"
});

export const placesAPI = axios.create({
  baseURL: "http://localhost:3000/places"
});
