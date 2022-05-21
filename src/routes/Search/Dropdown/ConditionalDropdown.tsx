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
  closeDropdown: () => void
}

const ConditionalDropdown = ({ sortedData, diseaseData, focusedIndex, closeDropdown }: IProps) => {
  const category = useAppSelector(getCategory)
  if (category !== 'searchLog') {
    return (
      <ul>
        {sortedData.map((item, index) => (
          <RecommendItem
            key={item.sickCd}
            value={item.sickNm}
            highlighted={item.highlighted}
            id={index}
            focused={index === focusedIndex}
            closeDropdown={closeDropdown}
          />
        ))}
      </ul>
    )
  }
  return (
    <ul>
      {diseaseData.map((item, index) => (
        <SearchLogItem
          key={item.sickNm}
          value={item.sickNm}
          focused={index === focusedIndex}
          closeDropdown={closeDropdown}
        />
      ))}
    </ul>
  )
}

export default ConditionalDropdown
