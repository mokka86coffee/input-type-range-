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
        const array = this.props.array || [0.501,1.556,0.558,0.55101,55000];
        const minRng = Math.min(...array);
        const maxRng = Math.max(...array);
        const step = ((maxRng-minRng) / 90);

        this.setState({
            array,
            minRng,
            maxRng,
            step
        });
    }

    handleRange = (e) => {
        let { step, array, minRng, maxRng, rangeLineStart, rangeLineEnd } = this.state;
        const value = parseInt(e.target.value);

        const numbCurrent = e.target.dataset.rng;
        const numbOther = numbCurrent == 1 ? 2 : 1;
        

        if (value > this.state[`rng${numbOther}`]) { 
            maxRng = value * step;
            rangeLineStart = this.state[`rng${numbOther}`];
            rangeLineEnd = value;
        }
        else { 
            minRng = value * step || Math.min(...array);
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
                    <li> Min. - {minRng.toFixed(3)}</li>
                    <li> Max. - {maxRng.toFixed(3)}</li>
                    <li> Step. - {step.toFixed(3)}</li>
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
