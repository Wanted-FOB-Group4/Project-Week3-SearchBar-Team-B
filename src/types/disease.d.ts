interface IHeader {
  resultCode: string
  resultMsg: string
}

interface IBody {
  items: IItem
  numOfRows: number
  pageNo: number
  totalCount: number
}

interface IItem {
  item: IDisease[]
}

interface IDisease {
  sickCd: string
  sickNm: string
}

export interface IDiseaseApiRes {
  header: IHeader
  body: IBody
}
