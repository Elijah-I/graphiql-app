import useLanguage from 'hooks/useLanguage';
import React from 'react';

function QueryResponse({response} : {response: string}) {
    const locale = useLanguage('graphqli');
    return (
        <div style={{'display': 'flex', 'flexDirection': 'column'}}>
            <h3 style={{'height': '30px', 'textAlign': 'center'}}>{locale.response}</h3>
            <textarea value={response} style={{'width': '100%', 'height': '100%'}} disabled={true}></textarea>
        </div>
    )
}

export default QueryResponse;