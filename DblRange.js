import React from 'react';
import './dblrange.scss';

export default class DblRange extends React.Component {

    state = {
        rng1: 0,
        rng2: 100,
        minRng: 0,
        maxRng: 100,

        rangeStart: 0,
        rangeEnd: 100
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
                maxRng: value * step,
                rangeStart: this.state[`rng${numbOther}`],
                rangeEnd: value,
            });
        }
        else { 
            this.setState({
                [`rng${numbCurrent}`]: value,
                minRng: value * step,
                maxRng: this.state[`rng${numbOther}`],
                rangeStart: value,
                rangeEnd: this.state[`rng${numbOther}`],
            }); 
        }
        
    }
 

    render() {
        const { rangeStart, rangeEnd } = this.state;
        return (
            <div className="range-wrap">
                <div 
                    style = {{
                        left: `${rangeStart}%`,
                        width: `${rangeEnd - rangeStart}%`
                    }}
                    className ="range-line"
                >
                </div>
                <input 
                    data-rng={1}
                    onChange={this.handleRange}
                    className="input_range--first"
                    type="range"
                    value={this.state.rng1} 
                />
                <input 
                    data-rng={2}
                    onChange={this.handleRange}
                    className="input_range--second"
                    type="range" 
                    value={this.state.rng2} 
                />
            </div>
        )
    }
}
