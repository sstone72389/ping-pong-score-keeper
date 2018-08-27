import axios from 'axios';
import { REGISTER_USER, LOGIN_USER, ADD_PLAYER, FETCH_ROSTER } from './types';

const URL = 'https://players-api.developer.alchemy.codes/api';

export const registerUser = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}) => async (dispatch) => {
  const newUser = {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    confirm_password: confirmPassword,
  };

  try {
    const res = await axios.post(`${URL}/user`, newUser);
    dispatch({ type: REGISTER_USER, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = ({ email, password }) => async (dispatch) => {
  const user = {
    email,
    password,
  };

  try {
    const res = await axios.post(`${URL}/login`, user);
    dispatch({ type: LOGIN_USER, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const addPlayer = ({
  firstName,
  lastName,
  rating,
  handedness,
}, token) => async (dispatch) => {
  const player = {
    first_name: firstName,
    last_name: lastName,
    rating,
    handedness,
  };

  const authConfig = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const res = await axios.post(`${URL}/players`, player, authConfig);
    dispatch({ type: ADD_PLAYER, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const fetchPlayers = token => async (dispatch) => {
  const authConfig = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const res = await axios.get(`${URL}/players`, authConfig);
    dispatch({ type: FETCH_ROSTER, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
