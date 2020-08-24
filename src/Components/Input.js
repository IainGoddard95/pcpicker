import React from 'react';

const Input = (props) => {

const listOptions = props.options.map(x => <button key={x.name} onClick={() => props.selectionHandler(x)}>{x.name}</button>);
    
    return (
        <div>
            <h1>{props.name}</h1>        
                {listOptions}
        </div>
    );
};


export default Input