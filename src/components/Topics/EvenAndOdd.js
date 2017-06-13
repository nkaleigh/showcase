import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    assignEvenAndOdds(val) {
        this.setState({evenArray: val
            .split('')
            .filter((val) => {
                return val % 2 === 0
            })
        })
        this.setState({oddArray: val
            .split('')
            .filter((val) => {
                return val !== ',' && val % 2 !== 0
            })
        })
    }


    handleChange(val) {
        this.setState({userInput: val});
    }

    render() {
        return ( 
        < div className = "puzzleBox evenAndOddPB" > 
        <h4>Evens and Odds</h4> 
        <input className = "inputLine" onChange = {
            e => this.handleChange(e.target.value)
        } />
        <button className = "confirmationButton" onClick = {
            () => this.assignEvenAndOdds(this.state.userInput)}>Split</button>
        <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) }</span> 
        <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span> < /div>
        )
    } 
}