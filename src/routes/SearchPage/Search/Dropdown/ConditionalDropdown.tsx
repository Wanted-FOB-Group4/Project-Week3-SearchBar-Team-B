import { useAppSelector } from 'hooks'
import { getCategory } from 'states/dropdown'
import { IDiseaseDataItem } from 'types/types'
import RecommendItem from './RecommendItem'
import SearchLogItem from './SearchLogItem'

interface ISortedItem {
  correctness: number
  distance: number
  highlighted: number[]
  sickNm: string
  sickCd?: string
}

interface IProps {
  sortedData: ISortedItem[]
  focusedIndex: number
  diseaseData: IDiseaseDataItem[]
}

const ConditionalDropdown = ({ sortedData, diseaseData, focusedIndex }: IProps) => {
  const category = useAppSelector(getCategory)
  if (category !== 'searchLog') {
    if (sortedData.length === 0) return <p>검색어 없음.</p>
    return (
      <ul>
        {sortedData.map((item, index) => (
          <RecommendItem
            key={item.sickCd}
            value={item.sickNm}
            highlighted={item.highlighted}
            id={index}
            focused={index === focusedIndex}
          />
        ))}
      </ul>
    )
  }
  if (diseaseData.length === 0) return <p>검색기록 없음.</p>
  return (
    <ul>
      {diseaseData.map((item, index) => (
        <SearchLogItem key={item.sickNm} value={item.sickNm} focused={index === focusedIndex} />
      ))}
    </ul>
  )
}

export default ConditionalDropdown
