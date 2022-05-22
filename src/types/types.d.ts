interface IDiseaseData {
  response: {
    header: {
      resultCode: string
      resultMsg: string
    }
    body: {
      items: {
        item: IDiseaseDataItem[]
      }
      numOfRows: number
      pageNo: number
      totalCount: number
    }
  }
}

interface IDiseaseDataItem {
  sickCd?: string
  sickNm: string
}

export { IDiseaseData, IDiseaseDataItem }
