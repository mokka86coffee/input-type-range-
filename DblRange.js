import React from 'react';
import './dblrange.scss';

export default class DblRange extends React.Component {

    state = {
        rng1: 0,
        rng2: 100,
        minRng: 0,
        maxRng: 0,
        step: 10,

        array: [],
        range: [],

        rangeLineStart: 0,
        rangeLineEnd: 100
    }

    componentDidMount () {
        const array = this.props.array || [1,6,100];
        const minRng = Math.min(...array);
        const maxRng = Math.max(...array);
        const step = Math.round(maxRng / 70);

        this.setState({
            array,
            minRng,
            maxRng,
            step
        });
    }

    handleRange = (e) => {
        const value = parseInt(e.target.value);

        const numbCurrent = e.target.dataset.rng;
        const numbOther = numbCurrent == 1 ? 2 : 1;
        
        let { step, array, minRng, maxRng, rangeLineStart, rangeLineEnd } = this.state;

        if (value > this.state[`rng${numbOther}`]) { 
            maxRng = value * step;
            rangeLineStart = this.state[`rng${numbOther}`];
            rangeLineEnd = value;
        }
        else { 
            minRng = value * step;
            rangeLineStart = value;
            rangeLineEnd = this.state[`rng${numbOther}`];
        }

        const range = array.filter(el=> el >= minRng && el <= maxRng);

        this.setState({
            [`rng${numbCurrent}`]: value,
            minRng,
            maxRng,
            rangeLineStart,
            rangeLineEnd,
            range
        });

    }
 

    render() {
        const { rangeLineStart, rangeLineEnd, minRng, maxRng, step, range } = this.state;
        return (
            <div className="range-wrap">
                <ul className = "range-values">
                    <li> Min. - {minRng}</li>
                    <li> Max. - {maxRng}</li>
                    <li> Step. - {step}</li>
                    <li> Range. - {range.toString()}</li>
                </ul>
                <div 
                    style = {{
                        left: `${rangeLineStart}%`,
                        width: `${rangeLineEnd - rangeLineStart}%`
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
