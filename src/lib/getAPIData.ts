import { UserType } from '@/types/UserType'
import axios from 'axios'

export const getAPIData = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  const data = res.data
  JSON.stringify(data)
  return data
}

export async function getAPIDataIds() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  const data = res.data

  return data.map((d: UserType) => {
    return {
      params: {
        id: d.id.toString()
      }
    }
  })
}

export async function getUserDataById(id: string) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = res.data
  return convertJson(data)
}

const convertJson = (data: UserType) => {
  return JSON.stringify(data)
}

export async function getQiitaData() {
  const res = await axios.get('https://qiita.com/api/v2/items')
  const data = res.data
  JSON.stringify(data)
  return data
}

export async function getQiitaDataIds() {
  const res = await axios.get('https://qiita.com/api/v2/items')
  const data = res.data

  return data.map((d: UserType) => {
    return {
      params: {
        id: d.id.toString()
      }
    }
  })
}

export async function getQiitaPagesDataByIds(id: string[]) {
  const res = await axios.get(`https://qiita.com/api/v2/items/${id}`)
  const data = res.data
  return convertJson(data)
}

export async function getPortfolioData() {
  const res = await axios.get('/api/hello');
  const data = res.data 
  JSON.stringify(data)
  return data
}