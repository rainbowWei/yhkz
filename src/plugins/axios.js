import Vue from 'vue'
import nativeAxios from 'axios'

const IS_DEV = process.env.NODE_ENV === 'development'
let config = {
  headers: {
    'Content-Type': 'application/json;charset=utf8'
  },
  baseURL: IS_DEV ? `http://dongju.tech` : `http://dongju.tech`
}

const _axios = nativeAxios.create(config)

_axios.interceptors.request.use(function (config) {
  if (config.method === 'get') {
    if (!config.params) {
      config.params = {}
    }
    config.params[`_t`] = Date.now()
    Object.keys(config.params).forEach(key => {
      if (!config.params[key] && config.params[key] !== 0) {
        Reflect.deleteProperty(config.params, key)
      }
    })
  }
  // Do something before request is sent
  return config
})

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    if (response.data) {
      return response.data
    } else {
      return response
    }
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

Plugin.install = function (Vue, options) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return _axios
      }
    },
    $axios: {
      get () {
        return _axios
      }
    }
  })
}
Vue.use(Plugin)

export default _axios
export const axios = Plugin
