import React, { useLayoutEffect } from 'react';
import './Docs.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'firebase/firebase';
import { useNavigate } from 'react-router-dom';

function Docs() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useLayoutEffect(() => {
      console.log(loading, user)
      if (!loading && !user) {
        navigate('/')
        return;
      }
    }, [user, loading]);
    return (
        <main className="docs">
            <p>{'Documentation was translated only on english :('}</p>
            <p>Original docs: </p>
            <a target="_blank" href="https://rickandmortyapi.com/documentation/">https://rickandmortyapi.com/documentation/</a>
            <p></p>
            <strong className='docs_strong'>Introduction</strong>
            <p>This documentation will help you get familiar with the resources of the Rick and Morty API and show you how to make different queries, so that you can get the most out of it.</p>
            <strong>GraphQL</strong>
            <p>https://rickandmortyapi.com/graphql</p>
            <pre className='docs_code'><code>{`
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
`}
            </code></pre>
            <strong className='docs_strong'>Info and Pagination</strong>
            <p>The API will automatically paginate the responses. You will receive up to 20 documents per page.</p>
            <p>Each resource contains an info object with information about the response.</p>
            <pre>Key	Type	Description</pre>
            <pre>count	int	The length of the response</pre>
            <pre>pages	int	The amount of pages</pre>
            <pre>next	string (url)	Link to the next page (if it exists)</pre>
            <pre>prev	string (url)	Link to the previous page (if it exists)</pre>
            <strong className='docs_strong'>Character</strong>
            <p>There is a total of 826 characters sorted by id.</p>
            <strong className='docs_strong'>Character schema</strong>
            <pre>Key	Type	Description</pre>
            <pre>id	int	The id of the character.</pre>
            <pre>name	string	The name of the character.</pre>
            <pre>status	string	The status of the character ('Alive', 'Dead' or 'unknown').</pre>
            <pre>species	string	The species of the character.</pre>
            <pre>type	string	The type or subspecies of the character.</pre>
            <pre>gender	string	The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').</pre>
            <pre>origin	object	Name and link to the character's origin location.</pre>
            <pre>location	object	Name and link to the character's last known location endpoint.</pre>
            <pre>image	string (url)	Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.</pre>
            <pre>episode	array (urls)	List of episodes in which this character appeared.</pre>
            <pre>url	string (url)	Link to the character's own URL endpoint.</pre>
            <pre>reated	string	Time at which the character was created in the database.</pre>
            <strong className='docs_strong'>Location</strong>
            <p>There is a total of 126 locations sorted by id.</p>
            <strong className='docs_strong'>Location schema</strong>
            <pre>Key	Type	Description</pre>
            <pre>id	int	The id of the location.</pre>
            <pre>name	string	The name of the location.</pre>
            <pre>type	string	The type of the location.</pre>
            <pre>dimension	string	The dimension in which the location is located.</pre>
            <pre>residents	array (urls)	List of character who have been last seen in the location.</pre>
            <pre>url	string (url)	Link to the location's own endpoint.</pre>
            <pre>created	string	Time at which the location was created in the database.</pre>
            <strong className='docs_strong'>Episode</strong>
            <p>There is a total of 51 episodes sorted by id (which is of course the order of the episodes)</p>
            <strong className='docs_strong'>Episode schema</strong>
            <pre>Key	Type	Description</pre>
            <pre>id	int	The id of the episode.</pre>
            <pre>name	string	The name of the episode.</pre>
            <pre>air_date	string	The air date of the episode.</pre>
            <pre>episode	string	The code of the episode.</pre>
            <pre>characters	array (urls)	List of characters who have been seen in the episode.</pre>
            <pre>url	string (url)	Link to the episode's own endpoint.</pre>
            <pre>created	string	Time at which the episode was created in the database.</pre>
        </main>
    );
}

export default Docs;
