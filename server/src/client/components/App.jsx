import {useEffect, useState} from 'react';

const App = () => {
  const [cheeses, setCheeses] = useState([]);
  useEffect(() => {
    // Cancel the fetch request
    const controller = new AbortController();
    const {signal} = controller;

    fetch(`${process.env.REVERSE_PROXY_URL}/api/cheeses`, {signal})
      .then(resp => resp.json())
      .then(data => {setCheeses(data);})
      .catch(err => console.error(err));

    return () => {
      controller.abort();
    };
  }, []);

  return cheeses.map((cheese, i) =>
    (<div key={i}>
      <h1>Download WittCepter</h1>
      <h3>{cheese.name}</h3>
      <h6>{cheese.description}</h6>
    </div>)
  );
};

export default App;