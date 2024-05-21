import { EMAIL_USER, PASSWORD_USER } from "../constants";
import inceptiaApi from "../inceptiaApi";


export const getToken = async () => {
  try {
    const response = await inceptiaApi.post('/login/', {
      email: EMAIL_USER,
      password: PASSWORD_USER,
    });

    if (!response) throw new Error(`HTTP - error: ${response}`);

    const { data } = response;

    // Almacenar el token en localStorage
    localStorage.setItem('token', data.token);

    return { status: true };
  } catch (e) {
    console.error('Error in getToken: ', e);
    return { status: false, error: e };
  }
};