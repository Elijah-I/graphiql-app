import useLanguage from 'hooks/useLanguage';
import React from 'react';
import './QueryResponse.scss';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function QueryResponse({response} : {response: string}) {
    const locale = useLanguage('graphqli');
    const navigate = useNavigate();
    return (
        <div className='queryresponse'>
            <h3 className="queryresponse__name">{locale.response}</h3>
            <textarea value={response} className='queryresponse__text' disabled={true}></textarea>
            <Button 
                variant="contained" 
                className="queryeditor__button"
                onClick={() => navigate('/docs')}
            >
                {locale.docs}
            </Button>
        </div>
    )
}

export default QueryResponse;