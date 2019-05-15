import React from 'react'

import Articles from './Articles'

const ArticleContainer = (props) => {


    return (
        <React.Fragment>
            <Articles {...props}/>
        </React.Fragment>
    );
}
 
export default ArticleContainer;