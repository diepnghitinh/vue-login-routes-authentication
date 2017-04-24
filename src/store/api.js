import axios from 'axios';

const URL = process.env.NODE_ENV === 'production' ? 'http://localhost:3001/' : 'http://localhost:3001/';

export default {
  getTeachers(state, URI, cb) {
    axios.get(URL + URI)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          cb(res.data);
        }
      })
      .catch(error => Promise.reject(error));
  }
};
