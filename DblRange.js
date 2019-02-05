import React from 'react';
import './dblrange.scss';

export default class DblRange extends React.Component {

    state = {
        rng1: 0,
        rng2: 100,
        minRng: 0,
        maxRng: 100
    }

    handleRange = (e) => {
        const value = parseInt(e.target.value);

        const numbCurrent = e.target.dataset.rng;
        const numbOther = numbCurrent == 1 ? 2 : 1;
        
        const step = 1;

        if (value > this.state[`rng${numbOther}`]) { 
            this.setState({
                [`rng${numbCurrent}`]: value,
                minRng: this.state[`rng${numbOther}`],
                maxRng: value * step
            });
        }
        else { 
            this.setState({
                [`rng${numbCurrent}`]: value,
                minRng: value * step,
                maxRng: this.state[`rng${numbOther}`]
            }); 
        }
        
    }

    render() {
        console.log(this.state);
        return (
            <div className="wrap-range">
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
                <div className="range-line"></div>
            </div>
        )
    }
}
