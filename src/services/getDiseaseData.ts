import axios from 'axios'

export const getDiseaseData = (searchText: string) =>
  axios.get('/getDissNameCodeList', {
    params: {
      serviceKey: process.env.REACT_APP_API_KEY,
      searchText,
      numOfRows: 1000,
      medTp: 2,
      sickType: 1,
    },
  })
