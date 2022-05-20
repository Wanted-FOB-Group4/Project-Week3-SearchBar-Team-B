interface IProps {
  value: string
  highlighted: number[]
  id: number
}

const FuzzyMatch = ({ value, highlighted, id }: IProps) => {
  let highlightedIdx = 0
  return (
    <li>
      <p>
        {value.split('').map((element, idx) => {
          if (highlighted[highlightedIdx] === idx) {
            highlightedIdx += 1
            const key = `${element}-${id}- ${idx}`
            return <strong key={key}>{element}</strong>
          }
          return element
        })}
      </p>
    </li>
  )
}

export default FuzzyMatch
