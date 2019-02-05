import React from 'react';
import './styles.scss';

export default class DblRange extends React.Component {

    state = {
        rng1: 0,
        rng2: 100,
        minRng: 100,
        maxRng: 0
    }

    handleRange = (e) => {
        const value = e.target.value;

        const numbCurrent = e.target.dataset.rng;
        const numbOther = numbCurrent == 1 ? 2 : 1;
        
        const step = 1;

        if (value > this.state[numbOther]) { 
            this.setState({
                [`rng${numbCurrent}`]: value,
                maxRng: value * step,
                minRng: this.state[numbOther]
            });
        }
        else { 
            this.setState({
                [`rng${numbCurrent}`]: value,
                minRng: value * step,
                maxRng: this.state[numbOther]
            }); 
        }
        
    }
 

    render() {
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
