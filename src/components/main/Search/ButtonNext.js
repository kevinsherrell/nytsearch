import React from 'react'
import {withData} from '../../../context/dataProvider'
import {Link, animateScroll as scroll} from 'react-scroll'
const ButtonPrevious = (props)=>{
    return (
        <Link to='home' smooth={true} offset={0} duration={500}>
          <button className="next" onClick={props.handlePageUp}>
            Next
          </button>
        </Link>
    )
}

export default withData(ButtonPrevious)