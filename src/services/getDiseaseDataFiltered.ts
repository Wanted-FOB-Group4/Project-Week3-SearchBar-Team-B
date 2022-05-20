import axios from 'axios'

import { IDiseaseDataItem } from 'types/types'
import { fuzzyMatchingRegExp } from 'utils'

export const getDiseaseDataFiltered = (searchText: string) =>
  axios.get('/dissNameCodeList.json').then((response) => {
    const fuzzyRegExpString = fuzzyMatchingRegExp(searchText)
    const fuzzyRegExp = new RegExp(fuzzyRegExpString)
    return response.data.response.body.items.item.filter((item: IDiseaseDataItem) => item.sickNm.match(fuzzyRegExp))
  })
