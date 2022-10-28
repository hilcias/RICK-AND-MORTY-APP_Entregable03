import React from 'react'

const FilterList = ({suggestedList, setSeachInput}) => {

    console.log(suggestedList)

const handleClick = id => setSeachInput(id)   

    return (
    <ul>
        {
            suggestedList?.map(location => {
                <li onClick={() => handleClick(location.id)} key={location.id}>{location.id} {location.
                name}</li>
            })
        }
    </ul>
  )
}

export default FilterList