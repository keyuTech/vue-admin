import $axios from '../server';
import qs from 'qs';

export function loginByUsername(username, password) {
  const data = qs.stringify({
    username,
    password
  })
  console.log(data)
  return $axios({
    url: '/api/v1/login',
    methods: 'post',
    data
  })
}
