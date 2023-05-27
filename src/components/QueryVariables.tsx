import React, {useState} from 'react';
import './QueryVariables.scss';

interface IQueryVariables {
    vars: Array<[string, string]>;
    setvar: React.Dispatch<React.SetStateAction<(Array<[string, string]>)>>;
}

function QueryVariables({ vars, setvar }: IQueryVariables) {
    const [isClosed, setCloled] = useState(false);
    return (
        <div style={{'height': isClosed ? '70px' : '100%'}} className="queryvariables">
            <div className="queryvariables__header">
                <h3 className='queryvariables__name'>Variables</h3>
                <button 
                    className='queryvariables__add' 
                    onClick={() => {
                        const newvars = [...vars, ["", ""]]
                        setvar([...vars, ["", ""]])
                    }}
                >
                    Add variable
                </button>
                <button 
                    className='queryvariables__close'
                    onClick={() => {setCloled(!isClosed)}}
                >
                    {isClosed ? 'Open' : 'Close'}
                </button>
            </div>
            <div style={{'display': isClosed ? "none" : "flex"}} className="queryvariables__main">
                {
                    vars.map((el, i) => (
                        <div key={i} className="queryvariable">
                            <input 
                                className='queryvariable__name'
                                type="text" 
                                value={el[0]}
                                onChange={(str) => {
                                    const newvars = Array.from(vars)
                                    newvars[i][0] = str.currentTarget.value;
                                    setvar(newvars)
                                }}>    
                            </input>
                            <input 
                                className='queryvariable__value'
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

export default QueryVariables;