import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import FrontPageNews from './FrontPageNews'
import Results from './Results'

class Main extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                <Switch>
                    <Route exact path='/' component={FrontPageNews}/>
                    <Route exact path='/results' component={Results}/>
                </Switch>
            </React.Fragment>
        );
    }
}
 
export default Main;