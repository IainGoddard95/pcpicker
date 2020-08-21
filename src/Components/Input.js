import React from 'react';

const Input = (props) => {

const listOptions = props.options.map(x => <option key={Math.random()} value={x.name}>{x.name}</option>);
    
    return (
        <div>
            <label>{props.name}</label>
            <select>
                {listOptions}
            </select>
        </div>
    );
};


export default Input