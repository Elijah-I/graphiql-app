import React from 'react';

interface IQueryEditor {
    fetchquery: () => void;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}
function QueryEditor({fetchquery, query, setQuery}: IQueryEditor) {
    return (
        <div style={{'display': 'flex', 'flexDirection': 'column'}}>
            <h3 style={{'height': '30px', 'textAlign': 'center'}}>Query</h3>
            <textarea 
                value={query} 
                onChange={(e) => {
                    setQuery(e.currentTarget.value);
                }} 
                style={{'width': '100%', 'height': '100%'}}
            ></textarea>
            <button onClick={() => fetchquery()}>Send query</button>
        </div>
    );
}

export default QueryEditor;