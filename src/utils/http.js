import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'

Vue.use(VueAxios, axios)

const http = {

  post: function (url, data, callback) {
    return axios({
      method: 'post',
      url,
      data: qs.stringify(data),
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then((response) => {
      if (callback) callback(response.data)
    })
  },

  get: function (url, params, callback) {
    return axios({
      method: 'get',
      url,
      params,
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then((response) => {
      if (callback) callback(response.data)
    })
  }

}

export default http
