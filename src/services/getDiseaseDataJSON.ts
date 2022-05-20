import axios from 'axios'

export const getDiseaseDataJSON = () => axios.get('/dissNameCodeList.json')
