import React, { Component } from 'react';
import hamburgerMenuImage from './hamburger.svg'
class Hamburger extends Component {
    constructor(){
        super()
        this.state={

        }
    }
  
    render() { 
        return (
        <button><img src={hamburgerMenuImage} alt=""/></button>
        );
    }
}
 
export default Hamburger;