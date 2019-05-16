import React from 'react'
import {withData} from '../../../context/dataProvider'
import {Link, animateScroll as scroll} from 'react-scroll'
const ButtonPrevious = (props)=>{
    return (
        <Link to='home' smooth={true} offset={0} duration={500}>
          <button style={{marginRight: '5px'}}className="previous" onClick={props.handlePageDown}>
            Previous
          </button>
        </Link>
    )
}

export default withData(ButtonPrevious)