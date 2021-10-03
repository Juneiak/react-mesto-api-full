import { apiOptions } from "./constants";

const checkResponse = res => {
  try {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(res.status)
  } catch(err) {return Promise.reject(err)}
}

export const register = (email, password) => {
  return fetch(`${apiOptions.baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({password, email})
  })
    .then(response => checkResponse(response))
}

export const login = (email, password) => {
  return fetch(`${apiOptions.baseUrl}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({password, email})
  })
    .then(response => checkResponse(response))
}

export const checkToken = token => {
  return fetch(`${apiOptions.baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      "Content-type": "application/json",
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => checkResponse(response))
}