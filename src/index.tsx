import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import App from './App';

createServer({
  models: {
    work: Model,
  },

  seeds(server) {
    server.db.loadData({
      works: [
        {
          id: 1,
          email: 'email',
          adress: 'adress',
          services: 'services',
          date: 'date'
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/works', () => {
      return this.schema.all('work')
    })

    this.post('/works', (schema, request) => {
        const data = JSON.parse(request.requestBody)
        return schema.create('work', data)
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);