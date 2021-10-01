import { apiOptions } from "./constants";

class Api {
  constructor(options) {
    this._options = options;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`Error: ${res.status}`)
    }
  }

  getUserProfileData() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: 'GET',
      headers: this._options.headers
    })
      .then(this._checkStatus)
  };

  getInitialCards() {
    return fetch(`${this._options.baseUrl}/cards`, {
      method: 'GET',
      headers: this._options.headers
    })
      .then(this._checkStatus)
  };

  editPrifile(dataForEdit) {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({
        name: dataForEdit['name'],
        about: dataForEdit['about']
      })
    })
      .then(this._checkStatus)
  }

  addCard(dataForAdd) {
    return fetch(`${this._options.baseUrl}/cards`, {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        name: dataForAdd['name'],
        link: dataForAdd['link']
      })
    })
      .then(this._checkStatus)
  }

  deleteCard(cardId) {
    return fetch(`${this._options.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._options.headers
    })
      .then(this._checkStatus)
      
  };
  
  likeStatus(cardId, likeStatus) {
    const method = likeStatus ? 'PUT' : 'DELETE';
    
    return fetch(`${this._options.baseUrl}/cards/likes/${cardId}`, {
      method: method,
      headers: this._options.headers
    })
      .then(this._checkStatus)
  }

  changeAvatar(newAvatarUrl) {
    return fetch(`${this._options.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({
        avatar: newAvatarUrl
      })
    })
      .then(this._checkStatus)
  };
  
};

const api = new Api(apiOptions);
export default api;
