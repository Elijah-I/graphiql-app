import useLanguage from 'hooks/useLanguage';
import { Button } from "@mui/material";
import React from 'react';

interface IQueryEditor {
    fetchquery: () => void;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}
function QueryEditor({fetchquery, query, setQuery}: IQueryEditor) {
    const locale = useLanguage('graphqli');
    return (
        <div style={{'display': 'flex', 'flexDirection': 'column'}}>
            <h3 style={{'height': '30px', 'textAlign': 'center'}}>{locale.query}</h3>
            <textarea 
                value={query} 
                onChange={(e) => {
                    setQuery(e.currentTarget.value);
                }} 
                style={{'width': '100%', 'height': '100%'}}
            ></textarea>
            <Button variant="contained" onClick={() => fetchquery()}>{locale.sendquery}</Button>
        </div>
    );
}

export default QueryEditor;