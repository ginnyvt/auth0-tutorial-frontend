import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const FetchEvents = () => {
  const [message, setMessage] = useState('');
  const { getAccessTokenSilently } = useAuth0();
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const callApi = async () => {
    try {
      const token = await getAccessTokenSilently();
      console.log(token);
      const response = await fetch(`${serverUrl}/authorized`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.text();

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container'>
      <p>{message}</p>
      <button onClick={callApi}>CALL API</button>
    </div>
  );
};

export default FetchEvents;
