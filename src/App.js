import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    // Fetch data from backend API
    fetch('/api/data')
      .then(response => response.json())
      .then(result => setData(result.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Frontend Microservice (ServiceA)</h1>
      <p>Data from Backend: {data}</p>
    </div>
  );
}

export default App;

