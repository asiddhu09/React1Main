import React from 'react';

function App() {
  const dateTime = new Date().toLocaleString();

  return (
    <div>
      <p>Current date and time:</p>
      <p>{dateTime}</p>
    </div>
  );
}

export default App;
