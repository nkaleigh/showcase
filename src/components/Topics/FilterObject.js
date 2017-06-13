import React, { Component } from 'react';

export default class FilterObject extends Component{
    constructor() {
        super();
        this.state = {
            unFilteredArray: ['dog', 'cat', 'horse'],
            userInput: [],
            filteredArray: []
        }
    }

    userInput(val) {
        this.setState({userInput: val})
    }

    solveProblem() {

    }

    render() {
        return (
           <div className="puzzleText">
           <h4 value="Filter Object"></h4>
           <span className="inputLine">{ JSON.stringify(this.state.unFilteredArray) }</span>
           <input className="inputLine" onChange={(e)=>userInput(e.target.value)}/>
           <button className="confirmationButton" onClick={()=>solveProblem()}></button>
           <span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.filteredArray) }</span>
           </div>
        )
    }
}