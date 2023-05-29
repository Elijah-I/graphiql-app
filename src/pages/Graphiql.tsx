import QueryEditor from "components/QueryEditor";
import QueryHeaders from "components/QueryHeaders";
import QueryResponse from "components/QueryResponce";
import QueryVariables from "components/QueryVariables";
import { auth } from "firebase/firebase";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import './Graphiql.scss';
import useLanguage from "hooks/useLanguage";

const Graphiql = () => {
  const [user, loading] = useAuthState(auth);
  const [succeedRes, setSucceedRes] = useState(false);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (!loading && !user) {
      navigate('/')
      return;
    }
  }, [user, loading]);

  const [vars, setVariables] = useState<Array<[string, string]>>([["", ""]]);
  const [heads, setHeaders] = useState<Array<[string, string]>>([["", ""]]);
  const [query, setQuery] = useState<string>(`
  query {
    characters(page: 2, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        name
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
  `);
  const [response, setResponse] = useState("");

  function fetchquery() {
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
    fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        ...headers,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: variabs
      })
    })
    .then(res => res.json())
	  .then(res => {
      setSucceedRes(true);
      setResponse(JSON.stringify(res.data, null, 2));
    })
    .catch((err) => {
      if(err instanceof Error) {
        alert(err.message);
      }
    })
  }
  return (
    <main className="queryElements">
      <QueryVariables vars={vars} setvar={setVariables}/>
      <QueryHeaders vars={heads} setvar={setHeaders} />
      <QueryEditor fetchquery={fetchquery} query={query} setQuery={setQuery} />
      <QueryResponse succ={succeedRes} response={response}/>
    </main>
  );
};

export default Graphiql;
