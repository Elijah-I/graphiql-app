import useLanguage from 'hooks/useLanguage';
import { Button } from "@mui/material";
import React from 'react';
import './QueryEditor.scss';

interface IQueryEditor {
    fetchquery: () => void;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}
function QueryEditor({fetchquery, query, setQuery}: IQueryEditor) {
    const locale = useLanguage('graphqli');
    return (
        <div className="queryeditor">
            <h3 className="queryeditor__name">{locale.query}</h3>
            <textarea 
                value={query} 
                onChange={(e) => {
                    setQuery(e.currentTarget.value);
                }} 
                className="queryeditor__query"
            ></textarea>
            <Button 
                variant="contained" 
                className="queryeditor__button"
                onClick={() => fetchquery()}
            >
                {locale.sendquery}
            </Button>
        </div>
    );
}

export default QueryEditor;