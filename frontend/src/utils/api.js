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
    const token = localStorage.getItem('jwt')
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkStatus)
  };

  getInitialCards() {
    const token = localStorage.getItem('jwt')
    return fetch(`${this._options.baseUrl}/cards`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkStatus)
  };

  editPrifile(dataForEdit) {
    const token = localStorage.getItem('jwt')
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: dataForEdit['name'],
        about: dataForEdit['about']
      })
    })
      .then(this._checkStatus)
  }

  addCard(dataForAdd) {
    const token = localStorage.getItem('jwt')
    return fetch(`${this._options.baseUrl}/cards`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: dataForAdd['name'],
        link: dataForAdd['link']
      })
    })
      .then(this._checkStatus)
  }

  deleteCard(cardId) {
    const token = localStorage.getItem('jwt')
    return fetch(`${this._options.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkStatus)
      
  };
  
  likeStatus(cardId, likeStatus) {
    const token = localStorage.getItem('jwt')
    const method = likeStatus ? 'PUT' : 'DELETE';
    
    return fetch(`${this._options.baseUrl}/cards/${cardId}/likes`, {
      method: method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkStatus)
  }

  changeAvatar(newAvatarUrl) {
    const token = localStorage.getItem('jwt')
    return fetch(`${this._options.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: newAvatarUrl
      })
    })
      .then(this._checkStatus)
  };
  
};

const api = new Api(apiOptions);
export default api;
