import React from 'react'
import {withData} from '../../../context/dataProvider'
const ButtonPrevious = (props)=>{
    return (
        <button className="previous" onClick={props.handlePageDown}>
          Previous
        </button>
    )
}
export default withData(ButtonPrevious)