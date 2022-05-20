import { makeMarkedString } from './makeMarkedString'
import { IDiseaseDataItem } from 'types/types'

interface IProps {
  data: IDiseaseDataItem[]
  fuzzyRegExpString: string
  searchValue: string
}

export const sortFuzzyData = ({ data, fuzzyRegExpString, searchValue }: IProps) => {
  return data
    .map((item) => {
      const result = makeMarkedString(item, fuzzyRegExpString, searchValue)
      return {
        ...item,
        ...result,
      }
    })
    .sort((a, b) => {
      if (a.correctness < b.correctness) return 1
      if (a.correctness > b.correctness) return -1
      if (a.distance < b.distance) return -1
      return 1
    })
}
