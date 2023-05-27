import React, { useState } from 'react';
import './QueryHeaders.scss';

interface IQueryHeaders {
    vars: Array<[string, string]>;
    setvar: React.Dispatch<React.SetStateAction<(Array<[string, string]>)>>;
}

function QueryHeaders({ vars, setvar }: IQueryHeaders) {
    const [isClosed, setCloled] = useState(false);
    return (
        <div style={{'height': isClosed ? '70px' : '100%'}} className="queryheaders">
            <div className="queryheaders__header">
                <h3 className='queryheaders__name'>Headers</h3>
                <button 
                    className='queryheaders__add' 
                    onClick={() => {
                        const newvars = [...vars, ["", ""]]
                        setvar([...vars, ["", ""]])
                    }}
                >
                    Add header
                </button>
                <button 
                    className='queryheaders__close'
                    onClick={() => {setCloled(!isClosed)}}
                >
                    {isClosed ? 'Open' : 'Close'}
                </button>
            </div>
            <div style={{'display': isClosed ? "none" : "flex"}} className="queryheaders__main">
                {
                    vars.map((el, i) => (
                        <div key={i} className="queryheader">
                            <input 
                                className='queryheader__name'
                                type="text" 
                                value={el[0]}
                                onChange={(str) => {
                                    const newvars = Array.from(vars)
                                    newvars[i][0] = str.currentTarget.value;
                                    setvar(newvars)
                                }}>    
                            </input>
                            <input 
                                className='queryheader__value'
                                type="text"
                                value={el[1]}
                                onChange={(str) => {
                                    const newvars = Array.from(vars)
                                    newvars[i][1] = str.currentTarget.value;
                                    setvar(newvars)
                                }}>
                            </input>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default QueryHeaders;