import React, { useEffect, useState } from 'react';

function HealthCheck() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/health`)
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus('Error'));
  }, []);

  return <div>Backend Health: {status}</div>;
}

export default HealthCheck; 