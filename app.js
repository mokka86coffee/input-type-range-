import React from 'react';
import './DblRange.scss';

export default class DblRange extends React.Component {

    state = {
        rng1: 0,
        rng2: 100,
        minRng: 100,
        maxRng: 0
    }

    handleRange = (e) => {
        const value = e.target.value;
        const rngOtherIndex = `rng${e.target.dataset.rng == 1 ? 1 : 2}`;
        
        const maxRng = value > this.state[rngOtherIndex] ? value : this.state.maxRng;
        const minRng = value < this.state[rngOtherIndex] ? value : this.state.minRng;
        
        this.setState({
            [`rng${e.target.dataset.rng}`]: value,
            maxRng,
            minRng
        });
    }
 

    render() {
        return (
            <div className="range">
                <input 
                    data-rng={1}
                    onChange={this.handleRange}
                    className="input_range_first"
                    type="range"
                    value={this.state.rng1} 
                />
                <input 
                    data-rng={2}
                    onChange={this.handleRange}
                    className="input_range_second"
                    type="range" 
                    value={this.state.rng2} 
                />
            </div>
        )
    }
}
