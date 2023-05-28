import React, {useState} from 'react';
import { Button } from "@mui/material";
import './QueryVariables.scss';
import useLanguage from 'hooks/useLanguage';

interface IQueryVariables {
    vars: Array<[string, string]>;
    setvar: React.Dispatch<React.SetStateAction<(Array<[string, string]>)>>;
}

function QueryVariables({ vars, setvar }: IQueryVariables) {
    const locale = useLanguage('graphqli');
    const [isClosed, setCloled] = useState(false);
    return (
        <section style={{height: isClosed ? '70px' : '100%', transition: "height 0.7s ease"}} className="queryvariables">
            <div className="queryvariables__header">
                <h3 className='queryvariables__name'>{locale.vars}</h3>
                <Button 
                    variant="contained"
                    className='queryvariables__add' 
                    onClick={() => {
                        const newvars = [...vars, ["", ""]]
                        setvar([...vars, ["", ""]])
                    }}
                >
                    {locale.addvar}
                </Button>
                <Button 
                    variant="contained"
                    className='queryvariables__close'
                    onClick={() => {setCloled(!isClosed)}}
                >
                    {isClosed ? locale.open : locale.close}
                </Button>
            </div>
            <div className="queryvariables__main">
                {
                    vars.map((el, i) => (
                        <div key={i} className="queryvariable">
                            <input 
                                style={{'display': isClosed ? "none" : "flex"}}
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
                                style={{'display': isClosed ? "none" : "flex"}}
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
        </section>
    );
}

export default QueryVariables;