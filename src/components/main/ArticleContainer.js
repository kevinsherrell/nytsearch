import React from 'react'

import Articles from './Articles'

const ArticleContainer = (props) => {


    return (
        <div>
            <Articles {...props}/>
        </div>
    );
}
 
export default ArticleContainer;