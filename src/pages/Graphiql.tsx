import QueryEditor from "components/QueryEditor";
import QueryHeaders from "components/QueryHeaders";
import QueryResponse from "components/QueryResponce";
import QueryVariables from "components/QueryVariables";
import { auth } from "firebase/firebase";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import './Graphiql.scss';

const Graphiql = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    console.log(loading, user)
    if (!loading && !user) {
      navigate('/')
      return;
    }
  }, [user, loading]);

  const [vars, setVariables] = useState<Array<[string, string]>>([["", ""]]);
  const [heads, setHeaders] = useState<Array<[string, string]>>([["", ""]]);
  useEffect(() => {
    console.log(vars);
  }, [vars])
  useEffect(() => {
    let headers = new Headers();
    heads.forEach((el) => {
      try{
        headers.append(el[0], el[1])
      } catch {
        
      }
    })
    let variabs = {};
    vars.forEach((el) => { 
      variabs = {...variabs, [el[0]]: el[1]}
    });
    fetch('https://countries.trevorblades.com', {
      method: 'POST',
      headers: {
        ...headers,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        {
          countries {
            name
            code
          }
        }`,
        variables: variabs
      })
    })
    .then(res => res.json())
	  .then(res => console.log(res.data));
  })
  return (
    <div className="queryElements">
      <QueryVariables vars={vars} setvar={setVariables}/>
      <QueryHeaders />
      <QueryEditor />
      <QueryResponse />
    </div>
  );
};

export default Graphiql;
