import React from "react";
import {withData} from '../../../context/dataProvider'
const ButtonNext = props => {
  return (
    <button className="next" onClick={props.handlePageUp}>
      Next
    </button>
  );
};
export default withData(ButtonNext)